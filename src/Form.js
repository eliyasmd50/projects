import { useState } from "react";

export const Form = () => {
    const [ videoFile, setVideoFile ] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith("video/")) {
            setVideoFile(file);
        } else {
            alert("Please upload a valid video");
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(videoFile) {
            const formData = new FormData();
            formData.append('video', videoFile);

            //server connnection 
            fetch("http://localhost:4500/upload", {
                method: 'POST',
                body: formData
            })
                .then((resposne) => resposne.json())
                .then((data) => 
                    console.log(`Uploaded Successfully: ${data}`)
                     )
                .catch((error) => console.log(`Upload Error: ${error.message}`))
        } else {
            alert("No video files selected");
        }
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <label>
               Upload File
                <input 
                    type='file' 
                    className="video-upload"
                    accept='video/*'
                    onChange={handleFileChange}
                />
            </label>
            <button type='submit' className="video-upload-button">Upload</button>
        </form>
    </>
  )
}
