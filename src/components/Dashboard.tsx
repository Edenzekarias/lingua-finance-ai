import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { toast } from 'sonner';

const mockBills = [
  { id: 1, name: 'Safaricom Home Fibre', dueDate: '2025-05-15', amount: 3500, logo: 'https://www.safaricom.co.ke/images/scom-logo.png' },
  { id: 2, name: 'KPLC Postpaid', dueDate: '2025-05-20', amount: 1200, logo: 'https://www.kplc.co.ke/img/logo.png' },
  { id: 3, name: 'Nairobi Water', dueDate: '2025-05-25', amount: 800, logo: 'https://nwater.co.ke/wp-content/uploads/2021/08/logo.png' },
];

const mockSpending = {
  monthlyTotal: 45000,
  goal: 60000,
  suggestion: 'Reduce dining out expenses by 15% to meet your goal.',
  data: [
    { name: 'Jan', spending: 40000 },
    { name: 'Feb', spending: 35000 },
    { name: 'Mar', spending: 50000 },
    { name: 'Apr', spending: 45000 },
    { name: 'May', spending: 25000 },
  ],
};

type DashboardProps = {
  t: (key: string) => string;
};

export default function Dashboard({ t }: DashboardProps) {
  const handlePayBill = (billName: string) => {
    toast.success(`Payment for ${billName} initiated successfully!`);
  };

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Bill Organizer */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-brand-text mb-4">{t('billOrganizer.title')}</h2>
          <h3 className="text-lg font-semibold text-gray-600 mb-4">{t('billOrganizer.upcoming')}</h3>
          <div className="space-y-4">
            {mockBills.map((bill) => (
              <div key={bill.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <img src={bill.logo} alt={`${bill.name} logo`} className="h-10 w-10 object-contain"/>
                  <div>
                    <p className="font-semibold text-brand-text">{bill.name}</p>
                    <p className="text-sm text-gray-500">Due: {bill.dueDate}</p>
                  </div>
                </div>
                <div className="text-right">
                   <p className="font-bold text-lg text-safaricom-red">KSH {bill.amount.toLocaleString()}</p>
                   <button 
                    onClick={() => handlePayBill(bill.name)}
                    className="mt-1 bg-safaricom-green text-white px-4 py-1 rounded-md hover:bg-opacity-90 transition-colors text-sm font-semibold">
                     {t('bill.pay')}
                   </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Spending Tracker */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-brand-text mb-4">{t('spendingTracker.title')}</h2>
          <h3 className="text-lg font-semibold text-gray-600 mb-4">{t('spendingTracker.overview')}</h3>
          <div className="h-64 w-full mb-4">
            <ResponsiveContainer width="100%" height="100%">
                 <BarChart data={mockSpending.data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                    <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false}/>
                    <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `KSH ${value/1000}k`}/>
                    <Tooltip wrapperClassName="!bg-white !border-gray-300 !rounded-lg !shadow-lg" contentStyle={{color: '#1A202C'}}/>
                    <Legend wrapperStyle={{paddingTop: '20px'}}/>
                    <Bar dataKey="spending" fill="#00A859" radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="text-center">
            <p className="text-brand-text">{t('spending.goal')} <span className="font-bold text-safaricom-green">KSH {mockSpending.goal.toLocaleString()}</span></p>
            <p className="text-sm text-gray-500 mt-2">{t('spending.suggestion')} <span className='italic'>{mockSpending.suggestion}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}