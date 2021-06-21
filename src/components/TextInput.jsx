export default function TextInput({
  labelDescription = 'Descrição do campo: ',
  inputValue = 'Descrição do campo:',
  onInputChange = null,
  id = 'id_input_text',
  autoFocus = false,
}) {
  function handleInputChange({ currentTarget }) {
    if (onInputChange) {
      const newValue = currentTarget.value;
      onInputChange(newValue);
    }
  }
  return (
    <div className="flex flex-col my-4">
      <label className="mb-1" htmlFor={id}>
        {labelDescription}
      </label>
      <input
        autoFocus={autoFocus}
        className="p-1 border "
        id={id}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
}
