import React, { useRef } from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';

const FileUploader = () => {
  const toast = useRef(null);

  // const onUpload = () => {
  //   toast.current.show({
  //     severity: 'info',
  //     summary: 'Success',
  //     detail: 'File Uploaded',
  //   });
  // };

  const chooseOptions = {
    label: 'Choose',
    className:
      'bg-accent-blue text-primary-light px-2 py-1 rounded-md flex gap-1',
  };
  const uploadOptions = {
    label: 'Upload',
    className: 'bg-accent-green text-primary px-2 py-1 rounded-md flex gap-1',
  };
  const cancelOptions = {
    label: 'Cancel',
    className:
      'bg-accent-red text-primary-light px-2 py-1 rounded-md flex gap-1',
  };

  const emptyTemplate = () => (
    <div className="text-center p-4 bg-white text-lg">
      Drag and drop file here
    </div>
  );

  return (
    <div className="card flex justify-center">
      <Toast ref={toast}></Toast>
      <div className="border-4 border-neutral-medium rounded-md border-dashed">
        <FileUpload
          name="demo[]"
          url={'/api/upload'}
          multiple={false}
          accept="image/*"
          maxFileSize={1000000}
          className="bg-primary-light"
          chooseOptions={chooseOptions}
          uploadOptions={uploadOptions}
          cancelOptions={cancelOptions}
          headerClassName="bg-zinc-200 p-2 sm:p-4 flex gap-2 flex-wrap"
          emptyTemplate={emptyTemplate}
        />
      </div>
    </div>
  );
};

export default FileUploader;
