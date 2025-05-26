//replace with club buttons and stuff accroding to design
import { BusButtons } from "@/components/Bus/busButton";

const busData = [
  { slug: 'bus-1', name: 'Bus 1' },
  { slug: 'bus-2', name: 'Bus 2' },
  { slug: 'bus-3', name: 'Bus 3' },
  { slug: 'bus-4', name: 'Bus 4' },
  { slug: 'bus-5', name: 'Bus 5' },
  { slug: 'bus-6', name: 'Bus 6' },
];

export default function BusPage() {
  return (
    <div>
      <BusButtons buses={busData} />
    </div>
  );
}