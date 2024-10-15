import React, { useState, useRef } from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';
import { TiTimes } from 'react-icons/ti';
import { FaFile } from 'react-icons/fa';
import PropTypes from 'prop-types';

const FileUploader = () => {
  const toast = useRef(null);
  const [totalSize, setTotalSize] = useState(0);

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

  const onTemplateRemove = (file, callback) => {
    setTotalSize(totalSize - file.size);
    callback();
  };

  const onTemplateClear = () => {
    setTotalSize(0);
  };

  const emptyTemplate = () => (
    <div className="text-center p-4 bg-white text-lg px-2">
      Drag and drop file here
    </div>
  );

  const itemTemplate = (file, props) => {
    return (
      <div className="w-4/5 relative flex flex-col sm:flex-row justify-center p-4 max-w-fit mx-auto">
        <div className="flex gap-3">
          <FaFile size={30} />
          <span className="flex flex-col text-left text-lg">
            <span className="flex flex-wrap">{file.name}</span>
            {/* eslint-disable-next-line react/prop-types */}
            <span className="text-md">{props.formatSize}</span>
            <small>{new Date().toLocaleDateString()}</small>
          </span>
        </div>
        <button
          className="absolute top-3 right-3 md:-right-4 ring-1 ring-primary rounded-full h-5 w-5 flex justify-center items-center"
          // eslint-disable-next-line react/prop-types
          onClick={() => onTemplateRemove(file, props.onRemove)}
        >
          <TiTimes />
        </button>
      </div>
    );
  };

  itemTemplate.propTypes = {
    props: {
      formatSize: PropTypes.string,
    },
  };

  return (
    <div className="card flex justify-center">
      <Toast ref={toast}></Toast>
      <div className="border-4 border-neutral-medium rounded-md border-dashed">
        <FileUpload
          name="demo[]"
          url={'/api/upload'}
          multiple={false}
          // accept="image/*"
          accept="application/pdf"
          maxFileSize={10000000}
          className="bg-primary-light"
          chooseOptions={chooseOptions}
          uploadOptions={uploadOptions}
          cancelOptions={cancelOptions}
          headerClassName="bg-zinc-200 p-2 sm:p-4 flex gap-2 flex-wrap"
          emptyTemplate={emptyTemplate}
          itemTemplate={itemTemplate}
          onError={onTemplateClear}
          onClear={onTemplateClear}
        />
      </div>
    </div>
  );
};

export default FileUploader;
