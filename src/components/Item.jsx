export default function Item({ children: value = 'Value', label = 'Nome: ' }) {
  return (
    <span className="text-sm">
      <strong>{label}</strong> {value}
    </span>
  );
}
