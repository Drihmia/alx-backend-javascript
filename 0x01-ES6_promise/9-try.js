export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const toAdd = mathFunction();
    queue.push(toAdd);
  } catch (e) {
    queue.push(`Error: ${e.message}`);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
