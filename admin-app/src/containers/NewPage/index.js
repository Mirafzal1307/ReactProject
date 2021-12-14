import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import Layout from '../../components/Layout'
import Input from '../../components/UI/Input/Index'
import NewModal from '../../components/UI/Modal';
import linearCategories from '../../helpers/linearCategories';

function NewPage() {


    const [createModal, setCreateModal] = useState(false);
    const [title, setTitle] = useState('');
    const category = useSelector(state => state.category);
    const [categories, setCategories] = useState([]);
    const [categoryId, setCategoryId] = useState('');
    const [desc, setDesc] = useState('');
    const [banner, setBanner] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {

        setCategories(linearCategories(category.categories));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category])

    const handleBannerImages = (e) => {
        console.log(e);
    }
    const handleProductImages = (e) => {
        console.log(e);
    }



    const renderCreatePageModal = () => {
        return (
            <NewModal
                show={createModal}
                modalTitle={'Create New Page'}
                handeClose={() => setCreateModal(false)}
            >
                <Container>
                    <Row>
                        <Col>
                            <select className="form-control"
                                value={categoryId}
                                onchange={(e) => setCategoryId(e.target.value)}
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
                                placeholder={'Page Title '}
                                className="form-control-sm"
                            >
                            </Input>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Input
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                                placeholder={'Page Description'}
                                className="form-control-sm"
                            >
                            </Input>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <input
                                className="form-control "
                                type="file"
                                name="banners"
                                onchange={handleBannerImages}
                            />

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <input
                                className="form-control"
                                type="file"
                                name="product"
                                onchange={handleProductImages}
                            />

                        </Col>
                    </Row>
                </Container>


            </NewModal>
        )
    }



    return (
        <Layout sidebar >
            {renderCreatePageModal()}
            <button onClick={() => setCreateModal(true)} >  Create Page</button>
        </Layout>
    )
}

export default NewPage

