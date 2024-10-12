import { createFileRoute } from '@tanstack/react-router';
import DocumentListing from '../components/_documents/DocumentListing';

const DashboardPage = (props) => {
  console.log('props', props);
  return (
    <>
      <DocumentListing />
    </>
  );
};

export const Route = createFileRoute('/dashboard')({
  component: DashboardPage,
});
