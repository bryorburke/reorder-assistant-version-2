

const name = "Bryor"
console.log(`Hello ${name}`)

const itemName = "Sailboat"
const unitCost = 4500.00
const currentStock = 20
const reorderLevel = 35
const targetStock = 50
const weeklyDemand = 5
const supplierLeadTimeWeeks = 4
// --- NEW CONCEPT: SAFETY STOCK ---
// Extra stock to cover delays or spikes
const safetyStock = (weeklyDemand * supplierLeadTimeWeeks) * 0.5

// --- NEW CONCEPT: LEAD TIME DEMAND ---
// How many units  will sell just while waiting for the units to arrive.
const leadTimeDemand = weeklyDemand * supplierLeadTimeWeeks

// IMPROVED REORDER LEVEL: 
// Instead of a hardcoded 35, (What will sell while waiting) + (Insurance)
const dynamicReorderLevel = leadTimeDemand + safetyStock

// Check how many weeks until we hit zero
const weeksOfCover = weeklyDemand > 0 ? currentStock/weeklyDemand : Infinity

// How many units are missing compared to the goal?
const stockDefecit = Math.max(0, targetStock - currentStock)

// Do we need to order more? 
const reorderNow = currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks

// If reorder is true, use the defecit; otherwise do not order
const reorderQuantity = reorderNow ? Math.ceil(stockDefecit) : 0

const estimatedReorderCost = reorderQuantity * unitCost


console.log("Inventory Report: " + itemName)
console.log("Weeks of Cover: " + weeksOfCover.toFixed(2))
console.log("Reorder Recommended: " + reorderNow)
console.log("Recommended Quantity: " + reorderQuantity)
console.log("Estimated Reorder Cost: " + estimatedReorderCost.toFixed(2))