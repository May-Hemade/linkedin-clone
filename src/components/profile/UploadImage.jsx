import React, { useState } from "react"

const UploadImage = ({ url, property }) => {
  const [selectedImage, setSelectedImage] = useState(null)

  const upload = async (e) => {
    e.preventDefault()
    const formData = new FormData()

    formData.append(property, selectedImage)

    const options = {
      method: "POST",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU1NjZjMzczZDVjYjAwMTUzOTVhYTYiLCJpYXQiOjE2NDI1MjM4ODMsImV4cCI6MTY0MzczMzQ4M30.E1_8l22F0P-RytaWCJNQ3thneG9O_OwfEs96qyYCt3I",
      },
      body: formData,
    }

    try {
      const response = await fetch(url, options)
      if (response.ok) {
        console.log("image uploaded")
      } else {
        console.log("image could not be uploaded")
      }
    } catch (e) {
      console.log(e)
      console.log("error occurred - image could not be uploaded")
    }
  }

  return (
    <div>
      {selectedImage && (
        <div>
          <img
            alt="not fount"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      )}
      <br />

      <br />
      <form onSubmit={(e) => upload(e)}>
        <input
          type="file"
          name={property}
          onChange={(event) => {
            console.log(event.target.files[0])
            setSelectedImage(event.target.files[0])
          }}
        />
        <input value="Upload" type="submit" />
      </form>
    </div>
  )
}

export default UploadImage
