
import { Problem } from "../types/problem";
import { jumpGame } from "./jump-game";
import { reverseLinkedList } from "./reversed-linked-list";
import { search2DMatrix } from "./search-a-2d-matrix";
import { twoSum } from "./two-sum";
import { validParentheses } from "./valid-parenthesis";
import { bestTimeToBuyAndSellStock } from "./best-time-to-buy-and-sell-stock";

interface ProblemMap{
    [key:string]:Problem
}
export const problems: ProblemMap = {
	"two-sum": twoSum,
	"reverse-linked-list": reverseLinkedList,
	"jump-game": jumpGame,
	"search-a-2d-matrix": search2DMatrix,
	"valid-parentheses": validParentheses,
	"best-time-to-buy-and-sell-stock" : bestTimeToBuyAndSellStock
};