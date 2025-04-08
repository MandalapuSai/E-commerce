import React, { useState } from "react";
import "./AdminCarousel.css";

import Img from '../../../assets/amlapickle.png'
import Img1 from '../../../assets/almonds.png'


const AdminCarousel = () => {
  const [images, setImages] = useState([
    { id: 1, src: Img },
    { id: 2, src: Img1 },
  ]);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => ({ id: Math.random(), src: URL.createObjectURL(file) }));
    setSelectedFiles([...selectedFiles, ...newImages]);
  };

  const removeSelectedFile = (id) => {
    setSelectedFiles(selectedFiles.filter((file) => file.id !== id));
  };

  const addCarouselImages = () => {
    if (selectedFiles.length > 0) {
      setImages([...images, ...selectedFiles]);
      setSelectedFiles([]);
    }
  };

  return (
    <div className="container">
      <h2 className="mb-3">Carousel Management</h2>

      <div className="d-flex flex-wrap gap-2 mb-3 mt-4">
        <input
          type="file"
          className="form-control file-upload"
          accept="image/*"
          multiple
          onChange={handleImageChange}
        />
        <button className="btn btn-dark" onClick={addCarouselImages}>Add Carousel</button>
      </div>

      {selectedFiles.length > 0 && (
        <div className="selected-images mt-3">
          <h4>Selected Images</h4>
          <div className="d-flex flex-wrap gap-2">
            {selectedFiles.map((file) => (
              <div key={file.id} className="selected-file position-relative">
                <img src={file.src} alt="Selected" className="img-preview" />
                <button className="btn-remove" onClick={() => removeSelectedFile(file.id)}>❌</button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="table-responsive mt-4">
        <table className="table table-bordered text-center">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {images.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>
                  <img src={item.src} alt="Uploaded"  style={{width:'50px'}}/>
                </td>
                <td>
                  <button className="btn-edit" >Edit</button>
                  <button className="btn-delete">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminCarousel;