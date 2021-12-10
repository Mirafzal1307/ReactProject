import React, { useState } from 'react'
import Layout from '../../components/Layout';
import {
    Container, Col, Row, Table

} from 'react-bootstrap'
import Input from '../../components/UI/Input/Index';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct } from '../../actions';
import NewModal from '../../components/UI/Modal';
import './style.css'
// import Category from './../Category/index';
import { generatePublicUrl} from '../../urlConfig'


const Products = (props) => {

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [productPictures, setProductPictures] = useState('');
    const [productDetails, setProductDetails] = useState(null)
    const [show, setShow] = useState(false);
    const [productDetailModal, setProductDetailModal] = useState(false)
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
            form.append("productPictures", pic);
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


    console.log(product)
    const renderProducts = () => {
        return (
            <Table style={{ fontSize: 12 }} responsive="sm"  >
                <thead>
                    <tr>
                        <th># </th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.products.length > 0 ?
                            product.products.map(product =>
                                <tr onClick={() => showProductDetailsModal(product)} key={product._id}  >
                                    <td> 2  </td>
                                    <td>  {product.name}  </td>
                                    <td> {product.price}   </td>
                                    <td> {product.quantity}   </td>
                                    <td>{product.category.name} </td>
                                </tr>
                            ) : null
                    }
                </tbody>
            </Table>
        )
    }
    const renderAddProductModal = () => {
        return (
            <NewModal

                show={show}
                handleClose={handleClose}
                modalTitle={"Add New Product"}
            >
                <Input
                    label="Name"
                    value={name}
                    placeholder={product.name}
                    onChange={(e) => setName(e.target.value)}
                />

                <Input
                    label="Quantity"
                    value={quantity}
                    placeholder={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />

                <Input
                    label="Price"
                    value={price}
                    placeholder={price}
                    onChange={(e) => setPrice(e.target.value)}
                />

                <Input
                    label="Description"
                    value={description}
                    placeholder={description}
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
                {
                    productPictures.length > 0 ?
                        productPictures.map((pic, index) => <div key={index} >{pic.name}</div>) : null
                }


                <input type="file" name="productPicture" onChange={handleProducutPicture} />

            </NewModal>
        );
    }

    const handleCloseProductDetailsModal = () => {
        setProductDetailModal(false);
    }
    const showProductDetailsModal = (product) => {
        setProductDetails(product);
        setProductDetailModal(true);

    }

    const renderProductDetailsModal = () => {

        if (!productDetails) {
            return null;
        }
        return (
            <NewModal
                show={productDetailModal}
                handleClose={handleCloseProductDetailsModal}
                modalTitle={'Product details'}
                size="lg"     >
                <Row>
                    <Col md="6" >
                        <label className="key">Name</label>
                        <p className="value" >
                            {productDetails.name}
                        </p>

                    </Col>
                    <Col md="6" >
                        <label className="key">Price</label>
                        <p className="value" >
                            {productDetails.price}
                        </p>

                    </Col>


                </Row>
                <Row>
                    <Col md="6" >
                        <label className="key">Quantity</label>
                        <p className="value" >
                            {productDetails.quantity}
                        </p>

                    </Col>
                    <Col md="6" >
                        <label className="key">Category</label>
                        <p className="value" >
                            {productDetails.category.name}
                        </p>

                    </Col>


                </Row>
                <Row>
                    <Col md="12" >
                        <label className="key">Description</label>
                        <p className="value" >
                            {productDetails.description}
                        </p>

                    </Col>
                </Row>
                <Row>
                    <Col  >
                        <label className="key" >Product Picture</label>
                        <div style={{ display: 'flex' }}>
                            {productDetails.productPictures.map(picture =>
                                <div className="productImgContainer" >

                                    <img src={generatePublicUrl(picture.img)} alt="rasm" />

                                </div>

                            )}
                        </div>



                    </Col>
                </Row>
            </NewModal >
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


            {renderAddProductModal()}
            {renderProductDetailsModal()}



        </Layout>
    )
}

export default Products