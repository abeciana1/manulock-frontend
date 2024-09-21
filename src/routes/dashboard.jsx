import { createFileRoute } from '@tanstack/react-router';

const DashboardPage = (props) => {
  console.log('props', props);
  return <div>Dashboard</div>;
};

export const Route = createFileRoute('/dashboard')({
  component: DashboardPage,
});
