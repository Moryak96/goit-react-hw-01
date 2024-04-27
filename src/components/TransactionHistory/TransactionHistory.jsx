import css from './TransactionHistory.module.css';

const TransactionHistory = ({ transactions }) => {
    return (
        <table className={css.table}>
            <thead className={css.thead}>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map((transaction, id) => (
                    <tr className={css.tr} key={id}>
                        <td className={css.td}>{transaction.type}</td>
                        <td className={css.td}>{transaction.amount}</td>
                        <td className={css.td}>{transaction.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TransactionHistory;