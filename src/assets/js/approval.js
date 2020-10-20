import mainGoodCols from './mainGoodCols';
import reserveGoodCols from './reserveGoodCols';

export default {
  // 采购合同
  purchaseContractAudit: {
    api: {
      get: "/contract/pcInfo/get"
    },
    baseInfo: {
      title: "基本信息",
      formData: [
        {
          label: "合同号",
          prop: "contractNo"
        },
        {
          label: "贸易类型",
          prop: "tradeType",
          dict: "tradeType"
        },
        {
          label: "合同类型",
          prop: "contractType",
          dict: "contractType"
        },
        {
          label: "合同状态",
          prop: "auditStatus",
          dict: "contractStat"
        },
        {
          label: "抬头",
          prop: "headlineNames"
        },
        {
          label: "签订日期",
          prop: "signDate",
          formate: "date"
        },
        {
          label: "是否保值",
          prop: "isHedging",
          dict: "yesNo"
        },
        {
          label: "供应商",
          prop: "supplierNames"
        },
        {
          label: "合同文档号",
          prop: "contractDocNo"
        },
        {
          label: "反向合同",
          prop: "isReverse",
          dict: "yesNo"
        },
        {
          label: "有效期（始）",
          prop: "contractLifeStart",
          formate: "date"
        },
        {
          label: "有效期（止）",
          prop: "contractLifeEnd",
          formate: "date"
        },
        {
          label: "机构",
          prop: "bizOrganName"
        },
        {
          label: "部门",
          prop: "bizDeptName"
        },
        {
          label: "业务经理",
          prop: "bizEmployeeName"
        },
        {
          label: "制单人",
          prop: "optEmployeeName"
        },
        {
          label: "制单日期",
          prop: "docMakeDt",
          formate: "date"
        }
      ]
    },
    businessInfo: {
      title: "交易信息",
      formData: [
        {
          label: "交付方式",
          prop: "deliveryMode",
          dict: "deliveryMode"
        },
        {
          label: "结算方式",
          prop: "settleStyle",
          dict: "tradeWay"
        },
        {
          label: "交货市场",
          prop: "deliveryMarketName"
        },
        {
          label: "交货地点",
          prop: "deliveryPlace"
        },
        {
          label: "交付日期（起）",
          prop: "deliveryDateStart",
          formate: "date"
        },
        {
          label: "交付日期（止）",
          prop: "deliveryDateEnd",
          formate: "date"
        },
        {
          label: "运输方式",
          prop: "transMode",
          dict: "transMode"
        },
        {
          label: "费用承担",
          prop: "costBearing",
          dict: "costBearing"
        },
        {
          label: "溢短装（%）",
          prop: "moreOrLess"
        }
      ]
    },
    financeInfo: {
      title: "财务信息",
      formData: [
        {
          label: "币种",
          prop: "currency",
          dict: "currency"
        },
        {
          label: "汇率",
          prop: "exchangeRate",
          formate: "thousands",
          precision: 2
        },
        {
          label: "原币金额",
          prop: "originalAmount",
          formate: "thousands",
          precision: 2,
          isHide: [{
            value: ["3"],
            key: 'tradeType'
          }]
        },
        {
          label: "本币金额",
          prop: "localAmount",
          formate: "thousands",
          precision: 2,
          isHide: [{
            value: ["3"],
            key: 'tradeType'
          }]
        },
        {
          label: "含税金额",
          prop: "taxedAmount",
          formate: "thousands",
          precision: 2,
          isHide: [{
            value: ["1", "2"],
            key: 'tradeType'
          }]
        },
        {
          label: "不含税金额",
          prop: "taxFreeAmount",
          formate: "thousands",
          precision: 2,
          isHide: [{
            value: ["1", "2"],
            key: 'tradeType'
          }]
        }
      ]
    },
    creditInfo: {
      title: "信用信息",
      isHide: [{
        value: [1, 2, 3],
        key: 'product'
      }, {
        value: [1, 2, 4],
        key: 'productCode'
      }],
      formData: [
        {
          label: "是否授信",
          prop: "isCredit",
          dict: "yesNo"
        },
        {
          label: "授信额度",
          prop: "creditLimit",
          formate: "thousands",
          precision: 2
        },
        {
          label: "授信期限（天）",
          prop: "creditDuration",
          formate: "thousands",
          precision: 0
        }
      ]
    },
    promiseInfo: {
      title: "保证金信息",
      formData: [
        {
          label: "保证金比例（%）",
          prop: "marginLevel"
        },
        {
          label: "保证金金额",
          prop: "marginAmount",
          formate: "thousands",
          precision: 2
        }
      ]
    },
    "productInfo": {
      "title": "商品信息",
      "api": "/contract/pcProductDetail/listByContractNo",
      "query": "uk",
      "mainColumn": "productName",
      "tableData": [{
        "name": "商品名称",
        "prop": "productName"
      },
      ...mainGoodCols,
      ...reserveGoodCols,
      {
        "name": "定价方式",
        "prop": "pricingType",
        "dict": "pricingType"
      }, {
        "name": "价格",
        "prop": "estimatedPrice",
        "formate": "thousands",
        "precision": 2
      }, {
        "name": "升贴水",
        "prop": "premium",
        "formate": "thousands",
        "precision": 2
      }, {
        "name": "商品数量",
        "prop": "productQuantity",
        "formate": "thousands",
        "precision": 3
      }, {
        "name": "商品单位",
        "prop": "productUnitCode",
        "dict": "goodsUnit"
      }, {
        "name": "计量数量",
        "prop": "measurementQuantity",
        "formate": "thousands",
        "precision": 3
      }, {
        "name": "计量单位",
        "prop": "measurementUnitCode",
        "dict": "measurementUnit"
      }, {
        "name": "原币金额",
        "prop": "originalAmount",
        "formate": "thousands",
        "precision": 2,
        isHide: [{
          value: ["3"],
          key: 'tradeType'
        }]
      }, {
        "name": "本币金额",
        "prop": "localAmount",
        "formate": "thousands",
        "precision": 2,
        isHide: [{
          value: ["3"],
          key: 'tradeType'
        }]
      }, {
        "name": "含税金额",
        "prop": "taxedAmount",
        "formate": "thousands",
        "precision": 2,
        isHide: [{
          value: ["1", "2"],
          key: 'tradeType'
        }]
      }, {
        "name": "税率",
        "prop": "taxRate",
        "formate": "thousands",
        "precision": 3,
        isHide: [{
          value: ["1", "2"],
          key: 'tradeType'
        }]
      }, {
        "name": "不含税金额",
        "prop": "taxFreeAmount",
        "formate": "thousands",
        "precision": 2,
        isHide: [{
          value: ["1", "2"],
          key: 'tradeType'
        }]
      }, {
        "name": "税额",
        "prop": "taxAmount",
        "formate": "thousands",
        "precision": 2,
        isHide: [{
          value: ["1", "2"],
          key: 'tradeType'
        }]
      }]
    },
    "pricingInfo": {
      "title": "定价信息",
      "api": "/pricingRule/listByContract",
      "params": {
        "purchaseOrSale": "pc"
      },
      "query": {
        "contractNo": "uk"
      },
      "mainColumn": "productName",
      "tableData": [{
        "name": "合同号",
        "prop": "contractCode"
      }, {
        "name": "商品名称",
        "prop": "productName"
      }, {
        "name": "定价方式",
        "prop": "pricingType",
        "dict": "pricingType"
      }, {
        "name": "定价数量",
        "prop": "pricingQuantity",
        "formate": "thousands",
        "precision": 3
      }, {
        "name": "计量单位",
        "prop": "valueUnit",
        "dict": "measurementUnit"
      }, {
        "name": "说明",
        "prop": "note"
      }, {
        "name": "定价基准",
        "prop": "pricingBenchmark",
        "selectData": {
          type: 'DD_PRICE_ITEM'
        }
      }, {
        "name": "锚定日",
        "prop": "baseDate",
        "dict": "baseDate"
      }, {
        "name": "定价期",
        "prop": "pricingPeriod",
        "dict": "pricingPeriod"
      }, {
        "name": "期始月份",
        "prop": "monthBegin",
        "dict": "pricingMonth"
      }, {
        "name": "期始日期",
        "prop": "dayBegin"
      }, {
        "name": "期止月份",
        "prop": "monthEnd",
        "dict": "pricingMonth"
      }, {
        "name": "期止日期",
        "prop": "dayEnd"
      }, {
        "name": "往前几日",
        "prop": "dayBefore"
      }, {
        "name": "往后几日",
        "prop": "dayAfter"
      }, {
        "name": "定价日期始",
        "prop": "pricingTimeStart",
        "formate": "date"
      }, {
        "name": "定价日期止",
        "prop": "pricingTimeEnd",
        "formate": "date"
      }, {
        "name": "每次最小数量",
        "prop": "minQuantity",
        "formate": "thousands",
        "precision": 3
      }, {
        "name": "每次最大数量",
        "prop": "maxQuantity",
        "formate": "thousands",
        "precision": 3
      }, {
        "name": "点价权",
        "prop": "pricingRight",
        "dict": "pricingRight"
      }, {
        "name": "买方比例(%)",
        "prop": "ourRightLevel"
      }, {
        "name": "卖方比例(%)",
        "prop": "otherRightLevel"
      }, {
        "name": "处理方式",
        "prop": "overdueMode",
        "dict": "overdueMode"
      }, {
        "name": "递延周期",
        "prop": "deferCycleMode",
        "dict": "deferCycleMode"
      }, {
        "name": "递延费",
        "prop": "deferFee",
        "formate": "thousands",
        "precision": 2
      }, {
        "name": "定价方式",
        "prop": "overduePricingType",
        "dict": "overduePricingType"
      }, {
        "name": "定价说明",
        "prop": "overduePricingNote"
      }, {
        "name": "升贴水",
        "prop": "premium",
        "formate": "thousands",
        "precision": 2
      }]
    },
    "deliveryPlan": {
      "title": "交付计划",
      "api": "/contract/pcDeliveryPlan/listByContractNo",
      "query": "uk",
      "mainColumn": "productName",
      "tableData": [{
        "name": "交付日期（起）",
        "prop": "deliveryDateStart",
        "formate": "date"
      }, {
        "name": "交付日期（止）",
        "prop": "deliveryDateEnd",
        "formate": "date"
      }, {
        "name": "商品名称",
        "prop": "productName"
      },
      ...mainGoodCols,
      {
        "name": "商品数量",
        "prop": "productQuantity",
        "formate": "thousands",
        "precision": 3
      }, {
        "name": "计量数量",
        "prop": "measurementQuantity",
        "formate": "thousands",
        "precision": 3
      }, {
        "name": "升贴水",
        "prop": "premium",
        "formate": "thousands",
        "precision": 2
      }]
    },
    "relatedPc": {
      "title": "关联销售",
      "api": "/contract/pcRelatedSc/listByContractNo",
      "query": "uk",
      "mainColumn": "relatedContractNo",
      "tableData": [{
        "name": "合同号",
        "prop": "relatedContractNo"
      }, {
        "name": "商品名称",
        "prop": "productName"
      },
      ...mainGoodCols,
      {
        "name": "商品数量",
        "prop": "productQuantity",
        "formate": "thousands",
        "precision": 3
      }, {
        "name": "计量数量",
        "prop": "measurementQuantity",
        "formate": "thousands",
        "precision": 3
      }]
    },
    "paymentInfo": {
      "title": "付款信息",
      "api": "/contract/pcPaymentInfo/listByContractNo",
      "query": "uk",
      "mainColumn": "paymentType",
      "mainColumnDict": "settlementType",
      "tableData": [{
        "name": "付款方式",
        "prop": "paymentType",
        "dict": "settlementType"
      }, {
        "name": "远期天数",
        "prop": "forwardDays",
        "formate": "thousands",
        "precision": 0
      }, {
        "name": "付款比例（%）",
        "prop": "paymentLevel"
      }]
    },
    "estimatedCostList": {
      "title": "预估费用",
      "api": "/contract/pcEstimatedCost/listByContractNo",
      "query": "uk",
      "mainColumn": "productName",
      "tableData": [{
        "name": "结算单位",
        "prop": "settlementCode"
      }, {
        "name": "费用方向",
        "prop": "feeDirection"
      }, {
        "name": "费用名称",
        "prop": "feeCode"
      }, {
        "name": "费用环节",
        "prop": "feeOccurs"
      }, {
        "name": "商品名称",
        "prop": "productName"
      }, 
      ...mainGoodCols,
      {
        "name": "数量",
        "prop": "quantity"
      }, {
        "name": "含税单价",
        "prop": "includeTaxPrice"
      }, {
        "name": "含税金额",
        "prop": "includeTaxAmount"
      }, {
        "name": "无税单价",
        "prop": "excludeTaxPrice"
      }, {
        "name": "无税金额",
        "prop": "excludeTaxAmount"
      }, {
        "name": "币种",
        "prop": "currencyCode"
      }, {
        "name": "税率",
        "prop": "taxRate"
      }, {
        "name": "税额",
        "prop": "taxAmount"
      }, {
        "name": "进成本",
        "prop": "costFlag"
      }, {
        "name": "进往来",
        "prop": "intercourseFlag"
      }]
    },
    "clauseInfo": {
      "title": "条款信息",
      "api": "/contract/pcClauseInfo/listByContractNo",
      "query": "uk",
      "mainColumn": "clauseItem",
      "tableData": [{
        "name": "条款项",
        "prop": "clauseItem"
      }, {
        "name": "条款内容",
        "prop": "clauseContent"
      }]
    }
  },
  // 采购合同变更
  purchaseContractChangeAudit: {
    api: {
      get: "/contract/pccInfo/get"
    },
    baseInfo: {
      title: "基本信息",
      formData: [
        {
          label: "合同号",
          prop: "contractNo"
        },
        {
          label: "贸易类型",
          prop: "tradeType",
          dict: "tradeType"
        },
        {
          label: "合同类型",
          prop: "contractType",
          dict: "contractType"
        },
        {
          label: "变更号",
          prop: "changeNo"
        },
        {
          label: "抬头",
          prop: "headlineNames"
        },
        {
          label: "签订日期",
          prop: "signDate",
          formate: "date"
        },
        {
          label: "是否保值",
          prop: "isHedging",
          dict: "yesNo"
        },
        {
          label: "供应商",
          prop: "supplierNames"
        },
        {
          label: "合同文档号",
          prop: "contractDocNo"
        },
        {
          label: "反向合同",
          prop: "isReverse",
          dict: "yesNo"
        },
        {
          label: "交货地点",
          prop: "deliveryPlace"
        },
        {
          label: "有效期（始）",
          prop: "contractLifeStart",
          formate: "date"
        },
        {
          label: "有效期（止）",
          prop: "contractLifeEnd",
          formate: "date"
        },
        {
          label: "机构",
          prop: "bizOrganName"
        },
        {
          label: "部门",
          prop: "bizDeptName"
        },
        {
          label: "业务经理",
          prop: "bizEmployeeName"
        },
        {
          label: "制单人",
          prop: "srcOptEmployeeName"
        },
        {
          label: "制单日期",
          prop: "docMakeDt",
          formate: "date"
        }
      ]
    },
    changeInfo: {
      title: "变更信息",
      formData: [
        {
          label: "变更人",
          prop: "optEmployeeName"
        },
        {
          label: "变更时间",
          prop: "changeDt",
          formate: "date"
        },
        {
          label: "变更状态",
          prop: "auditStatus",
          dict: "auditStatus"
        },
        {
          label: "变更原因",
          prop: "changeReason"
        }
      ]
    },
    businessInfo: {
      title: "交易信息",
      formData: [
        {
          label: "交付方式",
          prop: "deliveryMode",
          dict: "deliveryMode"
        },
        {
          label: "结算方式",
          prop: "settleStyle",
          dict: "tradeWay"
        },
        {
          label: "交货市场",
          prop: "deliveryMarketName"
        },
        {
          label: "交货地点",
          prop: "deliveryPlace"
        },
        {
          label: "交付日期（起）",
          prop: "deliveryDateStart",
          formate: "date"
        },
        {
          label: "交付日期（止）",
          prop: "deliveryDateEnd",
          formate: "date"
        },
        {
          label: "运输方式",
          prop: "transMode",
          dict: "transMode"
        },
        {
          label: "费用承担",
          prop: "costBearing",
          dict: "costBearing"
        },
        {
          label: "溢短装（%）",
          prop: "moreOrLess"
        }
      ]
    },
    financeInfo: {
      title: "财务信息",
      formData: [
        {
          label: "币种",
          prop: "currency",
          dict: "currency"
        },
        {
          label: "汇率",
          prop: "exchangeRate",
          formate: "thousands",
          precision: 2
        },
        {
          label: "原币金额",
          prop: "originalAmount",
          formate: "thousands",
          precision: 2,
          isHide: [{
            value: ["3"],
            key: 'tradeType'
          }]
        },
        {
          label: "本币金额",
          prop: "localAmount",
          formate: "thousands",
          precision: 2,
          isHide: [{
            value: ["3"],
            key: 'tradeType'
          }]
        },
        {
          label: "含税金额",
          prop: "taxedAmount",
          formate: "thousands",
          precision: 2,
          isHide: [{
            value: ["1", "2"],
            key: 'tradeType'
          }]
        },
        {
          label: "不含税金额",
          prop: "taxFreeAmount",
          formate: "thousands",
          precision: 2,
          isHide: [{
            value: ["1", "2"],
            key: 'tradeType'
          }]
        }
      ]
    },
    creditInfo: {
      title: "信用信息",
      formData: [
        {
          label: "是否授信",
          prop: "isCredit",
          dict: "yesNo"
        },
        {
          label: "授信额度",
          prop: "creditLimit",
          formate: "thousands",
          precision: 2
        },
        {
          label: "授信期限（天）",
          prop: "creditDuration",
          formate: "thousands",
          precision: 0
        }
      ]
    },
    promiseInfo: {
      title: "保证金信息",
      formData: [
        {
          label: "保证金比例（%）",
          prop: "marginLevel"
        },
        {
          label: "保证金金额",
          prop: "marginAmount",
          formate: "thousands",
          precision: 2
        }
      ]
    },
    "productInfo": {
      "title": "商品信息",
      "api": "/contract/pccProductDetail/listByChangeNo",
      "query": "uk",
      "mainColumn": "productName",
      "tableData": [{
        "name": "商品名称",
        "prop": "productName"
      },
      ...mainGoodCols,
      ...reserveGoodCols,
      {
        "name": "定价方式",
        "prop": "pricingType",
        "dict": "pricingType"
      }, {
        "name": "价格",
        "prop": "estimatedPrice",
        "formate": "thousands",
        "precision": 2
      }, {
        "name": "升贴水",
        "prop": "premium",
        "formate": "thousands",
        "precision": 2
      }, {
        "name": "商品数量",
        "prop": "productQuantity",
        "formate": "thousands",
        "precision": 3
      }, {
        "name": "商品单位",
        "prop": "productUnitCode",
        "dict": "goodsUnit"
      }, {
        "name": "计量数量",
        "prop": "measurementQuantity",
        "formate": "thousands",
        "precision": 3
      }, {
        "name": "计量单位",
        "prop": "measurementUnitCode",
        "dict": "measurementUnit"
      }, {
        "name": "原币金额",
        "prop": "originalAmount",
        "formate": "thousands",
        "precision": 2,
        isHide: [{
          value: ["3"],
          key: 'tradeType'
        }]
      }, {
        "name": "本币金额",
        "prop": "localAmount",
        "formate": "thousands",
        "precision": 2,
        isHide: [{
          value: ["3"],
          key: 'tradeType'
        }]
      }, {
        "name": "含税金额",
        "prop": "taxedAmount",
        "formate": "thousands",
        "precision": 2,
        isHide: [{
          value: ["1", "2"],
          key: 'tradeType'
        }]
      }, {
        "name": "税率",
        "prop": "taxRate",
        "formate": "thousands",
        "precision": 3,
        isHide: [{
          value: ["1", "2"],
          key: 'tradeType'
        }]
      }, {
        "name": "不含税金额",
        "prop": "taxFreeAmount",
        "formate": "thousands",
        "precision": 2,
        isHide: [{
          value: ["1", "2"],
          key: 'tradeType'
        }]
      }, {
        "name": "税额",
        "prop": "taxAmount",
        "formate": "thousands",
        "precision": 2,
        isHide: [{
          value: ["1", "2"],
          key: 'tradeType'
        }]
      }]
    },
    "pricingInfo": {
      "title": "定价信息",
      "api": "/pricingRuleChange/listByContractChange",
      "query": {
        "contractNo": "uk",
        "changeNo": "changeNo"
      },
      "params": {
        "purchaseOrSale": "P"
      },
      "mainColumn": "productName",
      "tableData": [{
        "name": "合同号",
        "prop": "contractCode"
      }, {
        "name": "商品名称",
        "prop": "productName"
      }, {
        "name": "定价方式",
        "prop": "pricingType",
        "dict": "pricingType"
      }, {
        "name": "定价数量",
        "prop": "pricingQuantity",
        "formate": "thousands",
        "precision": 3
      }, {
        "name": "计量单位",
        "prop": "valueUnit",
        "dict": "measurementUnit"
      }, {
        "name": "说明",
        "prop": "note"
      }, {
        "name": "定价基准",
        "prop": "pricingBenchmark",
        "selectData": {
          type: 'DD_PRICE_ITEM'
        }
      }, {
        "name": "锚定日",
        "prop": "baseDate",
        "dict": "baseDate"
      }, {
        "name": "定价期",
        "prop": "pricingPeriod",
        "dict": "pricingPeriod"
      }, {
        "name": "期始月份",
        "prop": "monthBegin",
        "dict": "pricingMonth"
      }, {
        "name": "期始日期",
        "prop": "dayBegin"
      }, {
        "name": "期止月份",
        "prop": "monthEnd",
        "dict": "pricingMonth"
      }, {
        "name": "期止日期",
        "prop": "dayEnd"
      }, {
        "name": "往前几日",
        "prop": "dayBefore"
      }, {
        "name": "往后几日",
        "prop": "dayAfter"
      }, {
        "name": "定价日期始",
        "prop": "pricingTimeStart",
        "formate": "date"
      }, {
        "name": "定价日期止",
        "prop": "pricingTimeEnd",
        "formate": "date"
      }, {
        "name": "每次最小数量",
        "prop": "minQuantity",
        "formate": "thousands",
        "precision": 3
      }, {
        "name": "每次最大数量",
        "prop": "maxQuantity",
        "formate": "thousands",
        "precision": 3
      }, {
        "name": "点价权",
        "prop": "pricingRight",
        "dict": "pricingRight"
      }, {
        "name": "买方比例(%)",
        "prop": "ourRightLevel"
      }, {
        "name": "卖方比例(%)",
        "prop": "otherRightLevel"
      }, {
        "name": "处理方式",
        "prop": "overdueMode",
        "dict": "overdueMode"
      }, {
        "name": "递延周期",
        "prop": "deferCycleMode",
        "dict": "deferCycleMode"
      }, {
        "name": "递延费",
        "prop": "deferFee",
        "formate": "thousands",
        "precision": 2
      }, {
        "name": "定价方式",
        "prop": "overduePricingType",
        "dict": "overduePricingType"
      }, {
        "name": "定价说明",
        "prop": "overduePricingNote"
      }, {
        "name": "升贴水",
        "prop": "premium",
        "formate": "thousands",
        "precision": 2
      }]
    },
    "deliveryPlan": {
      "title": "交付计划",
      "api": "/contract/pccDeliveryPlan/listByChangeNo",
      "query": "uk",
      "mainColumn": "productName",
      "tableData": [{
        "name": "交付时间（起）",
        "prop": "deliveryDateStart",
        "formate": "date"
      }, {
        "name": "交付时间（止）",
        "prop": "deliveryDateEnd",
        "formate": "date"
      }, {
        "name": "商品名称",
        "prop": "productName"
      },
      ...mainGoodCols,
      {
        "name": "商品数量",
        "prop": "productQuantity",
        "formate": "thousands",
        "precision": 3
      }, {
        "name": "计量数量",
        "prop": "measurementQuantity",
        "formate": "thousands",
        "precision": 3
      }, {
        "name": "升贴水",
        "prop": "premium",
        "formate": "thousands",
        "precision": 2
      }]
    },
    "relatedPc": {
      "title": "关联销售",
      "api": "/contract/pccRelatedSc/listByChangeNo",
      "query": "uk",
      "mainColumn": "relatedContractNo",
      "tableData": [{
        "name": "合同号",
        "prop": "relatedContractNo"
      }, {
        "name": "商品名称",
        "prop": "productName"
      },
      ...mainGoodCols,
      {
        "name": "商品数量",
        "prop": "productQuantity",
        "formate": "thousands",
        "precision": 3
      }, {
        "name": "计量数量",
        "prop": "measurementQuantity",
        "formate": "thousands",
        "precision": 3
      }]
    },
    "paymentInfo": {
      "title": "付款信息",
      "api": "/contract/pccPaymentInfo/listByChangeNo",
      "query": "uk",
      "mainColumn": "paymentType",
      "mainColumnDict": "settlementType",
      "tableData": [{
        "name": "付款方式",
        "prop": "paymentType",
        "dict": "settlementType"
      }, {
        "name": "远期天数",
        "prop": "forwardDays",
        "formate": "thousands",
        "precision": 0
      }, {
        "name": "付款比例（%）",
        "prop": "paymentLevel"
      }]
    },
    "estimatedCostList": {
      "title": "预估费用",
      "api": "/contract/pccEstimatedCost/listByChangeNo",
      "query": "uk",
      "mainColumn": "productName",
      "tableData": [{
        "name": "结算单位",
        "prop": "settlementCode"
      }, {
        "name": "费用方向",
        "prop": "feeDirection"
      }, {
        "name": "费用名称",
        "prop": "feeCode"
      }, {
        "name": "费用环节",
        "prop": "feeOccurs"
      }, {
        "name": "商品名称",
        "prop": "productName"
      }, 
      ...mainGoodCols,
      {
        "name": "数量",
        "prop": "quantity"
      }, {
        "name": "含税单价",
        "prop": "includeTaxPrice"
      }, {
        "name": "含税金额",
        "prop": "includeTaxAmount"
      }, {
        "name": "无税单价",
        "prop": "excludeTaxPrice"
      }, {
        "name": "无税金额",
        "prop": "excludeTaxAmount"
      }, {
        "name": "币种",
        "prop": "currencyCode"
      }, {
        "name": "税率",
        "prop": "taxRate"
      }, {
        "name": "税额",
        "prop": "taxAmount"
      }, {
        "name": "进成本",
        "prop": "costFlag"
      }, {
        "name": "进往来",
        "prop": "intercourseFlag"
      }]
    },
    "clauseInfo": {
      "title": "条款信息",
      "api": "/contract/pccClauseInfo/listByChangeNo",
      "query": "uk",
      "mainColumn": "clauseItem",
      "tableData": [{
        "name": "条款项",
        "prop": "clauseItem"
      }, {
        "name": "条款内容",
        "prop": "clauseContent"
      }]
    }
  },
  // 采购批次
  purchaseLotAudit: {
    api: {
      get: "/contract/plInfo/get"
    },
    baseInfo: {
      title: "基本信息",
      formData: [
        {
          label: "合同号",
          prop: "contractNo"
        },
        {
          label: "贸易类型",
          prop: "tradeType",
          dict: "tradeType"
        },
        {
          label: "签订日期",
          prop: "signDate",
          formate: "date"
        },
        {
          label: "批次状态",
          prop: "auditStatus",
          dict: "contractStat"
        },
        {
          label: "批次号",
          prop: "lotNo"
        },
        {
          label: "合同类型",
          prop: "contractType",
          dict: "contractType"
        },
        {
          label: "有效期（始）",
          prop: "lotLifeStart",
          formate: "date"
        },
        {
          label: "有效期（止）",
          prop: "lotLifeEnd",
          formate: "date"
        },
        {
          label: "机构",
          prop: "bizOrganName"
        },
        {
          label: "抬头",
          prop: "headlineNames"
        },
        {
          label: "部门",
          prop: "bizDeptName"
        },
        {
          label: "业务经理",
          prop: "bizEmployeeName"
        },
        {
          label: "供应商",
          prop: "supplierNames"
        },
        {
          label: "制单人",
          prop: "optEmployeeName"
        },
        {
          label: "制单日期",
          prop: "docMakeDt",
          formate: "date"
        }
      ]
    },
    businessInfo: {
      title: "交易信息",
      formData: [
        {
          label: "交付方式",
          prop: "deliveryMode",
          dict: "deliveryMode"
        },
        {
          label: "结算方式",
          prop: "settleStyle",
          dict: "tradeWay"
        },
        {
          label: "交货市场",
          prop: "deliveryMarketName"
        },
        {
          label: "交货地点",
          prop: "deliveryPlace"
        },
        {
          label: "交付日期（起）",
          prop: "deliveryDateStart",
          formate: "date"
        },
        {
          label: "交付日期（止）",
          prop: "deliveryDateEnd",
          formate: "date"
        },
        {
          label: "运输方式",
          prop: "transMode",
          dict: "transMode"
        },
        {
          label: "费用承担",
          prop: "costBearing",
          dict: "costBearing"
        },
        {
          label: "溢短装（%）",
          prop: "moreOrLess"
        }
      ]
    },
    financeInfo: {
      title: "财务信息",
      formData: [
        {
          label: "币种",
          prop: "currency",
          dict: "currency"
        },
        {
          label: "汇率",
          prop: "exchangeRate",
          formate: "thousands",
          precision: 2
        },
        {
          label: "原币金额",
          prop: "originalAmount",
          formate: "thousands",
          precision: 2,
          isHide: [{
            value: ["3"],
            key: 'tradeType'
          }]
        },
        {
          label: "本币金额",
          prop: "localAmount",
          formate: "thousands",
          precision: 2,
          isHide: [{
            value: ["3"],
            key: 'tradeType'
          }]
        },
        {
          label: "含税金额",
          prop: "taxedAmount",
          formate: "thousands",
          precision: 2,
          isHide: [{
            value: ["1", "2"],
            key: 'tradeType'
          }]
        },
        {
          label: "不含税金额",
          prop: "taxFreeAmount",
          formate: "thousands",
          precision: 2,
          isHide: [{
            value: ["1", "2"],
            key: 'tradeType'
          }]
        }
      ]
    },
    creditInfo: {
      title: "信用信息",
      formData: [
        {
          label: "是否授信",
          prop: "isCredit",
          dict: "yesNo"
        },
        {
          label: "授信额度",
          prop: "creditLimit",
          formate: "thousands",
          precision: 2
        },
        {
          label: "授信期限（天）",
          prop: "creditDuration",
          formate: "thousands",
          precision: 0
        }
      ]
    },
    promiseInfo: {
      title: "保证金信息",
      formData: [
        {
          label: "保证金比例（%）",
          prop: "marginLevel"
        },
        {
          label: "保证金金额",
          prop: "marginAmount",
          formate: "thousands",
          precision: 2
        }
      ]
    },
    "productInfo": {
      "title": "商品信息",
      "api": "/contract/plProductDetail/listByLotNo",
      "query": "uk",
      "mainColumn": "productName",
      "tableData": [{
        "name": "商品名称",
        "prop": "productName"
      },
      ...mainGoodCols,
      ...reserveGoodCols,
      {
        "name": "定价方式",
        "prop": "pricingType",
        "dict": "pricingType"
      }, {
        "name": "价格",
        "prop": "estimatedPrice",
        "formate": "thousands",
        "precision": 2
      }, {
        "name": "升贴水",
        "prop": "premium",
        "formate": "thousands",
        "precision": 2
      }, {
        "name": "商品数量",
        "prop": "productQuantity",
        "formate": "thousands",
        "precision": 3
      }, {
        "name": "商品单位",
        "prop": "productUnitCode",
        "dict": "goodsUnit"
      }, {
        "name": "计量数量",
        "prop": "measurementQuantity",
        "formate": "thousands",
        "precision": 3
      }, {
        "name": "计量单位",
        "prop": "measurementUnitCode",
        "dict": "measurementUnit"
      }, {
        "name": "原币金额",
        "prop": "originalAmount",
        "formate": "thousands",
        "precision": 2,
        isHide: [{
          value: ["3"],
          key: 'tradeType'
        }]
      }, {
        "name": "本币金额",
        "prop": "localAmount",
        "formate": "thousands",
        "precision": 2,
        isHide: [{
          value: ["3"],
          key: 'tradeType'
        }]
      }, {
        "name": "含税金额",
        "prop": "taxedAmount",
        "formate": "thousands",
        "precision": 2,
        isHide: [{
          value: ["1", "2"],
          key: 'tradeType'
        }]
      }, {
        "name": "税率",
        "prop": "taxRate",
        "formate": "thousands",
        "precision": 3,
        isHide: [{
          value: ["1", "2"],
          key: 'tradeType'
        }]
      }, {
        "name": "不含税金额",
        "prop": "taxFreeAmount",
        "formate": "thousands",
        "precision": 2,
        isHide: [{
          value: ["1", "2"],
          key: 'tradeType'
        }]
      }, {
        "name": "税额",
        "prop": "taxAmount",
        "formate": "thousands",
        "precision": 2,
        isHide: [{
          value: ["1", "2"],
          key: 'tradeType'
        }]
      }]
    },
    "paymentInfo": {
      "title": "付款信息",
      "api": "/contract/plPaymentInfo/listByLotNo",
      "query": "uk",
      "mainColumn": "paymentType",
      "mainColumnDict": "settlementType",
      "tableData": [{
        "name": "付款方式",
        "prop": "paymentType",
        "dict": "settlementType"
      }, {
        "name": "远期天数",
        "prop": "forwardDays",
        "formate": "thousands",
        "precision": 0
      }, {
        "name": "付款比例（%）",
        "prop": "paymentLevel"
      }]
    },
    "estimatedCostList": {
      "title": "预估费用",
      "api": "/contract/plEstimatedCost/listByLotNo",
      "query": "uk",
      "mainColumn": "productName",
      "tableData": [{
        "name": "结算单位",
        "prop": "settlementCode"
      }, {
        "name": "费用方向",
        "prop": "feeDirection"
      }, {
        "name": "费用名称",
        "prop": "feeCode"
      }, {
        "name": "费用环节",
        "prop": "feeOccurs"
      }, {
        "name": "商品名称",
        "prop": "productName"
      }, 
      ...mainGoodCols,
      {
        "name": "数量",
        "prop": "quantity"
      }, {
        "name": "含税单价",
        "prop": "includeTaxPrice"
      }, {
        "name": "含税金额",
        "prop": "includeTaxAmount"
      }, {
        "name": "无税单价",
        "prop": "excludeTaxPrice"
      }, {
        "name": "无税金额",
        "prop": "excludeTaxAmount"
      }, {
        "name": "币种",
        "prop": "currencyCode"
      }, {
        "name": "税率",
        "prop": "taxRate"
      }, {
        "name": "税额",
        "prop": "taxAmount"
      }, {
        "name": "进成本",
        "prop": "costFlag"
      }, {
        "name": "进往来",
        "prop": "intercourseFlag"
      }]
    }
  },
  // 采购批次变更
  purchaseLotChangeAudit: {
    api: {
      get: "/contract/plcInfo/get"
    },
    baseInfo: {
      title: "基本信息",
      formData: [
        {
          label: "合同号",
          prop: "contractNo"
        },
        {
          label: "贸易类型",
          prop: "tradeType",
          dict: "tradeType"
        },
        {
          label: "签订日期",
          prop: "signDate",
          formate: "date"
        },
        {
          label: "变更号",
          prop: "changeNo"
        },
        {
          label: "批次号",
          prop: "lotNo"
        },
        {
          label: "合同类型",
          prop: "contractType",
          dict: "contractType"
        },
        {
          label: "有效期（始）",
          prop: "lotLifeStart",
          formate: "date"
        },
        {
          label: "有效期（止）",
          prop: "lotLifeEnd",
          formate: "date"
        },
        {
          label: "机构",
          prop: "bizOrganName"
        },
        {
          label: "抬头",
          prop: "headlineNames"
        },
        {
          label: "部门",
          prop: "bizDeptName"
        },
        {
          label: "业务经理",
          prop: "bizEmployeeName"
        },
        {
          label: "供应商",
          prop: "supplierNames"
        },
        {
          label: "制单人",
          prop: "srcOptEmployeeName"
        },
        {
          label: "制单日期",
          prop: "docMakeDt",
          formate: "date"
        }
      ]
    },
    changeInfo: {
      title: "变更信息",
      formData: [
        {
          label: "变更人",
          prop: "optEmployeeName"
        },
        {
          label: "变更时间",
          prop: "changeDt",
          formate: "date"
        },
        {
          label: "变更状态",
          prop: "auditStatus",
          dict: "auditStatus"
        },
        {
          label: "变更原因",
          prop: "changeReason"
        }
      ]
    },
    businessInfo: {
      title: "交易信息",
      formData: [
        {
          label: "交付方式",
          prop: "deliveryMode",
          dict: "deliveryMode"
        },
        {
          label: "结算方式",
          prop: "settleStyle",
          dict: "tradeWay"
        },
        {
          label: "交货市场",
          prop: "deliveryMarketName"
        },
        {
          label: "交货地点",
          prop: "deliveryPlace"
        },
        {
          label: "交付日期（起）",
          prop: "deliveryDateStart",
          formate: "date"
        },
        {
          label: "交付日期（止）",
          prop: "deliveryDateEnd",
          formate: "date"
        },
        {
          label: "运输方式",
          prop: "transMode",
          dict: "transMode"
        },
        {
          label: "费用承担",
          prop: "costBearing",
          dict: "costBearing"
        },
        {
          label: "溢短装（%）",
          prop: "moreOrLess"
        }
      ]
    },
    financeInfo: {
      title: "财务信息",
      formData: [
        {
          label: "币种",
          prop: "currency",
          dict: "currency"
        },
        {
          label: "汇率",
          prop: "exchangeRate",
          formate: "thousands",
          precision: 2
        },
        {
          label: "原币金额",
          prop: "originalAmount",
          formate: "thousands",
          precision: 2,
          isHide: [{
            value: ["3"],
            key: 'tradeType'
          }]
        },
        {
          label: "本币金额",
          prop: "localAmount",
          formate: "thousands",
          precision: 2,
          isHide: [{
            value: ["3"],
            key: 'tradeType'
          }]
        },
        {
          label: "含税金额",
          prop: "taxedAmount",
          formate: "thousands",
          precision: 2,
          isHide: [{
            value: ["1", "2"],
            key: 'tradeType'
          }]
        },
        {
          label: "不含税金额",
          prop: "taxFreeAmount",
          formate: "thousands",
          precision: 2,
          isHide: [{
            value: ["1", "2"],
            key: 'tradeType'
          }]
        }
      ]
    },
    creditInfo: {
      title: "信用信息",
      formData: [
        {
          label: "是否授信",
          prop: "isCredit",
          dict: "yesNo"
        },
        {
          label: "授信额度",
          prop: "creditLimit",
          formate: "thousands",
          precision: 2
        },
        {
          label: "授信期限（天）",
          prop: "creditDuration",
          formate: "thousands",
          precision: 0
        }
      ]
    },
    promiseInfo: {
      title: "保证金信息",
      formData: [
        {
          label: "保证金比例（%）",
          prop: "marginLevel"
        },
        {
          label: "保证金金额",
          prop: "marginAmount",
          formate: "thousands",
          precision: 2
        }
      ]
    },
    "productInfo": {
      "title": "商品信息",
      "api": "/contract/plcProductDetail/listByChangeNo",
      "query":  "uk",
      "mainColumn": "productName",
      "tableData": [{
        "name": "商品名称",
        "prop": "productName"
      },
      ...mainGoodCols,
      ...reserveGoodCols,
      {
        "name": "定价方式",
        "prop": "pricingType",
        "dict": "pricingType"
      }, {
        "name": "价格",
        "prop": "estimatedPrice",
        "formate": "thousands",
        "precision": 2
      }, {
        "name": "升贴水",
        "prop": "premium",
        "formate": "thousands",
        "precision": 2
      }, {
        "name": "商品数量",
        "prop": "productQuantity",
        "formate": "thousands",
        "precision": 3
      }, {
        "name": "商品单位",
        "prop": "productUnitCode",
        "dict": "goodsUnit"
      }, {
        "name": "计量数量",
        "prop": "measurementQuantity",
        "formate": "thousands",
        "precision": 3
      }, {
        "name": "计量单位",
        "prop": "measurementUnitCode",
        "dict": "measurementUnit"
      }, {
        "name": "原币金额",
        "prop": "originalAmount",
        "formate": "thousands",
        "precision": 2,
        isHide: [{
          value: ["3"],
          key: 'tradeType'
        }]
      }, {
        "name": "本币金额",
        "prop": "localAmount",
        "formate": "thousands",
        "precision": 2,
        isHide: [{
          value: ["3"],
          key: 'tradeType'
        }]
      }, {
        "name": "含税金额",
        "prop": "taxedAmount",
        "formate": "thousands",
        "precision": 2,
        isHide: [{
          value: ["1", "2"],
          key: 'tradeType'
        }]
      }, {
        "name": "税率",
        "prop": "taxRate",
        "formate": "thousands",
        "precision": 3,
        isHide: [{
          value: ["1", "2"],
          key: 'tradeType'
        }]
      }, {
        "name": "不含税金额",
        "prop": "taxFreeAmount",
        "formate": "thousands",
        "precision": 2,
        isHide: [{
          value: ["1", "2"],
          key: 'tradeType'
        }]
      }, {
        "name": "税额",
        "prop": "taxAmount",
        "formate": "thousands",
        "precision": 2,
        isHide: [{
          value: ["1", "2"],
          key: 'tradeType'
        }]
      }]
    },
    "paymentInfo": {
      "title": "付款信息",
      "api": "/contract/plcPaymentInfo/listByChangeNo",
      "query": "uk",
      "mainColumn": "paymentType",
      "mainColumnDict": "settlementType",
      "tableData": [{
        "name": "付款方式",
        "prop": "paymentType",
        "dict": "settlementType"
      }, {
        "name": "远期天数",
        "prop": "forwardDays",
        "formate": "thousands",
        "precision": 0
      }, {
        "name": "付款比例（%）",
        "prop": "paymentLevel"
      }]
    },
    "estimatedCostList": {
      "title": "预估费用",
      "api": "/contract/plcEstimatedCost/listByChangeNo",
      "query": "uk",
      "mainColumn": "productName",
      "tableData": [{
        "name": "结算单位",
        "prop": "settlementCode"
      }, {
        "name": "费用方向",
        "prop": "feeDirection"
      }, {
        "name": "费用名称",
        "prop": "feeCode"
      }, {
        "name": "费用环节",
        "prop": "feeOccurs"
      }, {
        "name": "商品名称",
        "prop": "productName"
      }, 
      ...mainGoodCols,
      {
        "name": "数量",
        "prop": "quantity"
      }, {
        "name": "含税单价",
        "prop": "includeTaxPrice"
      }, {
        "name": "含税金额",
        "prop": "includeTaxAmount"
      }, {
        "name": "无税单价",
        "prop": "excludeTaxPrice"
      }, {
        "name": "无税金额",
        "prop": "excludeTaxAmount"
      }, {
        "name": "币种",
        "prop": "currencyCode"
      }, {
        "name": "税率",
        "prop": "taxRate"
      }, {
        "name": "税额",
        "prop": "taxAmount"
      }, {
        "name": "进成本",
        "prop": "costFlag"
      }, {
        "name": "进往来",
        "prop": "intercourseFlag"
      }]
    }
  },
  // 销售合同
  salesContractAudit: {
    api: {
      get: "/contract/scInfo/get"
    },
    baseInfo: {
      title: "基本信息",
      formData: [
        {
          label: "合同号",
          prop: "contractNo"
        },
        {
          label: "贸易类型",
          prop: "tradeType",
          dict: "tradeType"
        },
        {
          label: "合同类型",
          prop: "contractType",
          dict: "contractType"
        },
        {
          label: "合同状态",
          prop: "auditStatus",
          dict: "contractStat"
        },
        {
          label: "抬头",
          prop: "headlineNames"
        },
        {
          label: "签订日期",
          prop: "signDate",
          formate: "date"
        },
        {
          label: "是否保值",
          prop: "isHedging",
          dict: "yesNo"
        },
        {
          label: "客户",
          prop: "customerNames"
        },
        {
          label: "合同文档号",
          prop: "contractDocNo"
        },
        {
          label: "反向合同",
          prop: "isReverse",
          dict: "yesNo"
        },
        {
          label: "有效期（始）",
          prop: "contractLifeStart",
          formate: "date"
        },
        {
          label: "有效期（止）",
          prop: "contractLifeEnd",
          formate: "date"
        },
        {
          label: "机构",
          prop: "bizOrganName"
        },
        {
          label: "部门",
          prop: "bizDeptName"
        },
        {
          label: "业务经理",
          prop: "bizEmployeeName"
        },
        {
          label: "制单人",
          prop: "optEmployeeName"
        },
        {
          label: "制单日期",
          prop: "docMakeDt",
          formate: "date"
        }
      ]
    },
    businessInfo: {
      title: "交易信息",
      formData: [
        {
          label: "交付方式",
          prop: "deliveryMode",
          dict: "deliveryMode"
        },
        {
          label: "结算方式",
          prop: "settleStyle",
          dict: "tradeWay"
        },
        {
          label: "交货市场",
          prop: "deliveryMarketName"
        },
        {
          label: "交货地点",
          prop: "deliveryPlace"
        },
        {
          label: "交货日期（起）",
          prop: "deliveryDateStart",
          formate: "date"
        },
        {
          label: "交货日期（止）",
          prop: "deliveryDateEnd",
          formate: "date"
        },
        {
          label: "运输方式",
          prop: "transMode",
          dict: "transMode"
        },
        {
          label: "费用承担",
          prop: "costBearing",
          dict: "costBearing"
        },
        {
          label: "溢短装（%）",
          prop: "moreOrLess"
        }
      ]
    },
    financeInfo: {
      title: "财务信息",
      formData: [
        {
          label: "币种",
          prop: "currency",
          dict: "currency"
        },
        {
          label: "汇率",
          prop: "exchangeRate",
          formate: "thousands",
          precision: 2
        },
        {
          label: "原币金额",
          prop: "originalAmount",
          formate: "thousands",
          precision: 2,
          isHide: [{
            value: ["3"],
            key: 'tradeType'
          }]
        },
        {
          label: "本币金额",
          prop: "localAmount",
          formate: "thousands",
          precision: 2,
          isHide: [{
            value: ["3"],
            key: 'tradeType'
          }]
        },
        {
          label: "含税金额",
          prop: "taxedAmount",
          formate: "thousands",
          precision: 2,
          isHide: [{
            value: ["1", "2"],
            key: 'tradeType'
          }]
        },
        {
          label: "不含税金额",
          prop: "taxFreeAmount",
          formate: "thousands",
          precision: 2,
          isHide: [{
            value: ["1", "2"],
            key: 'tradeType'
          }]
        }
      ]
    },
    creditInfo: {
      title: "信用信息",
      formData: [
        {
          label: "是否授信",
          prop: "isCredit",
          dict: "yesNo"
        },
        {
          label: "授信额度",
          prop: "creditLimit",
          formate: "thousands",
          precision: 2
        },
        {
          label: "授信期限（天）",
          prop: "creditDuration",
          formate: "thousands",
          precision: 0
        }
      ]
    },
    promiseInfo: {
      title: "保证金信息",
      formData: [
        {
          label: "保证金比例（%）",
          prop: "marginLevel"
        },
        {
          label: "保证金金额",
          prop: "marginAmount",
          formate: "thousands",
          precision: 2
        }
      ]
    },
    "productInfo": {
      "title": "商品信息",
      "api": "/contract/scProductDetail/listByContractNo",
      "query": "uk",
      "mainColumn": "productName",
      "tableData": [{
        "name": "商品名称",
        "prop": "productName"
      },
      ...mainGoodCols,
      ...reserveGoodCols,
      {
        "name": "定价方式",
        "prop": "pricingType",
        "dict": "pricingType"
      }, {
        "name": "价格",
        "prop": "estimatedPrice",
        "formate": "thousands",
        "precision": 2
      }, {
        "name": "升贴水",
        "prop": "premium",
        "formate": "thousands",
        "precision": 2
      }, {
        "name": "商品数量",
        "prop": "productQuantity",
        "formate": "thousands",
        "precision": 3
      }, {
        "name": "商品单位",
        "prop": "productUnitCode",
        "dict": "goodsUnit"
      }, {
        "name": "计量数量",
        "prop": "measurementQuantity",
        "formate": "thousands",
        "precision": 3
      }, {
        "name": "计量单位",
        "prop": "measurementUnitCode",
        "dict": "measurementUnit"
      }, {
        "name": "原币金额",
        "prop": "originalAmount",
        "formate": "thousands",
        "precision": 2,
        isHide: [{
          value: ["3"],
          key: 'tradeType'
        }]
      }, {
        "name": "本币金额",
        "prop": "localAmount",
        "formate": "thousands",
        "precision": 2,
        isHide: [{
          value: ["3"],
          key: 'tradeType'
        }]
      }, {
        "name": "含税金额",
        "prop": "taxedAmount",
        "formate": "thousands",
        "precision": 2,
        isHide: [{
          value: ["1", "2"],
          key: 'tradeType'
        }]
      }, {
        "name": "税率",
        "prop": "taxRate",
        "formate": "thousands",
        "precision": 3,
        isHide: [{
          value: ["1", "2"],
          key: 'tradeType'
        }]
      }, {
        "name": "不含税金额",
        "prop": "taxFreeAmount",
        "formate": "thousands",
        "precision": 2,
        isHide: [{
          value: ["1", "2"],
          key: 'tradeType'
        }]
      }, {
        "name": "税额",
        "prop": "taxAmount",
        "formate": "thousands",
        "precision": 2,
        isHide: [{
          value: ["1", "2"],
          key: 'tradeType'
        }]
      }]
    },
    "pricingInfo": {
      "title": "定价信息",
      "api": "/pricingRule/listByContract",
      "query": {
        "contractNo": "uk"
      },
      "params": {
        "purchaseOrSale": "S"
      },
      "mainColumn": "productName",
      "tableData": [{
        "name": "合同号",
        "prop": "contractCode"
      }, {
        "name": "商品名称",
        "prop": "productName"
      }, {
        "name": "定价方式",
        "prop": "pricingType",
        "dict": "pricingType"
      }, {
        "name": "定价数量",
        "prop": "pricingQuantity",
        "formate": "thousands",
        "precision": 3
      }, {
        "name": "计量单位",
        "prop": "valueUnit",
        "dict": "measurementUnit"
      }, {
        "name": "说明",
        "prop": "note"
      }, {
        "name": "定价基准",
        "prop": "pricingBenchmark",
        "selectData": {
          type: 'DD_PRICE_ITEM'
        }
      }, {
        "name": "锚定日",
        "prop": "baseDate",
        "dict": "baseDate"
      }, {
        "name": "定价期",
        "prop": "pricingPeriod",
        "dict": "pricingPeriod"
      }, {
        "name": "期始月份",
        "prop": "monthBegin",
        "dict": "pricingMonth"
      }, {
        "name": "期始日期",
        "prop": "dayBegin"
      }, {
        "name": "期止月份",
        "prop": "monthEnd",
        "dict": "pricingMonth"
      }, {
        "name": "期止日期",
        "prop": "dayEnd"
      }, {
        "name": "往前几日",
        "prop": "dayBefore"
      }, {
        "name": "往后几日",
        "prop": "dayAfter"
      }, {
        "name": "定价日期始",
        "prop": "pricingTimeStart",
        "formate": "date"
      }, {
        "name": "定价日期止",
        "prop": "pricingTimeEnd",
        "formate": "date"
      }, {
        "name": "每次最小数量",
        "prop": "minQuantity",
        "formate": "thousands",
        "precision": 3
      }, {
        "name": "每次最大数量",
        "prop": "maxQuantity",
        "formate": "thousands",
        "precision": 3
      }, {
        "name": "点价权",
        "prop": "pricingRight",
        "dict": "pricingRight"
      }, {
        "name": "买方比例(%)",
        "prop": "ourRightLevel"
      }, {
        "name": "卖方比例(%)",
        "prop": "otherRightLevel"
      }, {
        "name": "处理方式",
        "prop": "overdueMode",
        "dict": "overdueMode"
      }, {
        "name": "递延周期",
        "prop": "deferCycleMode",
        "dict": "deferCycleMode"
      }, {
        "name": "递延费",
        "prop": "deferFee",
        "formate": "thousands",
        "precision": 2
      }, {
        "name": "定价方式",
        "prop": "overduePricingType",
        "dict": "overduePricingType"
      }, {
        "name": "定价说明",
        "prop": "overduePricingNote"
      }, {
        "name": "升贴水",
        "prop": "premium",
        "formate": "thousands",
        "precision": 2
      }]
    },
    "deliveryPlan": {
      "title": "交付计划",
      "api": "/contract/scDeliveryPlan/listByContractNo",
      "query": "uk",
      "mainColumn": "productName",
      "tableData": [{
        "name": "交付日期（起）",
        "prop": "deliveryDateStart",
        "formate": "date"
      }, {
        "name": "交付日期（止）",
        "prop": "deliveryDateEnd",
        "formate": "date"
      }, {
        "name": "商品名称",
        "prop": "productName"
      },
      ...mainGoodCols,
      {
        "name": "商品数量",
        "prop": "productQuantity",
        "formate": "thousands",
        "precision": 3
      }, {
        "name": "计量数量",
        "prop": "measurementQuantity",
        "formate": "thousands",
        "precision": 3
      }, {
        "name": "升贴水",
        "prop": "premium",
        "formate": "thousands",
        "precision": 2
      }]
    },
    "relatedPc": {
      "title": "关联采购",
      "api": "/contract/scRelatedPc/listByContractNo",
      "query": "uk",
      "mainColumn": "relatedContractNo",
      "tableData": [{
        "name": "合同号",
        "prop": "relatedContractNo"
      }, {
        "name": "商品名称",
        "prop": "productName"
      },
      ...mainGoodCols,
      {
        "name": "商品数量",
        "prop": "productQuantity",
        "formate": "thousands",
        "precision": 3
      }, {
        "name": "计量数量",
        "prop": "measurementQuantity",
        "formate": "thousands",
        "precision": 3
      }]
    },
    "paymentInfo": {
      "title": "付款信息",
      "api": "/contract/scPaymentInfo/listByContractNo",
      "query": "uk",
      "mainColumn": "paymentType",
      "mainColumnDict": "settlementType",
      "tableData": [{
        "name": "付款方式",
        "prop": "paymentType",
        "dict": "settlementType"
      }, {
        "name": "远期天数",
        "prop": "forwardDays",
        "formate": "thousands",
        "precision": 0
      }, {
        "name": "付款比例（%）",
        "prop": "paymentLevel"
      }]
    },
    "estimatedCostList": {
      "title": "预估费用",
      "api": "/contract/scEstimatedCost/listByContractNo",
      "query": "uk",
      "mainColumn": "productName",
      "tableData": [{
        "name": "结算单位",
        "prop": "settlementCode"
      }, {
        "name": "费用方向",
        "prop": "feeDirection"
      }, {
        "name": "费用名称",
        "prop": "feeCode"
      }, {
        "name": "费用环节",
        "prop": "feeOccurs"
      }, {
        "name": "商品名称",
        "prop": "productName"
      }, 
      ...mainGoodCols,
      {
        "name": "数量",
        "prop": "quantity"
      }, {
        "name": "含税单价",
        "prop": "includeTaxPrice"
      }, {
        "name": "含税金额",
        "prop": "includeTaxAmount"
      }, {
        "name": "无税单价",
        "prop": "excludeTaxPrice"
      }, {
        "name": "无税金额",
        "prop": "excludeTaxAmount"
      }, {
        "name": "币种",
        "prop": "currencyCode"
      }, {
        "name": "税率",
        "prop": "taxRate"
      }, {
        "name": "税额",
        "prop": "taxAmount"
      }, {
        "name": "进成本",
        "prop": "costFlag"
      }, {
        "name": "进往来",
        "prop": "intercourseFlag"
      }]
    },
    "clauseInfo": {
      "title": "条款信息",
      "api": "/contract/scClauseInfo/listByContractNo",
      "query": "uk",
      "mainColumn": "clauseItem",
      "tableData": [{
        "name": "条款项",
        "prop": "clauseItem"
      }, {
        "name": "条款内容",
        "prop": "clauseContent"
      }]
    }
  },
  // 销售合同变更
  salesContractChangeAudit: {
    api: {
      get: "/contract/sccInfo/get"
    },
    baseInfo: {
      title: "基本信息",
      formData: [
        {
          label: "合同号",
          prop: "contractNo"
        },
        {
          label: "贸易类型",
          prop: "tradeType",
          dict: "tradeType"
        },
        {
          label: "合同类型",
          prop: "contractType",
          dict: "contractType"
        },
        {
          label: "变更号",
          prop: "changeNo"
        },
        {
          label: "抬头",
          prop: "headlineNames"
        },
        {
          label: "签订日期",
          prop: "signDate",
          formate: "date"
        },
        {
          label: "是否保值",
          prop: "isHedging",
          dict: "yesNo"
        },
        {
          label: "客户",
          prop: "customerNames"
        },
        {
          label: "合同文档号",
          prop: "contractDocNo"
        },
        {
          label: "反向合同",
          prop: "isReverse",
          dict: "yesNo"
        },
        {
          label: "有效期（始）",
          prop: "contractLifeStart",
          formate: "date"
        },
        {
          label: "有效期（止）",
          prop: "contractLifeEnd",
          formate: "date"
        },
        {
          label: "机构",
          prop: "bizOrganName"
        },
        {
          label: "部门",
          prop: "bizDeptName"
        },
        {
          label: "业务经理",
          prop: "bizEmployeeName"
        },
        {
          label: "制单人",
          prop: "srcOptEmployeeName"
        },
        {
          label: "制单日期",
          prop: "docMakeDt",
          formate: "date"
        }
      ]
    },
    changeInfo: {
      title: "变更信息",
      formData: [
        {
          label: "变更人",
          prop: "optEmployeeName"
        },
        {
          label: "变更时间",
          prop: "changeDt",
          formate: "date"
        },
        {
          label: "变更状态",
          prop: "auditStatus",
          dict: "auditStatus"
        },
        {
          label: "变更原因",
          prop: "changeReason"
        }
      ]
    },
    businessInfo: {
      title: "交易信息",
      formData: [
        {
          label: "交付方式",
          prop: "deliveryMode",
          dict: "deliveryMode"
        },
        {
          label: "结算方式",
          prop: "settleStyle",
          dict: "tradeWay"
        },
        {
          label: "交货市场",
          prop: "deliveryMarketName"
        },
        {
          label: "交货地点",
          prop: "deliveryPlace"
        },
        {
          label: "交付日期（起）",
          prop: "deliveryDateStart",
          formate: "date"
        },
        {
          label: "交付日期（止）",
          prop: "deliveryDateEnd",
          formate: "date"
        },
        {
          label: "运输方式",
          prop: "transMode",
          dict: "transMode"
        },
        {
          label: "费用承担",
          prop: "costBearing",
          dict: "costBearing"
        },
        {
          label: "溢短装（%）",
          prop: "moreOrLess"
        }
      ]
    },
    financeInfo: {
      title: "财务信息",
      formData: [
        {
          label: "币种",
          prop: "currency",
          dict: "currency"
        },
        {
          label: "汇率",
          prop: "exchangeRate",
          formate: "thousands",
          precision: 2
        },
        {
          label: "原币金额",
          prop: "originalAmount",
          formate: "thousands",
          precision: 2,
          isHide: [{
            value: ["3"],
            key: 'tradeType'
          }]
        },
        {
          label: "本币金额",
          prop: "localAmount",
          formate: "thousands",
          precision: 2,
          isHide: [{
            value: ["3"],
            key: 'tradeType'
          }]
        },
        {
          label: "含税金额",
          prop: "taxedAmount",
          formate: "thousands",
          precision: 2,
          isHide: [{
            value: ["1", "2"],
            key: 'tradeType'
          }]
        },
        {
          label: "不含税金额",
          prop: "taxFreeAmount",
          formate: "thousands",
          precision: 2,
          isHide: [{
            value: ["1", "2"],
            key: 'tradeType'
          }]
        }
      ]
    },
    creditInfo: {
      title: "信用信息",
      formData: [
        {
          label: "是否授信",
          prop: "isCredit",
          dict: "yesNo"
        },
        {
          label: "授信额度",
          prop: "creditLimit",
          formate: "thousands",
          precision: 2
        },
        {
          label: "授信期限（天）",
          prop: "creditDuration",
          formate: "thousands",
          precision: 0
        }
      ]
    },
    promiseInfo: {
      title: "保证金信息",
      formData: [
        {
          label: "保证金比例（%）",
          prop: "marginLevel"
        },
        {
          label: "保证金金额",
          prop: "marginAmount",
          formate: "thousands",
          precision: 2
        }
      ]
    },
    "productInfo": {
      "title": "商品信息",
      "api": "/contract/sccProductDetail/listByChangeNo",
      "query": "uk",
      "mainColumn": "productName",
      "tableData": [{
        "name": "商品名称",
        "prop": "productName"
      },
      ...mainGoodCols,
      ...reserveGoodCols,
      {
        "name": "定价方式",
        "prop": "pricingType",
        "dict": "pricingType"
      }, {
        "name": "价格",
        "prop": "estimatedPrice",
        "formate": "thousands",
        "precision": 2
      }, {
        "name": "升贴水",
        "prop": "premium",
        "formate": "thousands",
        "precision": 2
      }, {
        "name": "商品数量",
        "prop": "productQuantity",
        "formate": "thousands",
        "precision": 3
      }, {
        "name": "商品单位",
        "prop": "productUnitCode",
        "dict": "goodsUnit"
      }, {
        "name": "计量数量",
        "prop": "measurementQuantity",
        "formate": "thousands",
        "precision": 3
      }, {
        "name": "计量单位",
        "prop": "measurementUnitCode",
        "dict": "measurementUnit"
      }, {
        "name": "原币金额",
        "prop": "originalAmount",
        "formate": "thousands",
        "precision": 2,
        isHide: [{
          value: ["3"],
          key: 'tradeType'
        }]
      }, {
        "name": "本币金额",
        "prop": "localAmount",
        "formate": "thousands",
        "precision": 2,
        isHide: [{
          value: ["3"],
          key: 'tradeType'
        }]
      }, {
        "name": "含税金额",
        "prop": "taxedAmount",
        "formate": "thousands",
        "precision": 2,
        isHide: [{
          value: ["1", "2"],
          key: 'tradeType'
        }]
      }, {
        "name": "税率",
        "prop": "taxRate",
        "formate": "thousands",
        "precision": 3,
        isHide: [{
          value: ["1", "2"],
          key: 'tradeType'
        }]
      }, {
        "name": "不含税金额",
        "prop": "taxFreeAmount",
        "formate": "thousands",
        "precision": 2,
        isHide: [{
          value: ["1", "2"],
          key: 'tradeType'
        }]
      }, {
        "name": "税额",
        "prop": "taxAmount",
        "formate": "thousands",
        "precision": 2,
        isHide: [{
          value: ["1", "2"],
          key: 'tradeType'
        }]
      }]
    },
    "pricingInfo": {
      "title": "定价信息",
      "api": "/pricingRuleChange/listByContractChange",
      "query": {
        "contractNo": "uk",
        "changeNo": "changeNo"
      },
      "params": {
        "purchaseOrSale": "S"
      },
      "mainColumn": "productName",
      "tableData": [{
        "name": "合同号",
        "prop": "contractCode"
      }, {
        "name": "商品名称",
        "prop": "productName"
      }, {
        "name": "定价方式",
        "prop": "pricingType",
        "dict": "pricingType"
      }, {
        "name": "定价数量",
        "prop": "pricingQuantity",
        "formate": "thousands",
        "precision": 3
      }, {
        "name": "计量单位",
        "prop": "valueUnit",
        "dict": "measurementUnit"
      }, {
        "name": "说明",
        "prop": "note"
      }, {
        "name": "定价基准",
        "prop": "pricingBenchmark",
        "selectData": {
          type: 'DD_PRICE_ITEM'
        }
      }, {
        "name": "锚定日",
        "prop": "baseDate",
        "dict": "baseDate"
      }, {
        "name": "定价期",
        "prop": "pricingPeriod",
        "dict": "pricingPeriod"
      }, {
        "name": "期始月份",
        "prop": "monthBegin",
        "dict": "pricingMonth"
      }, {
        "name": "期始日期",
        "prop": "dayBegin"
      }, {
        "name": "期止月份",
        "prop": "monthEnd",
        "dict": "pricingMonth"
      }, {
        "name": "期止日期",
        "prop": "dayEnd"
      }, {
        "name": "往前几日",
        "prop": "dayBefore"
      }, {
        "name": "往后几日",
        "prop": "dayAfter"
      }, {
        "name": "定价日期始",
        "prop": "pricingTimeStart",
        "formate": "date"
      }, {
        "name": "定价日期止",
        "prop": "pricingTimeEnd",
        "formate": "date"
      }, {
        "name": "每次最小数量",
        "prop": "minQuantity",
        "formate": "thousands",
        "precision": 3
      }, {
        "name": "每次最大数量",
        "prop": "maxQuantity",
        "formate": "thousands",
        "precision": 3
      }, {
        "name": "点价权",
        "prop": "pricingRight",
        "dict": "pricingRight"
      }, {
        "name": "买方比例(%)",
        "prop": "ourRightLevel"
      }, {
        "name": "卖方比例(%)",
        "prop": "otherRightLevel"
      }, {
        "name": "处理方式",
        "prop": "overdueMode",
        "dict": "overdueMode"
      }, {
        "name": "递延周期",
        "prop": "deferCycleMode",
        "dict": "deferCycleMode"
      }, {
        "name": "递延费",
        "prop": "deferFee",
        "formate": "thousands",
        "precision": 2
      }, {
        "name": "定价方式",
        "prop": "overduePricingType",
        "dict": "overduePricingType"
      }, {
        "name": "定价说明",
        "prop": "overduePricingNote"
      }, {
        "name": "升贴水",
        "prop": "premium",
        "formate": "thousands",
        "precision": 2
      }]
    },
    "deliveryPlan": {
      "title": "交付计划",
      "api": "/contract/sccDeliveryPlan/listByChangeNo",
      "query": "uk",
      "mainColumn": "productName",
      "tableData": [{
        "name": "交付日期（起）",
        "prop": "deliveryDateStart",
        "formate": "date"
      }, {
        "name": "交付日期（止）",
        "prop": "deliveryDateEnd",
        "formate": "date"
      }, {
        "name": "商品名称",
        "prop": "productName"
      },
      ...mainGoodCols,
      {
        "name": "商品数量",
        "prop": "productQuantity",
        "formate": "thousands",
        "precision": 3
      }, {
        "name": "计量数量",
        "prop": "measurementQuantity",
        "formate": "thousands",
        "precision": 3
      }, {
        "name": "升贴水",
        "prop": "premium",
        "formate": "thousands",
        "precision": 2
      }]
    },
    "relatedPc": {
      "title": "关联采购",
      "api": "/contract/sccRelatedPc/listByChangeNo",
      "query": "uk",
      "mainColumn": "relatedContractNo",
      "tableData": [{
        "name": "合同号",
        "prop": "relatedContractNo"
      }, {
        "name": "商品名称",
        "prop": "productName"
      },
      ...mainGoodCols,
      {
        "name": "商品数量",
        "prop": "productQuantity",
        "formate": "thousands",
        "precision": 3
      }, {
        "name": "计量数量",
        "prop": "measurementQuantity",
        "formate": "thousands",
        "precision": 3
      }]
    },
    "paymentInfo": {
      "title": "付款信息",
      "api": "/contract/sccPaymentInfo/listByChangeNo",
      "query": "uk",
      "mainColumn": "paymentType",
      "mainColumnDict": "settlementType",
      "tableData": [{
        "name": "付款方式",
        "prop": "paymentType",
        "dict": "settlementType"
      }, {
        "name": "远期天数",
        "prop": "forwardDays",
        "formate": "thousands",
        "precision": 0
      }, {
        "name": "付款比例（%）",
        "prop": "paymentLevel"
      }]
    },
    "estimatedCostList": {
      "title": "预估费用",
      "api": "/contract/sccEstimatedCost/listByChangeNo",
      "query": "uk",
      "mainColumn": "productName",
      "tableData": [{
        "name": "结算单位",
        "prop": "settlementCode"
      }, {
        "name": "费用方向",
        "prop": "feeDirection"
      }, {
        "name": "费用名称",
        "prop": "feeCode"
      }, {
        "name": "费用环节",
        "prop": "feeOccurs"
      }, {
        "name": "商品名称",
        "prop": "productName"
      }, 
      ...mainGoodCols,
      {
        "name": "数量",
        "prop": "quantity"
      }, {
        "name": "含税单价",
        "prop": "includeTaxPrice"
      }, {
        "name": "含税金额",
        "prop": "includeTaxAmount"
      }, {
        "name": "无税单价",
        "prop": "excludeTaxPrice"
      }, {
        "name": "无税金额",
        "prop": "excludeTaxAmount"
      }, {
        "name": "币种",
        "prop": "currencyCode"
      }, {
        "name": "税率",
        "prop": "taxRate"
      }, {
        "name": "税额",
        "prop": "taxAmount"
      }, {
        "name": "进成本",
        "prop": "costFlag"
      }, {
        "name": "进往来",
        "prop": "intercourseFlag"
      }]
    },
    "clauseInfo": {
      "title": "条款信息",
      "api": "/contract/sccClauseInfo/listByChangeNo",
      "query": "uk",
      "mainColumn": "clauseItem",
      "tableData": [{
        "name": "条款项",
        "prop": "clauseItem"
      }, {
        "name": "条款内容",
        "prop": "clauseContent"
      }]
    }
  },
  // 销售批次
  salesLotAudit: {
    api: {
      get: "/contract/slInfo/get"
    },
    baseInfo: {
      title: "基本信息",
      formData: [
        {
          label: "合同号",
          prop: "contractNo"
        },
        {
          label: "贸易类型",
          prop: "tradeType",
          dict: "tradeType"
        },
        {
          label: "签订日期",
          prop: "signDate",
          formate: "date"
        },
        {
          label: "批次状态",
          prop: "auditStatus",
          dict: "contractStat"
        },
        {
          label: "批次号",
          prop: "lotNo"
        },
        {
          label: "合同类型",
          prop: "contractType",
          dict: "contractType"
        },
        {
          label: "有效期（始）",
          prop: "lotLifeStart",
          formate: "date"
        },
        {
          label: "有效期（止）",
          prop: "lotLifeEnd",
          formate: "date"
        },
        {
          label: "机构",
          prop: "bizOrganName"
        },
        {
          label: "抬头",
          prop: "headlineNames"
        },
        {
          label: "部门",
          prop: "bizDeptName"
        },
        {
          label: "业务经理",
          prop: "bizEmployeeName"
        },
        {
          label: "客户",
          prop: "customerNames"
        },
        {
          label: "制单人",
          prop: "optEmployeeName"
        },
        {
          label: "制单日期",
          prop: "docMakeDt",
          formate: "date"
        }
      ]
    },
    businessInfo: {
      title: "交易信息",
      formData: [
        {
          label: "交付方式",
          prop: "deliveryMode",
          dict: "deliveryMode"
        },
        {
          label: "结算方式",
          prop: "settleStyle",
          dict: "tradeWay"
        },
        {
          label: "交货市场",
          prop: "deliveryMarketName"
        },
        {
          label: "交货地点",
          prop: "deliveryPlace"
        },
        {
          label: "交付日期（起）",
          prop: "deliveryDateStart",
          formate: "date"
        },
        {
          label: "交付日期（止）",
          prop: "deliveryDateEnd",
          formate: "date"
        },
        {
          label: "运输方式",
          prop: "transMode",
          dict: "transMode"
        },
        {
          label: "费用承担",
          prop: "costBearing",
          dict: "costBearing"
        },
        {
          label: "溢短装（%）",
          prop: "moreOrLess"
        }
      ]
    },
    financeInfo: {
      title: "财务信息",
      formData: [
        {
          label: "币种",
          prop: "currency",
          dict: "currency"
        },
        {
          label: "汇率",
          prop: "exchangeRate",
          formate: "thousands",
          precision: 2
        },
        {
          label: "原币金额",
          prop: "originalAmount",
          formate: "thousands",
          precision: 2,
          isHide: [{
            value: ["3"],
            key: 'tradeType'
          }]
        },
        {
          label: "本币金额",
          prop: "localAmount",
          formate: "thousands",
          precision: 2,
          isHide: [{
            value: ["3"],
            key: 'tradeType'
          }]
        },
        {
          label: "含税金额",
          prop: "taxedAmount",
          formate: "thousands",
          precision: 2,
          isHide: [{
            value: ["1", "2"],
            key: 'tradeType'
          }]
        },
        {
          label: "不含税金额",
          prop: "taxFreeAmount",
          formate: "thousands",
          precision: 2,
          isHide: [{
            value: ["1", "2"],
            key: 'tradeType'
          }]
        }
      ]
    },
    creditInfo: {
      title: "信用信息",
      formData: [
        {
          label: "是否授信",
          prop: "isCredit",
          dict: "yesNo"
        },
        {
          label: "授信额度",
          prop: "creditLimit",
          formate: "thousands",
          precision: 2
        },
        {
          label: "授信期限（天）",
          prop: "creditDuration",
          formate: "thousands",
          precision: 0
        }
      ]
    },
    promiseInfo: {
      title: "保证金信息",
      formData: [
        {
          label: "保证金比例（%）",
          prop: "marginLevel"
        },
        {
          label: "保证金金额",
          prop: "marginAmount",
          formate: "thousands",
          precision: 2
        }
      ]
    },
    "productInfo": {
      "title": "商品信息",
      "api": "/contract/slProductDetail/listByLotNo",
      "query": "uk",
      "mainColumn": "productName",
      "tableData": [{
        "name": "商品名称",
        "prop": "productName"
      },
      ...mainGoodCols,
      ...reserveGoodCols,
      {
        "name": "定价方式",
        "prop": "pricingType",
        "dict": "pricingType"
      }, {
        "name": "价格",
        "prop": "estimatedPrice",
        "formate": "thousands",
        "precision": 2
      }, {
        "name": "升贴水",
        "prop": "premium",
        "formate": "thousands",
        "precision": 2
      }, {
        "name": "商品数量",
        "prop": "productQuantity",
        "formate": "thousands",
        "precision": 3
      }, {
        "name": "商品单位",
        "prop": "productUnitCode",
        "dict": "goodsUnit"
      }, {
        "name": "计量数量",
        "prop": "measurementQuantity",
        "formate": "thousands",
        "precision": 3
      }, {
        "name": "计量单位",
        "prop": "measurementUnitCode",
        "dict": "measurementUnit"
      }, {
        "name": "原币金额",
        "prop": "originalAmount",
        "formate": "thousands",
        "precision": 2,
        isHide: [{
          value: ["3"],
          key: 'tradeType'
        }]
      }, {
        "name": "本币金额",
        "prop": "localAmount",
        "formate": "thousands",
        "precision": 2,
        isHide: [{
          value: ["3"],
          key: 'tradeType'
        }]
      }, {
        "name": "含税金额",
        "prop": "taxedAmount",
        "formate": "thousands",
        "precision": 2,
        isHide: [{
          value: ["1", "2"],
          key: 'tradeType'
        }]
      }, {
        "name": "税率",
        "prop": "taxRate",
        "formate": "thousands",
        "precision": 3,
        isHide: [{
          value: ["1", "2"],
          key: 'tradeType'
        }]
      }, {
        "name": "不含税金额",
        "prop": "taxFreeAmount",
        "formate": "thousands",
        "precision": 2,
        isHide: [{
          value: ["1", "2"],
          key: 'tradeType'
        }]
      }, {
        "name": "税额",
        "prop": "taxAmount",
        "formate": "thousands",
        "precision": 2,
        isHide: [{
          value: ["1", "2"],
          key: 'tradeType'
        }]
      }]
    },
    "paymentInfo": {
      "title": "付款信息",
      "api": "/contract/slPaymentInfo/listByLotNo",
      "query": "uk",
      "mainColumn": "paymentType",
      "mainColumnDict": "settlementType",
      "tableData": [{
        "name": "付款方式",
        "prop": "paymentType",
        "dict": "settlementType"
      }, {
        "name": "远期天数",
        "prop": "forwardDays",
        "formate": "thousands",
        "precision": 0
      }, {
        "name": "付款比例（%）",
        "prop": "paymentLevel"
      }]
    },
    "estimatedCostList": {
      "title": "预估费用",
      "api": "/contract/slEstimatedCost/listByLotNo",
      "query": "uk",
      "mainColumn": "productName",
      "tableData": [{
        "name": "结算单位",
        "prop": "settlementCode"
      }, {
        "name": "费用方向",
        "prop": "feeDirection"
      }, {
        "name": "费用名称",
        "prop": "feeCode"
      }, {
        "name": "费用环节",
        "prop": "feeOccurs"
      }, {
        "name": "商品名称",
        "prop": "productName"
      }, 
      ...mainGoodCols,
      {
        "name": "数量",
        "prop": "quantity"
      }, {
        "name": "含税单价",
        "prop": "includeTaxPrice"
      }, {
        "name": "含税金额",
        "prop": "includeTaxAmount"
      }, {
        "name": "无税单价",
        "prop": "excludeTaxPrice"
      }, {
        "name": "无税金额",
        "prop": "excludeTaxAmount"
      }, {
        "name": "币种",
        "prop": "currencyCode"
      }, {
        "name": "税率",
        "prop": "taxRate"
      }, {
        "name": "税额",
        "prop": "taxAmount"
      }, {
        "name": "进成本",
        "prop": "costFlag"
      }, {
        "name": "进往来",
        "prop": "intercourseFlag"
      }]
    }
  },
  // 销售批次变更
  salesLotChangeAudit: {
    api: {
      get: "/contract/slcInfo/get"
    },
    baseInfo: {
      title: "基本信息",
      formData: [
        {
          label: "合同号",
          prop: "contractNo"
        },
        {
          label: "贸易类型",
          prop: "tradeType",
          dict: "tradeType"
        },
        {
          label: "签订日期",
          prop: "signDate",
          formate: "date"
        },
        {
          label: "变更号",
          prop: "changeNo"
        },
        {
          label: "批次号",
          prop: "lotNo"
        },
        {
          label: "合同类型",
          prop: "contractType",
          dict: "contractType"
        },
        {
          label: "有效期（始）",
          prop: "lotLifeStart",
          formate: "date"
        },
        {
          label: "有效期（止）",
          prop: "lotLifeEnd",
          formate: "date"
        },
        {
          label: "机构",
          prop: "bizOrganName"
        },
        {
          label: "抬头",
          prop: "headlineNames"
        },
        {
          label: "部门",
          prop: "bizDeptName"
        },
        {
          label: "业务经理",
          prop: "bizEmployeeName"
        },
        {
          label: "客户",
          prop: "customerNames"
        },
        {
          label: "制单人",
          prop: "srcOptEmployeeName"
        },
        {
          label: "制单日期",
          prop: "docMakeDt",
          formate: "date"
        }
      ]
    },
    changeInfo: {
      title: "变更信息",
      formData: [
        {
          label: "变更人",
          prop: "optEmployeeName"
        },
        {
          label: "变更时间",
          prop: "changeDt",
          formate: "date"
        },
        {
          label: "变更状态",
          prop: "auditStatus",
          dict: "auditStatus"
        },
        {
          label: "变更原因",
          prop: "changeReason"
        }
      ]
    },
    businessInfo: {
      title: "交易信息",
      formData: [
        {
          label: "交付方式",
          prop: "deliveryMode",
          dict: "deliveryMode"
        },
        {
          label: "结算方式",
          prop: "settleStyle",
          dict: "tradeWay"
        },
        {
          label: "交货市场",
          prop: "deliveryMarketName"
        },
        {
          label: "交货地点",
          prop: "deliveryPlace"
        },
        {
          label: "交付日期（起）",
          prop: "deliveryDateStart",
          formate: "date"
        },
        {
          label: "交付日期（止）",
          prop: "deliveryDateEnd",
          formate: "date"
        },
        {
          label: "运输方式",
          prop: "transMode",
          dict: "transMode"
        },
        {
          label: "费用承担",
          prop: "costBearing",
          dict: "costBearing"
        },
        {
          label: "溢短装（%）",
          prop: "moreOrLess"
        }
      ]
    },
    financeInfo: {
      title: "财务信息",
      formData: [
        {
          label: "币种",
          prop: "currency",
          dict: "currency"
        },
        {
          label: "汇率",
          prop: "exchangeRate",
          formate: "thousands",
          precision: 2
        },
        {
          label: "原币金额",
          prop: "originalAmount",
          formate: "thousands",
          precision: 2,
          isHide: [{
            value: ["3"],
            key: 'tradeType'
          }]
        },
        {
          label: "本币金额",
          prop: "localAmount",
          formate: "thousands",
          precision: 2,
          isHide: [{
            value: ["3"],
            key: 'tradeType'
          }]
        },
        {
          label: "含税金额",
          prop: "taxedAmount",
          formate: "thousands",
          precision: 2,
          isHide: [{
            value: ["1", "2"],
            key: 'tradeType'
          }]
        },
        {
          label: "不含税金额",
          prop: "taxFreeAmount",
          formate: "thousands",
          precision: 2,
          isHide: [{
            value: ["1", "2"],
            key: 'tradeType'
          }]
        }
      ]
    },
    creditInfo: {
      title: "信用信息",
      formData: [
        {
          label: "是否授信",
          prop: "isCredit",
          dict: "yesNo"
        },
        {
          label: "授信额度",
          prop: "creditLimit",
          formate: "thousands",
          precision: 2
        },
        {
          label: "授信期限（天）",
          prop: "creditDuration",
          formate: "thousands",
          precision: 0
        }
      ]
    },
    promiseInfo: {
      title: "保证金信息",
      formData: [
        {
          label: "保证金比例（%）",
          prop: "marginLevel"
        },
        {
          label: "保证金金额",
          prop: "marginAmount",
          formate: "thousands",
          precision: 2
        }
      ]
    },
    "productInfo": {
      "title": "商品信息",
      "api": "/contract/slcProductDetail/listByChangeNo",
      "query": "uk",
      "mainColumn": "productName",
      "tableData": [{
        "name": "商品名称",
        "prop": "productName"
      },
      ...mainGoodCols,
      ...reserveGoodCols,
      {
        "name": "定价方式",
        "prop": "pricingType",
        "dict": "pricingType"
      }, {
        "name": "价格",
        "prop": "estimatedPrice",
        "formate": "thousands",
        "precision": 2
      }, {
        "name": "升贴水",
        "prop": "premium",
        "formate": "thousands",
        "precision": 2
      }, {
        "name": "商品数量",
        "prop": "productQuantity",
        "formate": "thousands",
        "precision": 3
      }, {
        "name": "商品单位",
        "prop": "productUnitCode",
        "dict": "goodsUnit"
      }, {
        "name": "计量数量",
        "prop": "measurementQuantity",
        "formate": "thousands",
        "precision": 3
      }, {
        "name": "计量单位",
        "prop": "measurementUnitCode",
        "dict": "measurementUnit"
      }, {
        "name": "原币金额",
        "prop": "originalAmount",
        "formate": "thousands",
        "precision": 2,
        isHide: [{
          value: ["3"],
          key: 'tradeType'
        }]
      }, {
        "name": "本币金额",
        "prop": "localAmount",
        "formate": "thousands",
        "precision": 2,
        isHide: [{
          value: ["3"],
          key: 'tradeType'
        }]
      }, {
        "name": "含税金额",
        "prop": "taxedAmount",
        "formate": "thousands",
        "precision": 2,
        isHide: [{
          value: ["1", "2"],
          key: 'tradeType'
        }]
      }, {
        "name": "税率",
        "prop": "taxRate",
        "formate": "thousands",
        "precision": 3,
        isHide: [{
          value: ["1", "2"],
          key: 'tradeType'
        }]
      }, {
        "name": "不含税金额",
        "prop": "taxFreeAmount",
        "formate": "thousands",
        "precision": 2,
        isHide: [{
          value: ["1", "2"],
          key: 'tradeType'
        }]
      }, {
        "name": "税额",
        "prop": "taxAmount",
        "formate": "thousands",
        "precision": 2,
        isHide: [{
          value: ["1", "2"],
          key: 'tradeType'
        }]
      }]
    },
    "paymentInfo": {
      "title": "付款信息",
      "api": "/contract/slcPaymentInfo/listByChangeNo",
      "query": "uk",
      "mainColumn": "paymentType",
      "mainColumnDict": "settlementType",
      "tableData": [{
        "name": "付款方式",
        "prop": "paymentType",
        "dict": "settlementType"
      }, {
        "name": "远期天数",
        "prop": "forwardDays",
        "formate": "thousands",
        "precision": 0
      }, {
        "name": "付款比例（%）",
        "prop": "paymentLevel"
      }]
    },
    "estimatedCostList": {
      "title": "预估费用",
      "api": "/contract/slcEstimatedCost/listByChangeNo",
      "query": "uk",
      "mainColumn": "productName",
      "tableData": [{
        "name": "结算单位",
        "prop": "settlementCode"
      }, {
        "name": "费用方向",
        "prop": "feeDirection"
      }, {
        "name": "费用名称",
        "prop": "feeCode"
      }, {
        "name": "费用环节",
        "prop": "feeOccurs"
      }, {
        "name": "商品名称",
        "prop": "productName"
      }, 
      ...mainGoodCols,
      {
        "name": "数量",
        "prop": "quantity"
      }, {
        "name": "含税单价",
        "prop": "includeTaxPrice"
      }, {
        "name": "含税金额",
        "prop": "includeTaxAmount"
      }, {
        "name": "无税单价",
        "prop": "excludeTaxPrice"
      }, {
        "name": "无税金额",
        "prop": "excludeTaxAmount"
      }, {
        "name": "币种",
        "prop": "currencyCode"
      }, {
        "name": "税率",
        "prop": "taxRate"
      }, {
        "name": "税额",
        "prop": "taxAmount"
      }, {
        "name": "进成本",
        "prop": "costFlag"
      }, {
        "name": "进往来",
        "prop": "intercourseFlag"
      }]
    }
  },
  // 定价批次
  pricingLotAudit: {
    api: {
      get: "/pricingLot/getByCode"
    },
    baseInfo: {
      title: "基本信息",
      formData: [
        {
          label: "定价批次号",
          prop: "pricingLotCode"
        },
        {
          label: "合同号",
          prop: "contractCode"
        },
        {
          label: "购销类型",
          prop: "purchaseOrSale",
          dict: "purchaseOrSale"
        },
        {
          label: "币种",
          prop: "currency",
          dict: "currency"
        },
        {
          label: "商品名称",
          prop: "productName"
        },
        {
          label: "定价方式",
          prop: "pricingType",
          dict: "pricingType"
        },
        {
          label: "定价基准",
          prop: "pricingItemName"
        },
        {
          label: "定价日期（始）",
          prop: "pricingTimeStart",
          formate: "date"
        },
        {
          label: "定价日期（止）",
          prop: "pricingTimeEnd",
          formate: "date"
        },
        {
          label: "定价数量",
          prop: "pricingQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          label: "计量单位",
          prop: "valueUnit",
          dict: "measurementUnit"
        },
        {
          label: "升贴水",
          prop: "premium",
          formate: "thousands",
          precision: 2
        },
        {
          label: "制单人",
          prop: "docMaker"
        },
        {
          label: "制单日期",
          prop: "docMakeDate",
          formate: "date"
        },
        {
          label: "说明",
          prop: "note"
        }
      ]
    }
  },
  // 定价登记
  pricingRegAudit: {
    api: {
      get: "/pricingInfo/getByCode"
    },
    baseInfo: {
      title: "基本信息",
      formData: [
        {
          label: "定价登记号",
          prop: "pricingCode"
        },
        {
          label: "合同号",
          prop: "contractCode"
        },
        {
          label: "定价批次号",
          prop: "pricingLotCode"
        },
        {
          label: "购销类型",
          prop: "purchaseOrSale",
          dict: "purchaseOrSale"
        },
        {
          label: "币种",
          prop: "currency",
          dict: "currency"
        },
        {
          label: "商品名称",
          prop: "productName"
        },
        {
          label: "定价方式",
          prop: "pricingType",
          dict: "pricingType"
        },
        {
          label: "定价基准",
          prop: "pricingItemName"
        },
        {
          label: "定价日期",
          prop: "pricingTime",
          formate: "date"
        },
        {
          label: "定价数量",
          prop: "pricingQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          label: "计量单位",
          prop: "valueUnit",
          dict: "measurementUnit"
        },
        {
          label: "价格",
          prop: "price",
          formate: "thousands",
          precision: 2
        },
        {
          label: "制单人",
          prop: "docMaker"
        },
        {
          label: "制单日期",
          prop: "docMakeDate",
          formate: "date"
        },
        {
          label: "说明",
          prop: "note"
        }
      ]
    }
  },
  // 客商管理
  customerSupplierAudit: {
    api: {
      get: "/cust/customer/getByCode"
    },
    mainInfo: {
      title: "主信息",
      formData: [
        {
          label: "客商编号",
          prop: "custCode"
        },
        {
          label: "客商名称",
          prop: "custName"
        },
        {
          label: "客商全称",
          prop: "custFullnameChs"
        },
        {
          label: "英文全称",
          prop: "custFullnameEn"
        },
        {
          label: "抬头名称",
          prop: "custHeadline"
        },
        {
          label: "所属上级",
          prop: "custParentCode",
          selectData: {
            type: 'CUST_INFO',
            queryParams: {
              usingFlag: '12'
            }
          }
        },
        {
          label: "企业性质",
          prop: "enterpriseTypeCode",
          dict: "enterpriseType"
        },
        {
          label: "企业类型",
          prop: "enterpriseFormCode",
          dict: "enterpriseForm"
        },
        {
          label: "状态",
          prop: "usingFlag",
          dict: "usingFlag"
        },
        {
          label: "是否黑名单",
          prop: "isBlacklist",
          dict: "yesNo"
        },
        {
          label: "类型",
          prop: "typeCodeList",
          dict: "custcsType"
        },
        {
          label: "贸易品种",
          prop: "productType"
        },
        {
          label: "采购交易方式",
          prop: "buytradeCode",
          dict: "tradeWay"
        },
        {
          label: "销售交易方式",
          prop: "saletradeCode",
          dict: "tradeWay"
        },
        {
          label: "交易币种",
          prop: "currency",
          dict: "currency"
        },
        {
          label: "信用等级",
          prop: "creditRating",
          dict: "creditRating"
        },
        {
          label: "合作形式",
          prop: "coopMode"
        }
      ]
    },
    subInfo: {
      title: "副信息",
      formData: [
        {
          label: "所属地区",
          prop: "areaCode",
          selectData: {
            type: "DD_AREA",
            queryParams: {
              treeFlag: "0"
            }
          }
        },
        {
          label: "通讯地址",
          prop: "address"
        },
        {
          label: "法人姓名",
          prop: "legalName"
        },
        {
          label: "注册资本（万元）",
          prop: "registCapital",
          formate: "thousands",
          precision: 3
        },
        {
          label: "办公地址",
          prop: "officeAddress"
        },
        {
          label: "企业规模",
          prop: "businessScale",
          dict: "businessScale"
        },
        {
          label: "企业人数",
          prop: "employees",
          formate: "thousands"
        },
        {
          label: "成立时间",
          prop: "foundTime",
          formate: 'date'
        },
        {
          label: "经营范围",
          prop: "scopeBusiness"
        },
      ]
    },
    "cardInfo": {
      "title": "证件信息",
      "api": "/cust/cardInfo/getByCode",
      "query": "uk",
      "mainColumn": "cardNo",
      "tableData": [{
        "name": "证件类型",
        "prop": "cardType",
        "dict": "cardType"
      }, {
        "name": "证件编号",
        "prop": "cardNo"
      }, {
        "name": "注册日期",
        "prop": "registDate",
        "formate": "date"
      }, {
        "name": "失效日期",
        "prop": "expiryDate",
        "formate": "date"
      }, {
        "name": "注册地址",
        "prop": "registAddress"
      }]
    },
    "contactInfo": {
      "title": "联系人信息",
      "api": "/cust/contacts/getByCode",
      "query": "uk",
      "mainColumn": "name",
      "tableData": [{
        "name": "姓名",
        "prop": "name"
      }, {
        "name": "手机",
        "prop": "mobilePhone"
      }, {
        "name": "电话",
        "prop": "phone"
      }, {
        "name": "职位",
        "prop": "position"
      }, {
        "name": "传真",
        "prop": "fax"
      }, {
        "name": "邮箱",
        "prop": "mail"
      }, {
        "name": "备注",
        "prop": "remark"
      }]
    },
    "bankInfo": {
      "title": "银行账户信息",
      "api": "/cust/bankInfo/getByCode",
      "query": "uk",
      "mainColumn": "bankAccountNo",
      "tableData": [{
        "name": "开户行",
        "prop": "bankCode",
        "selectData": {
          "type": "DD_BANK"
        }
      }, {
        "name": "账号",
        "prop": "bankAccountNo"
      }]
    },
    "stackHoldInfo": {
      "title": "股权信息",
      "api": "/cust/stackHold/getByCode",
      "query": "uk",
      "mainColumn": "shareholder",
      "tableData": [{
        "name": "股东",
        "prop": "shareholder"
      }, {
        "name": "出资额（万元）",
        "prop": "amount",
        "formate": "thousands",
        "precision": 3
      }, {
        "name": "持股比例（%）",
        "prop": "shareholdSituation",
        "formate": "thousands",
        "precision": 2
      }, {
        "name": "联系方式",
        "prop": "contactsInfo"
      }]
    },
    "billInfo": {
      "title": "开票信息",
      "api": "/cust/billInfo/getByCode",
      "query": "uk",
      "mainColumn": "taxNo",
      "tableData": [{
        "name": "纳税识别号",
        "prop": "taxNo"
      }, {
        "name": "开户行",
        "prop": "bank"
      }, {
        "name": "账号",
        "prop": "account"
      }, {
        "name": "通讯地址",
        "prop": "address"
      }, {
        "name": "电话",
        "prop": "phone"
      }]
    }
  },
  // 客商授信
  custCreditCsAudit: {
    api: {
      get: "/cust/credit/get"
    },
    mainInfo: {
      title: "主信息",
      formData: [
        {
          label: "客户名称",
          prop: "custName"
        },
        {
          label: "授信类型",
          prop: "creditType",
          dict: "creditType"
        },
        {
          label: "额度类型",
          prop: "creditQuotaType",
          dict: "creditQuotaType"
        },
        {
          label: "客户抬头",
          prop: "custHeadline"
        },
        {
          label: "授信额度",
          prop: "creditQuota",
          formate: "thousands",
          precision: 2
        },
        {
          label: "额度占用（元）",
          prop: "usedAmount",
          formate: "thousands",
          precision: 2
        },
        {
          label: "客户类型",
          prop: "typeCode",
          dict: "custType2"
        },
        {
          label: "授信方式",
          prop: "creditWay",
          dict: "creditWay"
        },
        {
          label: "合同限额",
          prop: "limitByContract",
          formate: "thousands",
          precision: 2
        },
        {
          label: "年度限额",
          prop: "limitByYear",
          formate: "thousands",
          precision: 2
        },
        {
          label: "单据类型",
          prop: "docType",
          dict: "custCreditDocType"
        },
        {
          label: "单据号",
          prop: "docNo"
        },
        {
          label: "账期",
          prop: "netDays",
          formate: "thousands",
          precision: 0
        },
        {
          label: "支付方式",
          prop: "payWay",
          dict: "payWay"
        },
        {
          label: "有效期始",
          prop: "dateStart",
          formate: "date"
        },
        {
          label: "有效期止",
          prop: "dateEnd",
          formate: "date"
        },
        {
          label: "审批状态",
          prop: "auditStatus",
          dict: "auditStatus"
        },
        {
          label: "申请人",
          prop: "optEmployeeName"
        },
        {
          label: "申请时间",
          prop: "applyDt"
        },
        {
          label: "备注",
          prop: "remark"
        }
      ]
    }
  },
  // 仓储公司管理
  warehoueCompanyAudit: {
    api: {
      get: "/cust/warehouse/getByCode"
    },
    mainInfo: {
      title: "主信息",
      formData: [
        {
          label: "仓储公司编号",
          prop: "custCode"
        },
        {
          label: "仓储公司名称",
          prop: "custName"
        },
        {
          label: "仓储公司全称",
          prop: "custFullnameChs"
        },
        {
          label: "英文全称",
          prop: "custFullnameEn"
        },
        {
          label: "抬头名称",
          prop: "custHeadline"
        },
        {
          label: "类型",
          prop: "typeCode",
          dict: "custType"
        },
        {
          label: "分类",
          prop: "classifyCode",
          dict: "custClassify"
        },
        {
          label: "企业性质",
          prop: "enterpriseTypeCode",
          dict: "enterpriseType"
        },
        {
          label: "企业类型",
          prop: "enterpriseFormCode",
          dict: "enterpriseForm"
        },
        {
          label: "状态",
          prop: "usingFlag",
          dict: "usingFlag"
        },
        {
          label: "是否黑名单",
          prop: "isBlacklist",
          dict: "yesNo"
        },
        {
          label: "信用等级",
          prop: "creditRating",
          dict: "creditRating"
        },
        {
          label: "许可证登记",
          prop: "licenceCode"
        },
        {
          label: "有效截止日期",
          prop: "licenceDuedate",
          formate: "date"
        }
      ]
    },
    subInfo: {
      title: "副信息",
      formData: [
        {
          label: "所属地区",
          prop: "areaCode",
          selectData: {
            type: "DD_AREA",
            queryParams: {
              treeFlag: "0"
            }
          }
        },
        {
          label: "通讯地址",
          prop: "address"
        },
        {
          label: "法人姓名",
          prop: "legalName"
        },
        {
          label: "注册资本（万元）",
          prop: "registCapital",
          formate: "thousands",
          precision: 3
        },
        {
          label: "办公地址",
          prop: "officeAddress"
        },
        {
          label: "企业规模",
          prop: "businessScale",
          dict: "businessScale"
        },
        {
          label: "企业人数",
          prop: "employees",
          formate: "thousands"
        },
        {
          label: "成立时间",
          prop: "foundTime",
          formate: 'date'
        },
        {
          label: "经营范围",
          prop: "scopeBusiness"
        },
      ]
    },
    "cardInfo": {
      "title": "证件信息",
      "api": "/cust/cardInfo/getByCode",
      "query": "uk",
      "mainColumn": "cardNo",
      "tableData": [{
        "name": "证件类型",
        "prop": "cardType",
        "dict": "cardType"
      }, {
        "name": "证件编号",
        "prop": "cardNo"
      }, {
        "name": "注册日期",
        "prop": "registDate",
        "formate": "date"
      }, {
        "name": "失效日期",
        "prop": "expiryDate",
        "formate": "date"
      }, {
        "name": "注册地址",
        "prop": "registAddress"
      }]
    },
    "contactInfo": {
      "title": "联系人信息",
      "api": "/cust/contacts/getByCode",
      "query": "uk",
      "mainColumn": "name",
      "tableData": [{
        "name": "姓名",
        "prop": "name"
      }, {
        "name": "手机",
        "prop": "mobilePhone"
      }, {
        "name": "电话",
        "prop": "phone"
      }, {
        "name": "职位",
        "prop": "position"
      }, {
        "name": "传真",
        "prop": "fax"
      }, {
        "name": "邮箱",
        "prop": "mail"
      }, {
        "name": "备注",
        "prop": "remark"
      }]
    },
    "bankInfo": {
      "title": "银行账户信息",
      "api": "/cust/bankInfo/getByCode",
      "query": "uk",
      "mainColumn": "bankAccountNo",
      "tableData": [{
        "name": "开户行",
        "prop": "bankCode",
        "selectData": {
          "type": "DD_BANK"
        }
      }, {
        "name": "账号",
        "prop": "bankAccountNo"
      }]
    },
    "stackHoldInfo": {
      "title": "股权信息",
      "api": "/cust/stackHold/getByCode",
      "query": "uk",
      "mainColumn": "shareholder",
      "tableData": [{
        "name": "股东",
        "prop": "shareholder"
      }, {
        "name": "出资额（万元）",
        "prop": "amount",
        "formate": "thousands",
        "precision": 3
      }, {
        "name": "持股比例（%）",
        "prop": "shareholdSituation",
        "formate": "thousands",
        "precision": 2
      }, {
        "name": "联系方式",
        "prop": "contactsInfo"
      }]
    },
    "billInfo": {
      "title": "开票信息",
      "api": "/cust/billInfo/getByCode",
      "query": "uk",
      "mainColumn": "taxNo",
      "tableData": [{
        "name": "纳税识别号",
        "prop": "taxNo"
      }, {
        "name": "开户行",
        "prop": "bank"
      }, {
        "name": "账号",
        "prop": "account"
      }, {
        "name": "通讯地址",
        "prop": "address"
      }, {
        "name": "电话",
        "prop": "phone"
      }]
    }
  },
  // 仓储公司授信
  custCreditWhAudit: {
    api: {
      get: "/cust/credit/get"
    },
    mainInfo: {
      title: "主信息",
      formData: [
        {
          label: "仓储公司名称",
          prop: "custName"
        },
        {
          label: "有效期始",
          prop: "dateStart",
          formate: "date"
        },
        {
          label: "有效期止",
          prop: "dateEnd",
          formate: "date"
        },
        {
          label: "审批状态",
          prop: "auditStatus",
          dict: "auditStatus"
        },
        {
          label: "预警金额",
          prop: "warnAmount",
          formate: "thousands",
          precision: 2
        },
        {
          label: "限制金额",
          prop: "limitAmount",
          formate: "thousands",
          precision: 2
        },
        {
          label: "申请人",
          prop: "optEmployeeName"
        },
        {
          label: "申请时间",
          prop: "applyDt"
        }
      ]
    },
    whProductSet: {
      "title": "期货品种设置",
      "api": "/cust/creditWhProduct/listByCustCreditNo",
      "query": "uk",
      "mainColumn": "productName",
      "tableData": [{
        "name": "品种",
        "prop": "productName"
      }, {
        "name": "商品单位",
        "prop": "productUnitCode",
        "dict": "goodsUnit"
      }, {
        "name": "仓库",
        "prop": "warehouseName"
      }, {
        "name": "预警货量",
        "prop": "warnQuantity",
        "formate": "thousands",
        "precision": 3
      }, {
        "name": "限制货量",
        "prop": "limitQuantity",
        "formate": "thousands",
        "precision": 3
      }]
    }
  },
  // 经纪商管理
  brokerAudit: {
    api: {
      get: "/cust/brokers/getByCode"
    },
    mainInfo: {
      title: "主信息",
      formData: [
        {
          label: "经纪商编号",
          prop: "custCode"
        },
        {
          label: "经纪商编码",
          prop: "brokerCode"
        },
        {
          label: "经纪商名称",
          prop: "custName"
        },
        {
          label: "经纪商全称",
          prop: "custFullnameChs"
        },
        {
          label: "英文全称",
          prop: "custFullnameEn"
        },
        {
          label: "抬头名称",
          prop: "custHeadline"
        },
        {
          label: "类型",
          prop: "typeCode",
          dict: "custType"
        },
        {
          label: "企业性质",
          prop: "enterpriseTypeCode",
          dict: "enterpriseType"
        },
        {
          label: "企业类型",
          prop: "enterpriseFormCode",
          dict: "enterpriseForm"
        },
        {
          label: "状态",
          prop: "usingFlag",
          dict: "usingFlag"
        },
        {
          label: "是否黑名单",
          prop: "isBlacklist",
          dict: "yesNo"
        },
        {
          label: "许可证登记",
          prop: "licenceCode"
        },
        {
          label: "有效截止日期",
          prop: "licenceDuedate",
          formate: "date"
        },
        {
          label: "信用等级",
          prop: "creditRating",
          dict: "creditRating"
        }
      ]
    },
    subInfo: {
      title: "副信息",
      formData: [
        {
          label: "所属地区",
          prop: "areaCode",
          selectData: {
            type: "DD_AREA",
            treeFlag: "0"
          }
        },
        {
          label: "通讯地址",
          prop: "address"
        },
        {
          label: "法人姓名",
          prop: "legalName"
        },
        {
          label: "注册资本（万元）",
          prop: "registCapital",
          formate: "thousands",
          precision: 3
        },
        {
          label: "办公地址",
          prop: "officeAddress"
        },
        {
          label: "企业规模",
          prop: "businessScale",
          dict: "businessScale"
        },
        {
          label: "企业人数",
          prop: "employees",
          formate: "thousands"
        },
        {
          label: "成立时间",
          prop: "foundTime",
          formate: 'date'
        },
        {
          label: "经营范围",
          prop: "scopeBusiness"
        },
      ]
    },
    "cardInfo": {
      "title": "证件信息",
      "api": "/cust/cardInfo/getByCode",
      "query": "uk",
      "mainColumn": "cardNo",
      "tableData": [{
        "name": "证件类型",
        "prop": "cardType",
        "dict": "cardType"
      }, {
        "name": "证件编号",
        "prop": "cardNo"
      }, {
        "name": "注册日期",
        "prop": "registDate",
        "formate": "date"
      }, {
        "name": "失效日期",
        "prop": "expiryDate",
        "formate": "date"
      }, {
        "name": "注册地址",
        "prop": "registAddress"
      }]
    },
    "contactInfo": {
      "title": "联系人信息",
      "api": "/cust/contacts/getByCode",
      "query": "uk",
      "mainColumn": "name",
      "tableData": [{
        "name": "姓名",
        "prop": "name"
      }, {
        "name": "手机",
        "prop": "mobilePhone"
      }, {
        "name": "电话",
        "prop": "phone"
      }, {
        "name": "职位",
        "prop": "position"
      }, {
        "name": "传真",
        "prop": "fax"
      }, {
        "name": "邮箱",
        "prop": "mail"
      }, {
        "name": "备注",
        "prop": "remark"
      }]
    },
    "bankInfo": {
      "title": "银行账户信息",
      "api": "/cust/bankInfo/getByCode",
      "query": "uk",
      "mainColumn": "bankAccountNo",
      "tableData": [{
        "name": "开户行",
        "prop": "bankCode",
        "selectData": {
          "type": "DD_BANK"
        }
      }, {
        "name": "账号",
        "prop": "bankAccountNo"
      }]
    },
    "stackHoldInfo": {
      "title": "股权信息",
      "api": "/cust/stackHold/getByCode",
      "query": "uk",
      "mainColumn": "shareholder",
      "tableData": [{
        "name": "股东",
        "prop": "shareholder"
      }, {
        "name": "出资额（万元）",
        "prop": "amount",
        "formate": "thousands",
        "precision": 3
      }, {
        "name": "持股比例（%）",
        "prop": "shareholdSituation",
        "formate": "thousands",
        "precision": 2
      }, {
        "name": "联系方式",
        "prop": "contactsInfo"
      }]
    },
    "billInfo": {
      "title": "开票信息",
      "api": "/cust/billInfo/getByCode",
      "query": "uk",
      "mainColumn": "taxNo",
      "tableData": [{
        "name": "纳税识别号",
        "prop": "taxNo"
      }, {
        "name": "开户行",
        "prop": "bank"
      }, {
        "name": "账号",
        "prop": "account"
      }, {
        "name": "通讯地址",
        "prop": "address"
      }, {
        "name": "电话",
        "prop": "phone"
      }]
    }
  },
  // 经纪商授信
  custCreditBrAudit: {
    api: {
      get: "/cust/credit/get"
    },
    mainInfo: {
      title: "主信息",
      formData: [
        {
          label: "经纪商名称",
          prop: "custName"
        },
        {
          label: "有效期始",
          prop: "dateStart",
          formate: "date"
        },
        {
          label: "有效期止",
          prop: "dateEnd",
          formate: "date"
        },
        {
          label: "审批状态",
          prop: "auditStatus",
          dict: "auditStatus"
        },
        {
          label: "预警金额",
          prop: "warnAmount",
          formate: "thousands",
          precision: 2
        },
        {
          label: "限制金额",
          prop: "limitAmount",
          formate: "thousands",
          precision: 2
        },
        {
          label: "申请人",
          prop: "optEmployeeName"
        },
        {
          label: "申请时间",
          prop: "applyDt"
        }
      ]
    },
    whProductSet: {
      "title": "期货品种设置",
      "api": "/cust/creditBrProduct/listByCustCreditNo",
      "query": "uk",
      "mainColumn": "futureProducName",
      "tableData": [{
        "name": "期货品种名称",
        "prop": "futureProducName"
      }, {
        "name": "期货品种代码",
        "prop": "futureProducCode"
      }, {
        "name": "方向",
        "prop": "direction",
        "dict": "dvtPosiDirection"
      }, {
        "name": "预警手数",
        "prop": "warnVal",
        "formate": "thousands",
        "precision": 2
      }, {
        "name": "限制手数",
        "prop": "limitVal",
        "formate": "thousands",
        "precision": 2
      }]
    }
  }
};
