let data: unknown = Promise.resolve("ciao");

async function printData(data: unknown) {
  if (data instanceof Promise) {
    const resolvedData = await data;
    return printData(resolvedData);
  }

  if (typeof data === "string") {
    console.log(data.toUpperCase());
  } else if (typeof data === "number") {
    console.log(data * 2);
  } else if (typeof data === "boolean") {
    if (data) {
      console.log("Sì");
    } else {
      console.log("No");
    }
  } else if (data === null) {
    console.log("Il dato è vuoto");
  } else if (Array.isArray(data)) {
    console.log(data.length);
  } else {
    console.log("Tipo non supportato");
  }
}

printData(data).catch((error) => {
  console.error("Errore:", error);
});
