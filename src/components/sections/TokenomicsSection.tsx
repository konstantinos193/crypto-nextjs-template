import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { DollarSignIcon, UsersIcon, FlameIcon } from 'lucide-react';

// Data for the pie chart
const data = [
  { name: 'Liquidity Pool', value: 50, color: '#FF4500' }, // Grizzle Red
  { name: 'Community & Marketing', value: 30, color: '#36A2EB' }, // Grizzle Blue
  { name: 'Team & Development', value: 10, color: '#FFCE56' }, // Yellowish
  { name: 'Burn', value: 10, color: '#8A2BE2' }, // Purple
];

const TokenomicsSection: React.FC = () => {
  return (
    <section id="tokenomics" className="bg-grizzle-black text-grizzle-white py-16 md:py-24 border-t border-grizzle-red-dark">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-grizzle-red animate-fade-in-up">
          $GRIZZ Tokenomics: The Roaring Economy
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed opacity-90 animate-fade-in-up animation-delay-200">
          $GRIZZ is designed with a fair and transparent distribution model to ensure long-term sustainability and community growth. Here's how $GRIZZ is allocated:
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <div className="w-full lg:w-1/2 h-80 md:h-96 animate-fade-in-up animation-delay-400">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '8px', padding: '10px' }}
                  itemStyle={{ color: '#fff' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="lg:w-1/2 text-left space-y-8 animate-fade-in-up animation-delay-600">
            <div className="flex items-start bg-grizzle-dark-gray p-6 rounded-xl shadow-lg">
              <DollarSignIcon className="h-8 w-8 text-grizzle-blue mr-4 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-grizzle-red">Total Supply: 1,000,000,000 $GRIZZ</h3>
                <p className="text-grizzle-white opacity-80">
                  A fixed supply ensures scarcity and potential value appreciation. No new tokens will ever be minted.
                </p>
              </div>
            </div>

            <div className="flex items-start bg-grizzle-dark-gray p-6 rounded-xl shadow-lg">
              <UsersIcon className="h-8 w-8 text-grizzle-blue mr-4 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-grizzle-red">Community & Marketing: 30%</h3>
                <p className="text-grizzle-white opacity-80">
                  Dedicated to growing the Grizzle Gang, partnerships, and spreading the word far and wide.
                </p>
              </div>
            </div>

            <div className="flex items-start bg-grizzle-dark-gray p-6 rounded-xl shadow-lg">
              <FlameIcon className="h-8 w-8 text-grizzle-blue mr-4 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-grizzle-red">Burn Mechanism: 10%</h3>
                <p className="text-grizzle-white opacity-80">
                  A portion of tokens will be permanently removed from circulation, increasing scarcity over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
