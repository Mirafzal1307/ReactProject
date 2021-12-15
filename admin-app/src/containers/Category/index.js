import React, { /* useEffect  */  useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import {
    getAllCategory, addCategory, updateCategories,
    deleteCategories as deleteCategoriesAction
} from '../../actions';
import Layout from '../../components/Layout';
// import Input from '../../components/UI/Input/Index';
import NewModal from '../../components/UI/Modal';
import CheckboxTree from 'react-checkbox-tree';
import {
    IoIosCheckbox,
    IoIosCheckboxOutline,
    IoIosArrowDown,
    IoIosArrowForward,
    IoIosAdd,
    IoIosTrash,
    IoMdCreate

} from "react-icons/io";
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import UpdateCategoriesModal from './components/UpdateCategoriesModal';
import AddCategoryModal from './components/AddCategoryModal';
import './style.css';

function Category(props) {


    const category = useSelector(state => state.category);
    const [categoryName, setCategoryName] = useState('');
    const [parentCategoryId, setParentCategoryId] = useState('');
    const [categoryImage, setCategoryImage] = useState('');

    const [show, setShow] = useState(false);
    const [checked, setChecked] = useState([]);
    const [expanded, setExpanded] = useState([]);
    const [checkedArray, setCheckedArray] = useState([]);
    const [expandedArray, setExpandedArray] = useState([]);
    const [updateCategoryModal, setUpdateCategoryModal] = useState(false)
    const [deleteCategoryModal, setDeleteCategoryModal] = useState(false);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     console.log(`Category.js`)
    //     dispatch(getAllCategory());

    // }, []);


    const handleClose = () => {
        const form = new FormData();

        // if(categoryName === ""){
        //     alert("Name is required")
        //     return;
        // }


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
            // console.log(category);
            myCategories.push(
                {
                    label: category.name,
                    value: category._id,
                    children: category.children.length > 0 && renderCategories(category.children)
                }


            );
        }
        return myCategories;

    }
    // eslint-disable-next-line no-unused-vars
    const createCategoryList = (categories, options = []) => {

        for (let category of categories) {
            options.push({
                value: category._id,
                name: category.name,
                parentId: category.parentId , 
                type: category.type
            });
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

    const updateCateogry = () => {
        updateCheckAndExpandedCategories();
        setUpdateCategoryModal(true);

    }

    const updateCheckAndExpandedCategories = () => {
        const categories = createCategoryList(category.categories);

        const checkedArray = [];
        const expandedArray = [];
        checked.length > 0 && checked.forEach((categoryId, index) => {
            const category = categories.find((category, _index) => categoryId === category.value);
            category && checkedArray.push(category)
        })
        expanded.length > 0 && expanded.forEach((categoryId, index) => {
            const category = categories.find((category, _index) => categoryId === category.value);
            category && expandedArray.push(category)
        })

        setCheckedArray(checkedArray);
        setExpandedArray(expandedArray);


    }

    const handleCategoryInput = (key, value, index, type) => {
        if (type === "checked") {
            const updatedCheckedArray = checkedArray.map((item, _index) => index === _index ? { ...item, [key]: value } : item);
            setCheckedArray(updatedCheckedArray)
        } else if (type === "expanded") {
            const updatedExpandedArray = expandedArray.map((item, _index) => index === _index ? { ...item, [key]: value } : item)
            setExpandedArray(updatedExpandedArray)
        }

    }


    const updateCategoriesForm = () => {
        const form = new FormData();

        expandedArray.forEach((item, index) => {
            form.append('_id', item.value);
            form.append('name', item.name);
            form.append('parentId', item.parentId ? item.parentId : '')
            form.append('type', item.type)
        });

        checkedArray.forEach((item, index) => {
            form.append('_id', item.value);
            form.append('name', item.name);
            form.append('parentId', item.parentId ? item.parentId : '')
            form.append('type', item.type)
        });

        dispatch(updateCategories(form))


        setUpdateCategoryModal(false)
    }




    const deleteCategory = () => {
        updateCheckAndExpandedCategories()
        setDeleteCategoryModal(true)
    }

    const deleteCategories = () => {
        const checkedIdsArray = checkedArray.map((item, index) => ({ _id: item.value }));
        const expandedIdsArray = expandedArray.map((item, index) => ({ _id: item.value }));
        // eslint-disable-next-line no-unused-vars
        const idsArray = expandedIdsArray.concat(checkedIdsArray);
        if (checkedIdsArray.length > 0) {
            dispatch(deleteCategoriesAction(checkedIdsArray))
                .then(result => {
                    if (result) {
                        dispatch(getAllCategory())
                        setDeleteCategoryModal(false)
                    }
                });
        }


        setDeleteCategoryModal(false);
    }


    const renderDeleteCategoryModal = () => {
        console.log('delete', expandedArray)
        return (



            <NewModal
                modalTitle="Confirm"
                show={deleteCategoryModal}
                handleClose={() => setDeleteCategoryModal(false)}
                buttons={[
                    {
                        label: 'No',
                        color: 'primary',
                        onClick: () => {
                            alert('No');
                        }

                    },
                    {
                        label: 'Yes',
                        color: 'danger',
                        onClick: deleteCategories

                    }
                ]}
            >

                <h5> Expanded</h5>
                {
                    expandedArray.map((item, index) => <span key={index} >{item.name}</span>)

                }
                <h5>
                    Checked
                </h5>
                {
                    checkedArray.map((item, index) => <span key={index} >{item.name}</span>)
                }

            </NewModal>
        )
    }


    const categoryList = createCategoryList(category.categories)
    return (
        <Layout sidebar>
            <Container>
                <Row>

                    <Col md={12}>
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>

                            <h3>
                                Category
                            </h3>
                            <div className="actionBtnContainer" >
                                <span>
                                    Action:
                                </span>
                                <button onClick={handleShow}>
                                    <IoIosAdd />
                                    <span >
                                        Add
                                    </span>

                                </button>
                                <button onClick={deleteCategory} >
                                    <IoIosTrash />
                                    <span>
                                        Delete
                                    </span>

                                </button>
                                <button onClick={updateCateogry} >
                                    <IoMdCreate />
                                    <span>
                                        Edit
                                    </span>

                                </button>


                            </div>

                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col md={12}>

                        <CheckboxTree
                            nodes={renderCategories(category.categories)}
                            checked={checked}
                            expanded={expanded}
                            onCheck={checked => setChecked(checked)}
                            onExpand={expanded => setExpanded(expanded)}

                            icons={{
                                check: <IoIosCheckbox />,
                                uncheck: <IoIosCheckboxOutline />,
                                halfCheck: <IoIosCheckboxOutline />,
                                expandClose: <    IoIosArrowDown />,
                                expandOpen: <IoIosArrowForward />,
                            }}
                        />

                    </Col>
                </Row>

            </Container>

            <AddCategoryModal
                show={show}
                handleClose={handleClose}
                modalTitle="Add New Category"
                categoryName={categoryName}
                setCategoryName={setCategoryName}
                parentCategoryId={parentCategoryId}
                setParentCategoryId={setParentCategoryId}
                categoryList={categoryList}
                handleCategoryImage={handleCategoryImage}
            />


            <UpdateCategoriesModal
                show={updateCategoryModal}
                handleClose={updateCategoriesForm}
                modalTitle="Update Categories"
                size="lg"
                expandedArray={expandedArray}
                checkedArray={checkedArray}
                handleCategoryInput={handleCategoryInput}
                categoryList={categoryList}


            />


            {renderDeleteCategoryModal()}







        </Layout>
    )
}

export default Category
