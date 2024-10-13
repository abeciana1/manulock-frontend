import React from 'react';
import { useQuery } from 'react-query';
import useAxiosInstance from '../../../hooks/useAxiosInstance';
import { useSession } from '@clerk/clerk-react';
import { Heading1 } from '../../_styled/Headings';
import { useDispatch } from 'react-redux';
import { loading, success } from '../../../../redux/slices/loadingSlice';
import { SolidButton } from '../../_inputs/Buttons';
import { IoMdAdd } from 'react-icons/io';
import FileUploader from '../../FileUploader';

const DocumentListing = () => {
  const dispatch = useDispatch();
  const { session } = useSession();
  console.log('session data', session);
  const axiosInstance = useAxiosInstance();

  const fetchDocuments = async () => {
    const { data } = await axiosInstance.get('/my-documents', {
      headers: {
        'Content-Type': 'application/json',
        'Clerk-User-Id': session?.user?.id,
      },
    });
    return data;
  };

  const { data, isLoading, isSuccess } = useQuery('documents', fetchDocuments);
  console.log('data', data);
  console.log('isLoading', isLoading);
  console.log('isSuccess', isSuccess);

  if (isLoading) {
    dispatch(loading());
  }

  if (isSuccess) {
    dispatch(success());
  }

  console.log('data', data?.documents);

  return (
    <>
      <section>
        <div className="flex items-end gap-2 flex-wrap">
          <Heading1 text="My documents" color="primary" />
          <div className="mb-1">
            <SolidButton
              text="Upload"
              color="blue"
              iconFirst
              icon={IoMdAdd}
              iconSize={20}
              buttonSize="sm"
            />
          </div>
        </div>
        {data && data?.documents && isSuccess && (
          <>
            {data?.documents?.length < 1 && <FileUploader />}
            <ul>
              {data?.documents?.length > 0 &&
                data?.documents?.map((doc, index) => {
                  return <li key={index}>doc</li>;
                })}
            </ul>
          </>
        )}
      </section>
    </>
  );
};

export default DocumentListing;
