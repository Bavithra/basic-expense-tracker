import { subMonths, subWeeks, subYears } from "date-fns";
import { GraphPeriod } from "../enums/GraphPeriod.enum";
import { Expense } from "../types/Expense.type";
import DateUtil from "./DateUtil";

export function getFilteredDate(selectedPeriod: GraphPeriod) {
  switch (selectedPeriod) {
    case GraphPeriod.OneWeek: {
      return subWeeks(new Date(), 1);
    }

    case GraphPeriod.OneMonth: {
      return subMonths(new Date(), 1);
    }

    case GraphPeriod.SixMonth: {
      return subMonths(new Date(), 6);
    }

    case GraphPeriod.OneYear: {
      return subYears(new Date(), 1);
    }
  }
}

export function getFormattedGraphData(
  selectedPeriod: GraphPeriod,
  expenseList: Expense[]
) {
  return expenseList
    .map((expense) => {
      return {
        date:  DateUtil.getDisplayDate(expense.date),
        expense: expense.expense,
        cost: expense.cost,
      };
    })
    .filter(
      (expense) =>
        new Date(expense.date) >= getFilteredDate(selectedPeriod)
    )
    .sort((expense) => {
      return new Date(expense.date).getTime() - new Date().getTime();
    });
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getFormattedGraphData,
};
