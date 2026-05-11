const normalizeUnits = (manifest) => {
  const newManifest = {...manifest};
  if (newManifest.unit === "lb") {
  newManifest.weight = newManifest.weight * 0.45
  newManifest.unit = "kg"
  return newManifest;  
  } else {
    return newManifest;
  }
}

const validateManifest = (manifest) => {
  const errors = {};
  const newValidation = {...manifest};
  if (newValidation.containerId === undefined) {
    errors.containerId ="Missing";
  } else if (typeof newValidation.containerId !== "number" || !Number.isInteger(newValidation.containerId) ||newValidation.containerId <= 0) {
    errors.containerId ="Invalid";
  }
  if (newValidation.destination === undefined) {
    errors.destination = "Missing";
  } else if (typeof newValidation.destination !== "string" || newValidation.destination.trim().length === 0) {
    errors.destination = "Invalid";
  }
  if (newValidation.weight === undefined) {
    errors.weight = "Missing";
  } else if (typeof newValidation.weight !== "number" || Number.isNaN(newValidation.weight) || newValidation.weight <= 0) {
    errors.weight = "Invalid";
  }
  if (newValidation.unit === undefined) {
    errors.unit = "Missing";
  } else if (newValidation.unit !== "kg" && newValidation.unit !== "lb") {
    errors.unit = "Invalid";
  }
  if (newValidation.hazmat === undefined) {
    errors.hazmat = "Missing";
  } else if (typeof newValidation.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }
  return errors
}

const processManifest = (manifest) => {
  const errors = validateManifest(manifest);
  if (Object.keys(errors).length === 0) {
    const normalized = normalizeUnits(manifest);
    console.log(`Validation success: ${normalized.containerId}`);
    console.log(`Total weight: ${normalized.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(errors);
  }
}