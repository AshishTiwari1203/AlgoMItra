import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeBestTimeToBuyAndSellStockJS = `/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
    // Write your code here
};`;

const handlerBestTimeToBuyAndSellStock = (fn: any) => {
    try {
        const tests = [
            [7, 1, 5, 3, 6, 4],
            [7, 6, 4, 3, 1],
            [2, 4, 1],
            [2, 1, 4],
            [1, 2, 3, 4, 5],
            [5, 4, 3, 2, 1],
            [1, 1, 1, 1, 1],
            [1, 2],
            [2, 1],
            []
        ];
        const answers = [5, 0, 2, 3, 4, 0, 0, 1, 0, 0];

        for (let i = 0; i < tests.length; i++) {
            const result = fn(tests[i]);
            assert.strictEqual(result, answers[i]);
        }
        return true;
    } catch (error: any) {
        console.log("Error from bestTimeToBuyAndSellStockHandler: ", error);
        throw new Error(error);
    }
};

export const bestTimeToBuyAndSellStock: Problem = {
    id: "best-time-to-buy-and-sell-stock",
    title: "9. Best Time to Buy and Sell Stock",
    problemStatement: `<p class='mt-3'>
    You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>i</code>th day.</p>
    <p class='mt-3'>You want to maximize your profit by choosing a <strong>single day</strong> to buy one stock and choosing a <strong>different day in the future</strong> to sell that stock.</p>
    <p class='mt-3'>Return <em>the maximum profit</em> you can achieve from this transaction. If you cannot achieve any profit, return <code>0</code>.</p>`,
    examples: [
        {
            id: 1,
            inputText: "prices = [7,1,5,3,6,4]",
            outputText: "5",
            explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.<br/>Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.",
        },
        {
            id: 2,
            inputText: "prices = [7,6,4,3,1]",
            outputText: "0",
            explanation: "In this case, no transactions are done and the max profit = 0.",
        },
    ],
    constraints: `<li class='mt-2'><code>1 <= prices.length <= 10<sup>5</sup></code></li>
    <li class='mt-2'><code>0 <= prices[i] <= 10<sup>4</sup></code></li>`,
    starterCode: starterCodeBestTimeToBuyAndSellStockJS,
    handlerFunction: handlerBestTimeToBuyAndSellStock,
    starterFunctionName: "function maxProfit(",
    order: 6, 
};