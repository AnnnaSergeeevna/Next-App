
import { useState, useEffect, ChangeEvent } from 'react';
import { fetchCurrencyRates, CurrencyRates } from '../utils/fetchCurrencyRates';
import styles from '../styles/currency.module.css'

const CurrencyConverter: React.FC = () => {
    const [rates, setRates] = useState<CurrencyRates>({});
    const [amount, setAmount] = useState<number>(1);
    const [fromCurrency, setFromCurrency] = useState<string>('USD');
    const [toCurrency, setToCurrency] = useState<string>('EUR');
    const [convertedAmount, setConvertedAmount] = useState<number | null>(null);

    useEffect(() => {
        const getRates = async () => {
            try {
                const data = await fetchCurrencyRates();
                setRates(data.data);
            } catch (error) {
                console.error('Error fetching currency rates:', error);
            }
        };
        getRates();
    }, []);

    const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAmount(parseFloat(e.target.value));
    };

    const handleFromCurrencyChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setFromCurrency(e.target.value);
    };

    const handleToCurrencyChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setToCurrency(e.target.value);
    };

    const convert = () => {
        if (rates[fromCurrency] && rates[toCurrency]) {
            const rate = rates[toCurrency] / rates[fromCurrency];
            setConvertedAmount(amount * rate);
        }
    };

    return (
        <div>
            <h1>Currency Converter</h1>
            <div className={styles.inputsBlock}>
                <input
                    type="number"
                    value={amount}
                    onChange={handleAmountChange}
                />
                <select value={fromCurrency} onChange={handleFromCurrencyChange}>
                    {Object.keys(rates).map((currency) => (
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                </select>
                <select value={toCurrency} onChange={handleToCurrencyChange}>
                    {Object.keys(rates).map((currency) => (
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                </select>
                <button className={styles.buttn} onClick={convert}>Convert</button>
            </div>
            {convertedAmount === null ? (
                <p className={styles.result}>Please enter an amount</p>
            ) : (
                <p className={styles.result}>{amount} {fromCurrency} = {convertedAmount.toFixed(2)} {toCurrency}</p>
            )}
        </div>
    );
};

export default CurrencyConverter;
