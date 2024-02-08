export default (weatherInfo) => {
    const [temp_c, temp_f, condition] = weatherInfo;

    alert(`temp: ${temp_c} degC`);
    alert(`temp: ${temp_f} degF`);
    alert(`condition: ${condition}`);
}