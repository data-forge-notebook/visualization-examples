const notebook = {
    "sheet": {
        "cells": [
            {
                "cellType": "markdown",
                "code": "# Examples of visualization\r\n\r\nThere's many ways to visualize your data in Data-Forge Notebook, lets look at a few here.",
                "errors": [],
                "id": "d0647090-2e9c-11e9-9f0a-97b474081a71",
                "lastEvaluationDate": "2019-02-12T18:06:37.479+10:00",
                "output": []
            },
            {
                "cellType": "markdown",
                "code": "## Plain ole' console logging\r\n\r\nUse `console.log` to output whatever you want:",
                "errors": [],
                "id": "ea3ea260-2e9c-11e9-9f0a-97b474081a71",
                "lastEvaluationDate": "2019-02-12T18:06:37.479+10:00",
                "output": []
            },
            {
                "cellScope": "local",
                "cellType": "code",
                "code": "const data = \"Whatever you want to log!\";\r\nconsole.log(data);",
                "errors": [],
                "id": "f0627130-2e9c-11e9-9f0a-97b474081a71",
                "lastEvaluationDate": "2020-03-16T17:55:24.047+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": "Whatever you want to log!\n",
                                "displayType": "string"
                            }
                        ]
                    }
                ]
            },
            {
                "cellType": "markdown",
                "code": "## JavaScript array\r\n\r\nWe can use the `display` function for formatted data visualization. \r\n\r\nWe can use it to visualize JavaScript arrays:",
                "errors": [],
                "id": "dd75ede0-2e9c-11e9-9f0a-97b474081a71",
                "lastEvaluationDate": "2019-02-12T18:06:37.479+10:00",
                "output": []
            },
            {
                "cellScope": "local",
                "cellType": "code",
                "code": "const data = [1, 2, 3, 4];\r\ndisplay(data);",
                "errors": [],
                "id": "1b752e00-a804-11e8-b3eb-53e94e633165",
                "lastEvaluationDate": "2020-03-16T17:55:24.058+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": [
                                    1,
                                    2,
                                    3,
                                    4
                                ],
                                "displayType": "array"
                            }
                        ]
                    }
                ]
            },
            {
                "cellType": "markdown",
                "code": "## JavaScript object\r\n\r\nWe can also use the `display` function to visualize JavaScript objects:",
                "errors": [],
                "id": "e33a5ea0-2e9c-11e9-9f0a-97b474081a71",
                "lastEvaluationDate": "2019-02-12T18:06:37.479+10:00",
                "output": []
            },
            {
                "cellScope": "local",
                "cellType": "code",
                "code": "const data = { A: 1, B: \"hello\" };\r\ndisplay(data);",
                "errors": [],
                "id": "27b6d830-a804-11e8-b3eb-53e94e633165",
                "lastEvaluationDate": "2020-03-16T17:55:24.067+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": {
                                    "A": 1,
                                    "B": "hello"
                                },
                                "displayType": "object"
                            }
                        ]
                    }
                ]
            },
            {
                "cellType": "markdown",
                "code": "## JavaScript object as table\r\n\r\nWe can use `display.table` to visualize a JavaScript object as tabular data:",
                "errors": [],
                "id": "02b6d330-2e9d-11e9-9f0a-97b474081a71",
                "lastEvaluationDate": "2019-02-12T18:06:37.479+10:00",
                "output": []
            },
            {
                "cellScope": "local",
                "cellType": "code",
                "code": "const data = { A: 1, B: \"hello\" };\r\ndisplay.table(data);",
                "errors": [],
                "id": "c6a99850-2e9c-11e9-9f0a-97b474081a71",
                "lastEvaluationDate": "2020-03-16T17:55:24.075+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": {
                                    "columnNames": [
                                        "Property",
                                        "Value"
                                    ],
                                    "rows": [
                                        {
                                            "Property": "A",
                                            "Value": 1
                                        },
                                        {
                                            "Property": "B",
                                            "Value": "hello"
                                        }
                                    ]
                                },
                                "displayType": "table"
                            }
                        ]
                    }
                ]
            },
            {
                "cellType": "markdown",
                "code": "## JavaScript array as table\r\n\r\nWe can also use `display.table` to visualize a JavaScript array as tabular data.",
                "errors": [],
                "id": "466a7d20-f3cd-11e9-97b7-a975ba8f6456",
                "lastEvaluationDate": "2019-10-21T16:48:16.310+10:00",
                "output": []
            },
            {
                "cellScope": "local",
                "cellType": "code",
                "code": "const data = [{ A: 1, B: \"Hello\" }, { A: 2, B: \"Computer!\" }];\r\ndisplay.table(data);",
                "errors": [],
                "id": "6570d750-f3cd-11e9-97b7-a975ba8f6456",
                "lastEvaluationDate": "2020-03-16T17:55:24.081+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": {
                                    "columnOrder": [
                                        "A",
                                        "B"
                                    ],
                                    "columns": {
                                        "A": "number",
                                        "B": "string"
                                    },
                                    "index": {
                                        "type": "number",
                                        "values": [
                                            0,
                                            1
                                        ]
                                    },
                                    "values": [
                                        {
                                            "A": 1,
                                            "B": "Hello",
                                            "__index__": 0
                                        },
                                        {
                                            "A": 2,
                                            "B": "Computer!",
                                            "__index__": 1
                                        }
                                    ]
                                },
                                "displayType": "dataframe"
                            }
                        ]
                    }
                ]
            },
            {
                "cellType": "markdown",
                "code": "## JSON data\r\n\r\nUse `display.json` to render textual JSON data without having to parse it.",
                "errors": [],
                "id": "6743dc40-fb65-11e9-b87a-47633ef72d4e",
                "lastEvaluationDate": "2019-10-31T08:36:01.792+10:00",
                "output": []
            },
            {
                "cellScope": "global",
                "cellType": "code",
                "code": "const data = '[ { \"A\": 1, \"B\": \"Hello\" }, { \"A\": 2, \"B\": \"Computer!\" } ]';\r\ndisplay.json(data);",
                "errors": [],
                "id": "74ae4f00-fb65-11e9-b87a-47633ef72d4e",
                "lastEvaluationDate": "2020-03-16T17:55:24.090+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": "[ { \"A\": 1, \"B\": \"Hello\" }, { \"A\": 2, \"B\": \"Computer!\" } ]",
                                "displayType": "json"
                            }
                        ]
                    }
                ]
            },
            {
                "cellType": "markdown",
                "code": "## HTML!\r\n\r\nThen there's `display.html` that we can use to render formatted HTML:",
                "errors": [],
                "id": "092f78c0-2e9d-11e9-9f0a-97b474081a71",
                "lastEvaluationDate": "2019-02-12T18:06:37.480+10:00",
                "output": []
            },
            {
                "cellScope": "local",
                "cellType": "code",
                "code": "const data = \"<h1>This is HTML</h1>\";\r\ndisplay.html(data);",
                "errors": [],
                "id": "2c625ee0-a804-11e8-b3eb-53e94e633165",
                "lastEvaluationDate": "2020-03-16T17:55:24.109+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": "<h1>This is HTML</h1>",
                                "displayType": "html"
                            }
                        ]
                    }
                ]
            },
            {
                "cellType": "markdown",
                "code": "## Markdown!\r\n\r\nUse `display.markdown` to render formatted markdown to cell output.",
                "errors": [],
                "id": "29b4e360-fb65-11e9-b87a-47633ef72d4e",
                "lastEvaluationDate": "2019-10-31T08:36:01.792+10:00",
                "output": []
            },
            {
                "cellScope": "global",
                "cellType": "code",
                "code": "const data = \"## Markdown baby ;)\\nSome great markdown right here.\";\r\ndisplay.markdown(data);",
                "errors": [],
                "id": "3f1b1940-fb65-11e9-b87a-47633ef72d4e",
                "lastEvaluationDate": "2020-03-16T17:55:24.122+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": "## Markdown baby ;)\nSome great markdown right here.",
                                "displayType": "markdown"
                            }
                        ]
                    }
                ]
            },
            {
                "cellType": "markdown",
                "code": "## Preformatted text\r\n\r\nUse `display.text` to print pre-formatted text to cell output.",
                "errors": [],
                "id": "abc0e040-f4ab-11e9-bc75-6b676fbda00a",
                "lastEvaluationDate": "2019-10-22T19:10:51.480+10:00",
                "output": []
            },
            {
                "cellScope": "local",
                "cellType": "code",
                "code": "const someText = \"Hello!\\nThis is some preformatted text with newlines baked in :)\";\r\ndisplay.text(someText);",
                "errors": [],
                "id": "c01509e0-f4ab-11e9-bc75-6b676fbda00a",
                "lastEvaluationDate": "2020-03-16T17:55:24.157+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": "Hello!\nThis is some preformatted text with newlines baked in :)",
                                "displayType": "text"
                            }
                        ]
                    }
                ]
            },
            {
                "cellType": "markdown",
                "code": "## Preview data from CSV file\r\n\r\nUse the [datakit](https://www.npmjs.com/package/datakit) library to read CSV and preview with the `display.table` function.",
                "errors": [],
                "id": "0ee8ed00-2e9d-11e9-9f0a-97b474081a71",
                "lastEvaluationDate": "2019-02-12T18:06:37.480+10:00",
                "output": []
            },
            {
                "cellScope": "local",
                "cellType": "code",
                "code": "const datakit = require('datakit');\r\nconst data = await datakit.readCsv(\"./example.csv\");\r\ndisplay.table(data.slice(0, 5));",
                "errors": [],
                "id": "31ae9260-a804-11e8-b3eb-53e94e633165",
                "lastEvaluationDate": "2020-03-16T17:55:24.162+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": {
                                    "columnOrder": [
                                        "Name",
                                        "Sex",
                                        "Age",
                                        "Height (in)",
                                        "Weight (lbs)"
                                    ],
                                    "columns": {
                                        "Age": "number",
                                        "Height (in)": "number",
                                        "Name": "string",
                                        "Sex": "string",
                                        "Weight (lbs)": "number"
                                    },
                                    "index": {
                                        "type": "number",
                                        "values": [
                                            0,
                                            1,
                                            2,
                                            3,
                                            4
                                        ]
                                    },
                                    "values": [
                                        {
                                            "Age": 41,
                                            "Height (in)": 74,
                                            "Name": "Alex",
                                            "Sex": "M",
                                            "Weight (lbs)": 170,
                                            "__index__": 0
                                        },
                                        {
                                            "Age": 42,
                                            "Height (in)": 68,
                                            "Name": "Bert",
                                            "Sex": "M",
                                            "Weight (lbs)": 166,
                                            "__index__": 1
                                        },
                                        {
                                            "Age": 32,
                                            "Height (in)": 70,
                                            "Name": "Carl",
                                            "Sex": "M",
                                            "Weight (lbs)": 155,
                                            "__index__": 2
                                        },
                                        {
                                            "Age": 39,
                                            "Height (in)": 72,
                                            "Name": "Dave",
                                            "Sex": "M",
                                            "Weight (lbs)": 167,
                                            "__index__": 3
                                        },
                                        {
                                            "Age": 30,
                                            "Height (in)": 66,
                                            "Name": "Elly",
                                            "Sex": "F",
                                            "Weight (lbs)": 124,
                                            "__index__": 4
                                        }
                                    ]
                                },
                                "displayType": "dataframe"
                            }
                        ]
                    }
                ]
            },
            {
                "cellType": "markdown",
                "code": "## Preview data from JSON file\r\n\r\nUse the [datakit](https://www.npmjs.com/package/datakit) library to read JSON and preview with the `display.table` function.",
                "errors": [],
                "id": "c5c26fb0-1335-11ea-ba9f-279dfd8c67c3",
                "lastEvaluationDate": "2019-11-30T15:55:19.803+10:00",
                "output": []
            },
            {
                "cellScope": "global",
                "cellType": "code",
                "code": "const datakit = require('datakit');\r\nconst data = await datakit.readJson(\"./example.json\");\r\ndisplay.table(data.slice(0, 3));",
                "errors": [],
                "id": "d0e47910-1335-11ea-ba9f-279dfd8c67c3",
                "lastEvaluationDate": "2020-03-16T17:55:24.168+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": {
                                    "columnOrder": [
                                        "Name",
                                        "Sex",
                                        "Age",
                                        "Height (in)",
                                        "Weight (lbs)"
                                    ],
                                    "columns": {
                                        "Age": "number",
                                        "Height (in)": "number",
                                        "Name": "string",
                                        "Sex": "string",
                                        "Weight (lbs)": "number"
                                    },
                                    "index": {
                                        "type": "number",
                                        "values": [
                                            0,
                                            1,
                                            2
                                        ]
                                    },
                                    "values": [
                                        {
                                            "Age": 41,
                                            "Height (in)": 74,
                                            "Name": "Alex",
                                            "Sex": "M",
                                            "Weight (lbs)": 170,
                                            "__index__": 0
                                        },
                                        {
                                            "Age": 42,
                                            "Height (in)": 68,
                                            "Name": "Bert",
                                            "Sex": "M",
                                            "Weight (lbs)": 166,
                                            "__index__": 1
                                        },
                                        {
                                            "Age": 32,
                                            "Height (in)": 70,
                                            "Name": "Carl",
                                            "Sex": "M",
                                            "Weight (lbs)": 155,
                                            "__index__": 2
                                        }
                                    ]
                                },
                                "displayType": "dataframe"
                            }
                        ]
                    }
                ]
            },
            {
                "cellType": "markdown",
                "code": "## Charts: Plot any ole JavaScript data!\r\n\r\nEasily create charts from JavaScript data using the function `display.plot`.\r\n\r\n### Plot arrays of numbers",
                "errors": [],
                "id": "fc067e40-f3cd-11e9-97b7-a975ba8f6456",
                "lastEvaluationDate": "2019-10-21T16:48:16.310+10:00",
                "output": []
            },
            {
                "cellScope": "local",
                "cellType": "code",
                "code": "const data = [50, 20, 10, 40, 15, 25];\r\ndisplay.plot(data);",
                "errors": [],
                "id": "f879ae00-f3cd-11e9-97b7-a975ba8f6456",
                "lastEvaluationDate": "2020-03-16T17:55:24.174+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": {
                                    "axisMap": {
                                        "y": [
                                            {
                                                "series": "y"
                                            }
                                        ],
                                        "y2": []
                                    },
                                    "data": {
                                        "series": {
                                            "y": {
                                                "type": "number",
                                                "values": [
                                                    50,
                                                    20,
                                                    10,
                                                    40,
                                                    15,
                                                    25
                                                ]
                                            }
                                        }
                                    },
                                    "plotConfig": {
                                        "chartType": "line",
                                        "height": "100%",
                                        "legend": {
                                            "show": false
                                        },
                                        "width": "100%",
                                        "y": {
                                            "max": 50,
                                            "min": 10
                                        },
                                        "y2": {}
                                    }
                                },
                                "displayType": "plot"
                            }
                        ]
                    }
                ]
            },
            {
                "cellType": "markdown",
                "code": "### Plot arrays of JavaScript objects",
                "errors": [],
                "id": "21231020-1332-11ea-b4ba-813ffa5b9c8b",
                "lastEvaluationDate": "2019-11-30T15:33:11.656+10:00",
                "output": []
            },
            {
                "cellScope": "local",
                "cellType": "code",
                "code": "const data = [{ D1: 50, D2: 30 }, { D1: 20, D2: 200 }, { D1: 10, D2: 100 }, { D1: 40, D2: 400 }];\r\ndisplay.plot(data);",
                "errors": [],
                "id": "24ef35e0-f3ce-11e9-97b7-a975ba8f6456",
                "lastEvaluationDate": "2020-03-16T17:55:24.181+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": {
                                    "axisMap": {
                                        "y": [
                                            {
                                                "series": "D1"
                                            },
                                            {
                                                "series": "D2"
                                            }
                                        ],
                                        "y2": []
                                    },
                                    "data": {
                                        "series": {
                                            "D1": {
                                                "type": "number",
                                                "values": [
                                                    50,
                                                    20,
                                                    10,
                                                    40
                                                ]
                                            },
                                            "D2": {
                                                "type": "number",
                                                "values": [
                                                    30,
                                                    200,
                                                    100,
                                                    400
                                                ]
                                            }
                                        }
                                    },
                                    "plotConfig": {
                                        "chartType": "line",
                                        "height": "100%",
                                        "legend": {
                                            "show": true
                                        },
                                        "width": "100%",
                                        "y": {
                                            "max": 400,
                                            "min": 10
                                        },
                                        "y2": {}
                                    }
                                },
                                "displayType": "plot"
                            }
                        ]
                    }
                ]
            },
            {
                "cellType": "markdown",
                "code": "## Plot by column!",
                "errors": [],
                "id": "67178a70-1332-11ea-b4ba-813ffa5b9c8b",
                "lastEvaluationDate": "2019-11-30T15:33:11.656+10:00",
                "output": []
            },
            {
                "cellScope": "global",
                "cellType": "code",
                "code": "const data = {\r\n    D1: [30, 10, 50, 15],\r\n    D2: [300, 20, 10, 150],\r\n};\r\ndisplay.plot(data);",
                "errors": [],
                "id": "48cae350-1332-11ea-b4ba-813ffa5b9c8b",
                "lastEvaluationDate": "2020-03-16T17:55:24.188+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": {
                                    "axisMap": {
                                        "y": [
                                            {
                                                "series": "D1"
                                            },
                                            {
                                                "series": "D2"
                                            }
                                        ],
                                        "y2": []
                                    },
                                    "data": {
                                        "series": {
                                            "D1": {
                                                "type": "number",
                                                "values": [
                                                    30,
                                                    10,
                                                    50,
                                                    15
                                                ]
                                            },
                                            "D2": {
                                                "type": "number",
                                                "values": [
                                                    300,
                                                    20,
                                                    10,
                                                    150
                                                ]
                                            }
                                        }
                                    },
                                    "plotConfig": {
                                        "chartType": "line",
                                        "height": "100%",
                                        "legend": {
                                            "show": true
                                        },
                                        "width": "100%",
                                        "y": {
                                            "max": 300,
                                            "min": 10
                                        },
                                        "y2": {}
                                    }
                                },
                                "displayType": "plot"
                            }
                        ]
                    }
                ]
            },
            {
                "cellType": "markdown",
                "code": "## Load and plot CSV and JSON data!\r\n\r\nEasily load and plot CSV and JSON data with help of [datakit](https://www.npmjs.com/package/daki) on npm.",
                "errors": [],
                "id": "13bac060-2e9d-11e9-9f0a-97b474081a71",
                "lastEvaluationDate": "2019-02-12T18:06:37.480+10:00",
                "output": []
            },
            {
                "cellScope": "local",
                "cellType": "code",
                "code": "const datakit = require('datakit');\r\nconst data = await datakit.readCsv(\"./example.csv\");\r\ndisplay.plot(data);",
                "errors": [],
                "id": "3736bd70-a804-11e8-b3eb-53e94e633165",
                "lastEvaluationDate": "2020-03-16T17:55:24.196+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": {
                                    "axisMap": {
                                        "y": [
                                            {
                                                "series": "Name"
                                            },
                                            {
                                                "series": "Sex"
                                            },
                                            {
                                                "series": "Age"
                                            },
                                            {
                                                "series": "Height (in)"
                                            },
                                            {
                                                "series": "Weight (lbs)"
                                            }
                                        ],
                                        "y2": []
                                    },
                                    "data": {
                                        "series": {
                                            "Age": {
                                                "type": "number",
                                                "values": [
                                                    41,
                                                    42,
                                                    32,
                                                    39,
                                                    30,
                                                    33,
                                                    26,
                                                    30,
                                                    53,
                                                    32,
                                                    47,
                                                    34,
                                                    23,
                                                    36,
                                                    38,
                                                    31,
                                                    29,
                                                    28
                                                ]
                                            },
                                            "Height (in)": {
                                                "type": "number",
                                                "values": [
                                                    74,
                                                    68,
                                                    70,
                                                    72,
                                                    66,
                                                    66,
                                                    64,
                                                    71,
                                                    72,
                                                    69,
                                                    69,
                                                    72,
                                                    62,
                                                    75,
                                                    70,
                                                    67,
                                                    71,
                                                    65
                                                ]
                                            },
                                            "Name": {
                                                "type": "string",
                                                "values": [
                                                    "Alex",
                                                    "Bert",
                                                    "Carl",
                                                    "Dave",
                                                    "Elly",
                                                    "Fran",
                                                    "Gwen",
                                                    "Hank",
                                                    "Ivan",
                                                    "Jake",
                                                    "Kate",
                                                    "Luke",
                                                    "Myra",
                                                    "Neil",
                                                    "Omar",
                                                    "Page",
                                                    "Quin",
                                                    "Ruth"
                                                ]
                                            },
                                            "Sex": {
                                                "type": "string",
                                                "values": [
                                                    "M",
                                                    "M",
                                                    "M",
                                                    "M",
                                                    "F",
                                                    "F",
                                                    "F",
                                                    "M",
                                                    "M",
                                                    "M",
                                                    "F",
                                                    "M",
                                                    "F",
                                                    "M",
                                                    "M",
                                                    "F",
                                                    "M",
                                                    "F"
                                                ]
                                            },
                                            "Weight (lbs)": {
                                                "type": "number",
                                                "values": [
                                                    170,
                                                    166,
                                                    155,
                                                    167,
                                                    124,
                                                    115,
                                                    121,
                                                    158,
                                                    175,
                                                    143,
                                                    139,
                                                    163,
                                                    98,
                                                    160,
                                                    145,
                                                    135,
                                                    176,
                                                    131
                                                ]
                                            }
                                        }
                                    },
                                    "plotConfig": {
                                        "chartType": "line",
                                        "height": "100%",
                                        "legend": {
                                            "show": true
                                        },
                                        "width": "100%",
                                        "y": {
                                            "max": 176,
                                            "min": 23
                                        },
                                        "y2": {}
                                    }
                                },
                                "displayType": "plot"
                            }
                        ]
                    }
                ]
            },
            {
                "cellScope": "global",
                "cellType": "code",
                "code": "const datakit = require('datakit');\r\nconst data = await datakit.readJson(\"./example.json\");\r\ndisplay.plot(data);",
                "errors": [],
                "id": "913a48b0-1332-11ea-b4ba-813ffa5b9c8b",
                "lastEvaluationDate": "2020-03-16T17:55:24.205+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": {
                                    "axisMap": {
                                        "y": [
                                            {
                                                "series": "Name"
                                            },
                                            {
                                                "series": "Sex"
                                            },
                                            {
                                                "series": "Age"
                                            },
                                            {
                                                "series": "Height (in)"
                                            },
                                            {
                                                "series": "Weight (lbs)"
                                            }
                                        ],
                                        "y2": []
                                    },
                                    "data": {
                                        "series": {
                                            "Age": {
                                                "type": "number",
                                                "values": [
                                                    41,
                                                    42,
                                                    32,
                                                    39,
                                                    30,
                                                    33,
                                                    26,
                                                    30,
                                                    53,
                                                    32,
                                                    47,
                                                    34,
                                                    23,
                                                    36,
                                                    38,
                                                    31,
                                                    29,
                                                    28
                                                ]
                                            },
                                            "Height (in)": {
                                                "type": "number",
                                                "values": [
                                                    74,
                                                    68,
                                                    70,
                                                    72,
                                                    66,
                                                    66,
                                                    64,
                                                    71,
                                                    72,
                                                    69,
                                                    69,
                                                    72,
                                                    62,
                                                    75,
                                                    70,
                                                    67,
                                                    71,
                                                    65
                                                ]
                                            },
                                            "Name": {
                                                "type": "string",
                                                "values": [
                                                    "Alex",
                                                    "Bert",
                                                    "Carl",
                                                    "Dave",
                                                    "Elly",
                                                    "Fran",
                                                    "Gwen",
                                                    "Hank",
                                                    "Ivan",
                                                    "Jake",
                                                    "Kate",
                                                    "Luke",
                                                    "Myra",
                                                    "Neil",
                                                    "Omar",
                                                    "Page",
                                                    "Quin",
                                                    "Ruth"
                                                ]
                                            },
                                            "Sex": {
                                                "type": "string",
                                                "values": [
                                                    "M",
                                                    "M",
                                                    "M",
                                                    "M",
                                                    "F",
                                                    "F",
                                                    "F",
                                                    "M",
                                                    "M",
                                                    "M",
                                                    "F",
                                                    "M",
                                                    "F",
                                                    "M",
                                                    "M",
                                                    "F",
                                                    "M",
                                                    "F"
                                                ]
                                            },
                                            "Weight (lbs)": {
                                                "type": "number",
                                                "values": [
                                                    170,
                                                    166,
                                                    155,
                                                    167,
                                                    124,
                                                    115,
                                                    121,
                                                    158,
                                                    175,
                                                    143,
                                                    139,
                                                    163,
                                                    98,
                                                    160,
                                                    145,
                                                    135,
                                                    176,
                                                    131
                                                ]
                                            }
                                        }
                                    },
                                    "plotConfig": {
                                        "chartType": "line",
                                        "height": "100%",
                                        "legend": {
                                            "show": true
                                        },
                                        "width": "100%",
                                        "y": {
                                            "max": 176,
                                            "min": 23
                                        },
                                        "y2": {}
                                    }
                                },
                                "displayType": "plot"
                            }
                        ]
                    }
                ]
            },
            {
                "cellType": "markdown",
                "code": "## Visualize geographic data\r\n\r\nUse the `display.geo` function to plot geographic coordinates and GeoJSON!",
                "errors": [],
                "id": "f61e2630-675a-11ea-94da-357be68abebe",
                "lastEvaluationDate": "2020-03-16T17:53:11.948+10:00",
                "output": []
            },
            {
                "cellScope": "global",
                "cellType": "code",
                "code": "display.geo({\r\n    location: [51.505, -0.10],\r\n    zoom: 13,\r\n    markers: [\r\n        [51.505, -0.10],\r\n        [51.5, -0.09],\r\n        [51.51, -0.08]\r\n    ],\r\n});",
                "errors": [],
                "id": "f1491e80-675a-11ea-94da-357be68abebe",
                "lastEvaluationDate": "2020-03-16T17:55:24.210+10:00",
                "output": [
                    {
                        "values": [
                            {
                                "data": {
                                    "location": [
                                        51.505,
                                        -0.1
                                    ],
                                    "markers": [
                                        [
                                            51.505,
                                            -0.1
                                        ],
                                        [
                                            51.5,
                                            -0.09
                                        ],
                                        [
                                            51.51,
                                            -0.08
                                        ]
                                    ],
                                    "zoom": 13
                                },
                                "displayType": "geo"
                            }
                        ]
                    }
                ]
            },
            {
                "cellType": "markdown",
                "code": "## More charts!\r\n\r\nWant to see more charts?\r\n\r\n[Click here to see the charts example](http://open-example=charts.notebook).",
                "errors": [],
                "id": "53a712d0-8845-11e9-94c3-054beaa0f30f",
                "lastEvaluationDate": "2019-06-06T20:25:48.286+10:00",
                "output": []
            },
            {
                "cellType": "markdown",
                "code": "## More coming soon!\r\n\r\nMore visualization are coming in future editions of Data-Forge Notebook, for example:\r\n- Geographic data\r\n- Images\r\n- Node.js buffers\r\n- Vectors, matrices and maths formulas\r\n- Colors\r\n\r\n[Email](mailto:support@data-forge-notebook.com) and let me know what else could be added!",
                "errors": [],
                "id": "8864e670-f3cd-11e9-97b7-a975ba8f6456",
                "lastEvaluationDate": "2019-10-21T16:48:16.310+10:00",
                "output": []
            }
        ],
        "id": "19000f50-a804-11e8-b3eb-53e94e633165",
        "language": "javascript"
    },
    "version": 1
};