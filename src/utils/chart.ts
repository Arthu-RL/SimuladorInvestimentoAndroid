import { eachDayOfInterval, endOfWeek, startOfWeek } from "date-fns";
import { User } from "@/lib/schemas/user.schema";
import { Assets } from "@/lib/schemas/assets.schema";

/**
 * Gera os dados de rentabilidade para os dias da semana atual.
 * 
 * @param profitabilityHistory Histórico de rentabilidade do usuário.
 * @returns Array com dados da rentabilidade por dia da semana.
 */
function generateCurrentWeekData(profitabilityHistory: User["profitabilityHistory"]) {
  const daysOfWeek = eachDayOfInterval({
    start: startOfWeek(new Date()),
    end: endOfWeek(new Date()),
  });

  return daysOfWeek.map((weekday:any) => {
    const weekdayHistory = profitabilityHistory.find(
      ({ date }) => new Date(weekday).toISOString() === new Date(date).toISOString()
    );

    if (!weekdayHistory) {
      return { date: weekday.toISOString(), profitability: 0 };
    }

    return {
      date: weekdayHistory.date.toString(),
      profitability: weekdayHistory.profitability,
    };
  });
}

/**
 * Gera os dados do gráfico de histórico de ativos.
 * 
 * @param assetHistory Histórico de valores do ativo.
 * @returns Array com dados do histórico de ativos formatados.
 */
function generateAssetHistoryChartData(assetHistory: Assets["history"]) {
  return assetHistory.map(({ value, timestamp }) => ({
    value,
    timestamp: new Date(timestamp).toISOString(),
  }));
}

export { generateCurrentWeekData, generateAssetHistoryChartData };
