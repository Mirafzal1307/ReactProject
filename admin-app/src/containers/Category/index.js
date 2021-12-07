import React, { /* useEffect  */  useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { addCategory } from '../../actions';
import Layout from '../../components/Layout';
import Input from '../../components/UI/Input/Index';
// import Input from '../../components/UI/Input/Index';
import NewModal from '../../components/UI/Modal'

function Category(props) {


    const category = useSelector(state => state.category);
    const [categoryName, setCategoryName] = useState('');
    const [parentCategoryId, setParentCategoryId] = useState('');
    const [categoryImage, setCategoryImage] = useState('');

    const [show, setShow] = useState(false);

    const dispatch = useDispatch();
    // useEffect(() => {
    //     console.log(`Category.js`)
    //     dispatch(getAllCategory());

    // }, []);


    const handleClose = () => {
        const form = new FormData();
        form.append('name', categoryName);
        form.append('parentId', parentCategoryId);
        form.append('categoryImage', categoryImage);
        dispatch(addCategory(form));
        setCategoryName('');
        setParentCategoryId('');


        setShow(false)
    }

    const handleShow = () => setShow(true);

    function renderCategories(categories) {


        let myCategories = [];

        for (let category of categories) {
            console.log(category);
            myCategories.push(

                <li key={category.name}>
                    {category.name}
                    {category.children.length > 0 ? (<ul>{renderCategories(category.children)}</ul>) : null}
                </li>
            );
        }
       



        return myCategories;

    }
    // eslint-disable-next-line no-unused-vars
    const createCategoryList = (categories, options = []) => {

        for (let category of categories) {
            options.push({ value: category._id, name: category.name });
            if (category.children.length > 0) {
                createCategoryList(category.children, options)
            }
        }

        return options;

    }

    // eslint-disable-next-line no-unused-vars
    const handleCategoryImage = (e) => {
        setCategoryImage(e.target.files[0]);
    }
    return (
        <Layout sidebar>
            <Container>
                <Row>

                    <Col md={12}>
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>

                            <h3>
                                Category
                            </h3>
                            <button onClick={handleShow}>
                                Add
                            </button>
                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col md={12}>

                        <ul>
                            {renderCategories(category.categories)}
                       
                        </ul>
                    </Col>
                </Row>
            </Container>
            <NewModal
                show={show}
                handleClose={handleClose}
                madalTitle={'Add New Category'}

            >
                
                 <Input 
                        value={categoryName}
                        placeholder={`Category Name`}
                        onChange={(e) => setCategoryName(e.target.value)}
                    />

                    <select className="form-control"
                        value={parentCategoryId}

                        onChange={(e) => setParentCategoryId(e.target.value)}>
                        <option>
                            Select category
                        </option>
                        {
                            createCategoryList(category.categories).map(option => <option key={option.value} value={option.value}  >{option.name}</option>)
                        }

                    </select>
                    <input type="file" name="categoryImage" onChange={handleCategoryImage} />


            </NewModal>




        </Layout>
    )
}

export default Category
