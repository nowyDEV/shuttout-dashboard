// @flow

const createChartData = (inputData: {
  [string]: any
}, params: {
  label: string,
  backgroundColor: string | Array<string>,
  borderColor?: string,
  borderWidth?: number,
  month?: boolean,
  day?: boolean,
  addTotal?: boolean
}) => {
  const outputData = {
    labels: [],
    datasets: [
      {
        label: params.label,
        data: [],
        backgroundColor: params.backgroundColor,
        borderWidth: params.borderWidth || 1,
        borderColor: params.borderColor
      }
    ]
  };

  if (params.months === true) {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    inputData.rows.forEach(row => {
      outputData.datasets[0].data.push(+row[1]);
      outputData.labels.push(months[parseInt(row[0], 10) - 1]);
    });

  } else if (params.day === true) {
    inputData.rows.forEach(row => {
      outputData.datasets[0].data.push(+row[1]);
      outputData.labels.push(`day ${row[0]}`);
    });

  } else {
    inputData.rows.forEach(row => {
      outputData.datasets[0].data.push(+row[1]);
      outputData.labels.push(row[0]);
    });
  }

  if (params.addTotal === true) {
    (outputData: Object).totalAmount = parseInt(inputData.totalForAllResults, 10);
  }

  return outputData;
};

export default createChartData;
