import React, { useState } from 'react'
import Layout from '../../components/Layout';
import { Container, Col, Row, Table } from 'react-bootstrap'
import Input from '../../components/UI/Input/Index';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct } from '../../actions/product.action';
import NewModal from '../../components/UI/Modal';

const Products = () => {

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [productPictures, setProductPictures] = useState('');
    const [show, setShow] = useState(false);
    const category = useSelector(state => state.category);
    const product = useSelector(state => state.product);
    
    
    const dispatch = useDispatch();

    const handleClose = () => {
        const form = new FormData();
        form.append('name', name);
        form.append('quantity', quantity);
        form.append('price', price);
        form.append('description', description);
        form.append('category', categoryId);

        for (let pic of productPictures) {
            form.append("productPictures", pic );
        }
        dispatch(addProduct(form))
        setShow(false)
    }

    const createCategoryList = (categories, options = []) => {

        for (let category of categories) {
            options.push({ value: category._id, name: category.name });
            if (category.children.length > 0) {
                createCategoryList(category.children, options)
            }
        }

        return options;

    }

    const handleShow = () => setShow(true);


    const handleProducutPicture = (e) => {
        setProductPictures([
            ...productPictures,
            e.target.files[0]

        ]);




    }

    const renderProducts = () => {
        return (
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Description</th>
                        <th>Category</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        product.length > 0 ? product.map(product => 
                            <tr key={product?._id}>
                                <td>2</td>
                                <td>{product?.name}</td>
                                <td>{product?.price}</td>
                                <td>{product?.quantity}</td>
                                <td>{product?.description}</td>
                                <td>--</td>
                            </tr> ) : null
                    }
                </tbody>
            </Table>
        )
    }
    return (
        <Layout sidebar>

            <Container>
                <Row>

                    <Col md={12}>
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>

                            <h3>
                                Products
                            </h3>
                            <button onClick={handleShow}>
                                Add
                            </button>
                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        {renderProducts()}
                    </Col>
                </Row>
            </Container>


            <NewModal

                show={show}
                handleClose={handleClose}
                modalTitle={"Add New Product"}

            >
                <Input
                    label="Name"
                    value={name}
                    placeholder={`Product Name`}
                    onChange={(e) => setName(e.target.value)}
                />

                <Input
                    label="Quantity"
                    value={quantity}
                    placeholder={`Quantity`}
                    onChange={(e) => setQuantity(e.target.value)}
                />

                <Input
                    label="Price"
                    value={price}
                    placeholder={`Price`}
                    onChange={(e) => setPrice(e.target.value)}
                />

                <Input
                    label="Description"
                    value={description}
                    placeholder={`Description`}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <select className="form-control" style={{ marginTop: '20px' }}
                    value={categoryId}

                    onChange={(e) => setCategoryId(e.target.value)}>
                    <option>

                        Select category
                    </option>
                    {
                        createCategoryList(category.categories).map(option => <option key={option.value} value={option.value}  >{option.name}</option>)
                    }

                </select>

                {/* <Input
                        label="Products pictures"
                        value={productPictures}
                        placeholder={`Products pictures`}
                        onChange={(e) => setProductPictures(e.target.value)}
                    /> */}

                {
                    productPictures.length > 0 ?
                        productPictures.map((pic, index) => <div key={index} >{pic.name}</div>) : null
                }


                <input type="file" name="productPicture" onChange={handleProducutPicture} />

            </NewModal>
        </Layout>
    )
}

export default Products

