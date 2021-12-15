import React from "react"
import Input from '../../../components/UI/Input/Index';
import NewModal from '../../../components/UI/Modal';
import { Row, Col } from 'react-bootstrap'


const AddCategoryModal = (props) => {
    const {
        show,
        handleClose,
        modalTitle,
        categoryName,
        setCategoryName,
        parentCategoryId,
        setParentCategoryId,
        categoryList,
        handleCategoryImage


    } = props


    return (
        <NewModal
            show={show}
            handleClose={handleClose}
            modalTitle={modalTitle}

        >
            <Row>
                <Col>
                    <Input
                        value={categoryName}
                        placeholder={`Category Name`}
                        onChange={(e) => setCategoryName(e.target.value)}
                    className="form-control-sm"
                    
                    />
                </Col>
                <Col>
                    <select className="form-control form-control-sm"
                        value={parentCategoryId}

                        onChange={(e) => setParentCategoryId(e.target.value)}>
                        <option>
                            Select category
                        </option>
                        {
                            categoryList.map(option => <option key={option.value} value={option.value}  >{option.name}</option>)
                        }

                    </select>
                </Col>
            </Row>

            <Row>
                <Col>

                    <input type="file" name="categoryImage" onChange={handleCategoryImage} />


                </Col>
            </Row>

        </NewModal>
    )
}

export default AddCategoryModal
