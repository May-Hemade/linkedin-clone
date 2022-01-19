import React, { useState } from "react"
import { Button, Form, FormControl, InputGroup, Modal } from "react-bootstrap"
import { useForm } from "react-hook-form"

export default function PostArea() {
  const [show, setShow] = useState(false)
  const [hasError, setHasError] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  //REACT FORM
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const submitForm = async (data) => {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/posts/",
      {
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU1MzE4ODczZDVjYjAwMTUzOTVhOWYiLCJpYXQiOjE2NDI0MTAzNzYsImV4cCI6MTY0MzYxOTk3Nn0.qDjDBTYnXI7X3Y3eWLOaKSMaVRFITbDsAwrjjesIIMc",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
    if (response.ok) {
    } else {
      setHasError(true)
    }
  }

  const onSubmit = (data) => {
    console.log(data)
    submitForm(data)
  }

  return (
    <div>
      <Button variant="primary" onClick={() => setShow(true)}>
        Custom Width Modal
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
            <InputGroup>
              <FormControl
                {...register("text", { required: true })}
                as="textarea"
                aria-label="With textarea"
              />
            </InputGroup>
          </Modal.Body>
          <input name="Post" type="submit" />
        </Form>
      </Modal>
    </div>
  )
}
