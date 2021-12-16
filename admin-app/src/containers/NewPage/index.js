import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../components/Layout'
import Input from '../../components/UI/Input/Index'
import NewModal from '../../components/UI/Modal';
import linearCategories from '../../helpers/linearCategories';
import { createPage } from '../../actions'

function NewPage() {


    const [createModal, setCreateModal] = useState(false);
    const [title, setTitle] = useState('');
    const category = useSelector(state => state.category);
    const [categories, setCategories] = useState([]);
    const [categoryId, setCategoryId] = useState('');
    const [desc, setDesc] = useState('');
    const [type, setType] = useState('');
    const [banners, setBanners] = useState([]);
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch()
    const page = useSelector(state => state.page)


    useEffect(() => {

        setCategories(linearCategories(category.categories));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category])

    useEffect(() => {
        console.log(page);
        if (!page.loading) {
            setCreateModal(false);
            setTitle('');
            setCategoryId('');
            setDesc('');
            setProducts([]);
            setBanners([]);


        }
    }, [page])

    const onCategoryChange = (e) => {
        const category = categories.find(category => category._id === e.target.value)
        setCategoryId(e.target.value)
        setType(category.type);
    }
    const handleBannerImages = (e) => {
        console.log(e);
        setBanners([...banners, e.target.files[0]])
    }

    const handleProductImages = (e) => {
        console.log(e);
        setProducts([...products, e.target.files[0]])
    }

    const submitPageForm = (e) => {
        // e.target.preventDefault();

        if (title === "") {
            alert('Title is required');
            setCreateModal(false);
            return;
        }
        const form = new FormData();
        form.append('title', title);
        form.append('description', desc);
        form.append('category', categoryId);
        form.append('type', type)
        banners.forEach((banner, index) => {
            form.append('banners', banner);
        })
        products.forEach((product, index) => {
            form.append('products', product)
        });

        dispatch(createPage(form))


    }


    const renderCreatePageModal = () => {
        return (
            <NewModal
                show={createModal}
                modalTitle={'Create New Page'}
                handleClose={() => setCreateModal(false)}
                onSubmit={submitPageForm}

            >
                <Container>
                    <Row>
                        <Col>
                            <select className="form-control"
                                value={categoryId}
                                onChange={onCategoryChange}
                            >
                                <option value="">
                                    select category
                                </option>
                                {
                                    categories.map(cat => <option key={cat._id} value={cat._id} >
                                        {cat.name}
                                    </option>)

                                }


                            </select>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Input
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder={'Page Title'}
                                className=""
                            >
                            </Input>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Input
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                                placeholder={'Page Desc'}
                                className="form-control-sm"
                            >
                            </Input>
                        </Col>
                    </Row>

                    <Row>

                        {
                            banners.length > 0 ?
                                banners.map((banner, index) =>
                                    <Row key={index} >
                                        <Col>

                                            {banner.name}
                                        </Col>
                                    </Row>


                                ) : null
                        }
                        <Col>
                            <input
                                className="form-control"
                                type="file"
                                name="banners"
                                onChange={handleBannerImages}
                            />

                        </Col>
                    </Row>

                    {
                        products.length > 0 ?
                            products.map((product, index) =>
                                <Row key={index}>
                                    <Col>

                                        {product.name}
                                    </Col>
                                </Row>


                            ) : null
                    }

                    <Row>
                        <Col>
                            <input
                                className="form-control"
                                type="file"
                                name="products"
                                onChange={handleProductImages}
                            />

                        </Col>
                    </Row>
                </Container>


            </NewModal>
        )
    }



    return (
        <Layout sidebar >
            {
                page.loading ?
                    <p> Creating page please wait...</p>
                    :
                    <>
                        {renderCreatePageModal()}
                        < button onClick={() => setCreateModal(true)} >  Create Page</button>
                    </>

            }

        </Layout >
    )
}

export default NewPage

