import React, { useState } from 'react';
import axios from 'axios';

function Testing() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadedImageUrl, setUploadedImageUrl] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('file', selectedFile);
         // '//${window.location.host}/api/upload/
        try {
            await axios.post(`//${window.location.host}/api/upload/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('File uploaded successfully');
        } catch (error) {
            console.error('File upload failed:', error);
        }
    };

    const handleFetchImage = async () => {
        try {
          const response = await axios.get(`//${window.location.host}/api/upload/`); // Change the URL to your Django API endpoint
          setUploadedImageUrl(response.data.message); // Assuming the API returns the URL of the image
        
        } catch (error) {
          console.error('Error fetching image:', error);
        }
      };

    return (
        <div>

            <div>
                <input type="file" onChange={handleFileChange} />
                <button onClick={handleUpload}>Upload</button>
            </div>
            <div>
                <button onClick={handleFetchImage}>Fetch Image</button>

                {uploadedImageUrl && (
                    <div>
                    <h2>Image from API</h2>
                    <img src={ `//${window.location.host}/media/` +uploadedImageUrl} alt="Fetched"  style={{width:"300px",height:"300px"}}/>
                    </div>
                )}
                </div>
        </div>
    );
}

export default Testing;
