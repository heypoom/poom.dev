export const timed = async <F extends (...args: any[]) => any>(
  task: string,
  callback: F,
): Promise<ReturnType<F>> => {
  try {
    console.time(task)
    const value = await callback()
    console.timeEnd(task)

    return value
  } catch (err) {
    if (err instanceof Error) {
      console.error(`${err.name} at ${task}:`, err)
    }

    throw err
  }
}
