interface Props {
  children: React.ReactNode;
}

export default function CircleIcon({ children }: Props) {
  return (
    <div className="w-10 h-10 rounded-full border-2 border-purple-600 flex items-center justify-center text-purple-700 font-bold">
      {children}
    </div>
  );
}
