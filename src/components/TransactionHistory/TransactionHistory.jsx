export default function TransactionHistory({ items }) {
  return (
    <>
      <table className="table">
        <thead>
          <tr className="main-tr">
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr className="tr" key={item.id}>
              <td className="transaction-status">{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
