import './style.css';

export const TShirtSetup = () => {
  return (
    <form className="tshirt-setup">
      <label className="tshirt-setup__label">Typ:</label>
      <select
        className="tshirt-setup__input"
        onChange={(e) => (onTypeChange = e.target.value)}
      >
        console.log('Type changed to:', e.target.value);
        <option value="normalShortSleeve">Krátký rukáv</option>
        <option value="tallShortSleeve">Krátký rukáv (prodloužené)</option>
        <option value="normalLongSleeve">Dlouhý rukáv</option>
        <option value="tallLongSleeve">Dlouhý rukáv (prodloužené)</option>
        <option value="normalNoSleeve">Bez rukávů</option>
        <option value="tallNoSleeve">Bez rukávů (prodloužené)</option>
      </select>

      <label className="tshirt-setup__label">Barva: </label>
      <select
        className="tshirt-setup__input"
        onChange={(e) => (onColorChange = e.target.value)}
      >
        <option value="yellow">Žlutá</option>
        <option value="red">Červená</option>
        <option value="blue">Modrá</option>
        <option value="green">Zelená</option>
      </select>

      <label className="tshirt-setup__label">Potisk:</label>
      <input
        className="tshirt-setup__input"
        type="text"
        defaultValue="Ahoj světe!"
        onChange={(e) => (onPrintChange = e.target.value)}
      />
    </form>
  );
};
