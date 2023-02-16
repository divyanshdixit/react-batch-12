import React from "react";
import BasicInput from "../input";
import Button from "@mui/material/Button";

function InputButtonGrp({listName, data, handleChange, closeButton, createButton, list}) {
  console.log(listName)
  return (
    <>
      
      {
        list ? 
        (
          <>
            <BasicInput name={data} handleChange={handleChange} placeholder={`Enter the list title...`}/>
          </>

        )
        :
        (
          <>
            <BasicInput name={data.name} nameAtr='name' handleChange={handleChange} placeholder={`Enter the Card title...`}/>
            <BasicInput name={data.description} nameAtr='description' handleChange={handleChange} placeholder={`Enter the Card description...`}/>
            <Button variant="contained" component="label" className="upload_image">
              Upload Image
              <input hidden accept="image/*" type="file" handleChange={handleChange}/>
            </Button>

          </>
        )
      }
      <Button onClick={() => createButton(listName ? listName : '')} variant="contained" color="success">
        {" "}
        Add {list ? `List` : `Card`}
      </Button>
      <Button onClick={closeButton} variant="contained" color="warning">
        {" "}
        X{" "}
      </Button>
    </>
  );
}

export default InputButtonGrp;
