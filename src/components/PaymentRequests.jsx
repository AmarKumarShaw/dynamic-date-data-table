import PaymentRequestsTable from './PaymentRequestsTable';

const PaymentRequests = () => {
  // Mock data for the table
  const mockRequests = [
    {
      id: '1',
      createdOn: new Date('2023-04-30'),
      contact: { initials: 'CB', name: 'Charles Bonito' },
      amount: 10000.00,
      status: 'Active',
      account: 'Ops / Payroll'
    },
    {
      id: '2',
      createdOn: new Date('2023-04-30'),
      contact: { initials: 'CB', name: 'Charles Bonito' },
      amount: 10000.00,
      status: 'Processing',
      account: 'Ops / Payroll'
    },
    {
      id: '3',
      createdOn: new Date('2023-04-30'),
      contact: { initials: 'CB', name: 'Rocky Bonito' },
      amount: 10000.00,
      status: 'Processing',
      account: 'Ops / Payroll'
    },
    {
      id: '4',
      createdOn: new Date('2023-04-30'),
      contact: { initials: 'CB', name: 'Amar Bonito' },
      amount: 10000.00,
      status: 'Processing',
      account: 'Ops / Payroll'
    },
    {
      id: '5',
      createdOn: new Date('2023-04-29'),
      contact: { initials: 'CB', name: 'Charles Bonito' },
      amount: 10000.00,
      status: 'Paid',
      account: 'Ops / Payroll'
    },
    {
      id: '6',
      createdOn: new Date('2023-04-29'),
      contact: { initials: 'CB', name: 'Charles Bonito' },
      amount: 10000.00,
      status: 'Overdue',
      account: 'Ops / Payroll'
    },
    {
      id: '7',
      createdOn: new Date('2023-04-28'),
      contact: { initials: 'JS', name: 'John Smith' },
      amount: 15000.00,
      status: 'Expired',
      account: 'Marketing / Events'
    },
    {
      id: '8',
      createdOn: new Date('2023-04-28'),
      contact: { initials: 'AS', name: 'Alice Sanders' },
      amount: 8500.00,
      status: 'Processing',
      account: 'IT / Equipment'
    },
    {
      id: '9',
      createdOn: new Date('2023-04-27'),
      contact: { initials: 'RJ', name: 'Robert Johnson' },
      amount: 12000.00,
      status: 'Canceled',
      account: 'Sales / Commission'
    },
    {
      id: '10',
      createdOn: new Date('2023-04-27'),
      contact: { initials: 'EW', name: 'Emma Wilson' },
      amount: 9500.00,
      status: 'Paid',
      account: 'HR / Training'
    }
  ];

  return (
    <div className="w-full bg-white sm:bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 max-w-7xl">
        <div className="flex flex-wrap items-center justify-between mb-4 sm:mb-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-0">
            Requests
          </h1>
        </div>
        <div className="bg-white sm:shadow-sm rounded-lg overflow-hidden">
          <PaymentRequestsTable requests={mockRequests} />
        </div>
      </div>
    </div>
  );
};

export default PaymentRequests;