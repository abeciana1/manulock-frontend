import { createFileRoute } from '@tanstack/react-router';
import DocumentListing from '../components/_documents/DocumentListing';
import { DashboardLayout } from '../components/_styled/Layout';

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <DocumentListing />
    </DashboardLayout>
  );
};

export const Route = createFileRoute('/dashboard')({
  component: DashboardPage,
});
