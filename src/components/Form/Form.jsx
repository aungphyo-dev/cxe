import currencies from "../../currency/currencies.js";
import {
    Box, FormControl, IconButton, InputLabel, MenuItem, OutlinedInput, Select, Skeleton, TextField
} from "@mui/material";
import {useEffect, useState} from "react";
import {useGetExchangeMutation} from "../../services/authApi.js";
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import Result from "../Result/Result.jsx";

const Form = () => {
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP, width: 250,
            },
        },
    };
    const [currency1, setCurrency1] = useState("USD")
    const [currency2, setCurrency2] = useState("MMK")
    const [amount, setAmount] = useState("5")
    const [exchange, {data: exchangeResult, isLoading}] = useGetExchangeMutation()
    console.log(currency1,currency2)
    useEffect(() => {
        setTimeout(()=>{
            exchange({currency1, currency2, amount})
        },3000)
        return clearTimeout(()=>{})
    }, [currency1, currency2, amount]);
    const handleClick = () => {
        setCurrency1(currency2)
        setCurrency2(currency1)
    }
    return (<section className='container mx-auto shadow-xl p-5 bg-white rounded-xl'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 p-3'>
                <div>
                    {/*From Select*/}
                    <div className='mb-3'>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-name-label">From</InputLabel>
                            <Select
                                labelId="demo-simple-name-label"
                                id="demo-simple-name"
                                value={currency1}
                                onChange={e => setCurrency1(e.target.value)}
                                input={<OutlinedInput label="Name"/>}
                                MenuProps={MenuProps}
                            >
                                {currencies.map((currency) => (<MenuItem
                                        key={currency.Code}
                                        value={currency.Code}
                                    >
                                        {currency.CountryName} - {currency.Code}
                                    </MenuItem>))}
                            </Select>
                        </FormControl>
                    </div>
                    {/*From Select*/}

                    {/*Icon*/}
                    <div className='flex justify-center items-center'>
                        <IconButton onClick={handleClick} color="primary" sx={{p: '10px'}}>
                            <SyncAltIcon/>
                        </IconButton>
                    </div>
                    {/*Icon*/}

                    {/*To Select*/}
                    <div className='mt-3'>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-name">To</InputLabel>
                            <Select
                                labelId="demo-simple-name"
                                id="demo-simple-name"
                                value={currency2}
                                onChange={e => setCurrency2(e.target.value)}
                                input={<OutlinedInput label="Name"/>}
                                MenuProps={MenuProps}
                            >
                                {currencies.map((currency) => (<MenuItem
                                        key={currency.Code}
                                        value={currency.Code}
                                    >
                                        {currency.CountryName} - {currency.Code}
                                    </MenuItem>))}
                            </Select>
                        </FormControl>
                    </div>
                    {/*To Select*/}

                </div>
                <div>
                    {/*Amount*/}
                    <TextField label="Amount" required fullWidth placeholder="Enter your amount...." value={amount}
                               onChange={e => setAmount(e.target.value)} id="outlined-basic" variant="outlined"/>
                    {/*Amount*/}

                    {/*Result*/}
                    <div className="mt-3">
                        {isLoading ? <Box>
                            <Skeleton/>
                            <Skeleton animation="wave"/>
                            <Skeleton animation={false}/>
                        </Box> : <Result data={exchangeResult} amount={amount}/>}
                    </div>
                    {/*Result*/}
                </div>
            </div>
        </section>)
}
export default Form