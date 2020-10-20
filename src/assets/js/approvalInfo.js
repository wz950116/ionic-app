import mainGoodCols from "./mainGoodCols";
import reserveGoodCols from "./reserveGoodCols";

export default {
  // 付款申请
  fundApplyAudit: {
    api: {
      get: "/fund/apply/getByNo"
    },
    baseInfo: {
      title: "基本信息",
      formData: [
        {
          label: "单据号",
          prop: "applyNo"
        },
        {
          label: "申请日期",
          prop: "applyDate",
          formate: "date"
        },
        {
          label: "客户",
          prop: "customerNo",
          selectData: {
            type: "CUST_INFO",
            params: {
              usingFlag: "1",
              auditStatus: "3"
            }
          }
        },
        {
          label: "申请类型",
          prop: "applyType",
          dict: "fundApplyType"
        },
        {
          label: "业务类别",
          prop: "businessType",
          dict: "fundApplyBusinessType"
        },
        {
          label: "申请金额",
          prop: "applyAmount",
          formate: "thousands",
          precision: 2
        },
        {
          label: "币种",
          prop: "currency",
          dict: "currency"
        },
        {
          label: "付款方式",
          prop: "paymentTypeList",
          dict: "settlementType"
        },

        {
          label: "最迟付款日期",
          prop: "latestPaymentDate",
          formate: "date"
        },
        {
          label: "业务机构",
          prop: "bizOrganCode",
          selectData: {
            type: "FUNC_ORG"
          }
        },
        {
          label: "业务部门",
          prop: "bizDeptCode",
          selectData: {
            type: "FUNC_DEPT"
          }
        },
        {
          label: "申请人",
          prop: "bizEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "制单人",
          prop: "optEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          name: "备注",
          prop: "remark"
        }
      ]
    },
    fundApplyDetailDtoList: {
      title: "付款申请详细信息",
      api: "/fund/applyDetail/listByApplyNo",
      mainColumn: "lotNo",
      query: "uk",
      tableData: [
        {
          name: "合同号",
          prop: "contractNo"
        },
        {
          name: "批次号",
          prop: "lotNo"
        },
        {
          name: "批次类型",
          prop: "lotType",
          dict: "bizCode"
        },
        {
          name: "资金用途",
          prop: "fundUseType",
          dict: "fundUseType"
        },
        {
          name: "商品",
          prop: "productName"
        },
        ...mainGoodCols,
        {
          name: "申请金额",
          prop: "applyAmount",
          formate: "thousands",
          precision: 2
        },
        {
          name: "备注",
          prop: "remark"
        }
      ]
    },
    fundApplyPaymentDtoList: {
      title: "付款方式信息",
      api: "/fund/applyPayment/listByApplyNo",
      mainColumn: "paymentType",
      mainColumnDict: "settlementType",
      query: "uk",
      tableData: [
        {
          name: "付款方式",
          prop: "paymentType",
          dict: "settlementType"
        },
        {
          name: "付款比例",
          prop: "paymentRate",
          formate: "thousands",
          precision: 3
        },
        {
          name: "付款金额",
          prop: "applyAmount",
          formate: "thousands",
          precision: 2
        },
        {
          name: "备注",
          prop: "remark"
        }
      ]
    }
  },
  // 付款确认
  fundConfirmAudit: {
    api: {
      get: "/fund/confirm/getByNo"
    },
    editPart1: {
      title: "付款确认信息",
      formData: [
        {
          label: "单据号",
          prop: "confirmNo"
        },
        {
          label: "付款日期",
          prop: "paymentDate",
          formate: "date"
        },
        {
          label: "客户",
          prop: "customerNo",
          selectData: {
            type: "CUST_INFO",
            params: {
              usingFlag: "1",
              auditStatus: "3"
            }
          }
        },
        {
          label: "申请单号",
          prop: "applyNo"
        },
        {
          label: "申请类型",
          prop: "applyType",
          dict: "fundApplyType"
        },

        {
          label: "业务机构",
          prop: "bizOrganCode",
          selectData: {
            type: "FUNC_ORG"
          }
        },
        {
          label: "业务部门",
          prop: "bizDeptCode",
          selectData: {
            type: "FUNC_DEPT"
          }
        },
        {
          label: "业务员",
          prop: "bizEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "制单人",
          prop: "optEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "备注",
          prop: "remark"
        }
      ]
    },
    editPart2: {
      title: "付款方式",
      formData: [
        {
          label: "付款方式",
          prop: "paymentType",
          dict: "settlementType"
        },
        {
          label: "付款金额",
          prop: "paymentAmount",
          formate: "thousands",
          precision: 2
        },
        {
          label: "币种",
          prop: "currency",
          dict: "currency"
        },
        {
          label: "付款帐号",
          prop: "bankAccountName",
          selectData: {
            type: "DD_ORGAN_BANK_ACCOUNT"
          },
          isHide: [{
            value: ["EFT"],
            key: 'paymentType'
          }]
        },
        {
          label: "付款银行",
          prop: "bankName",
          selectData: {
            type: "DD_BANK"
          },
          isHide: [{
            value: ["EFT"],
            key: 'paymentType'
          }]
        },
        {
          label: "承兑汇票",
          prop: "acceptanceNo",
          isHide: [{
            value: ["ACCEPTANCE"],
            key: 'paymentType'
          }]
        },
        {
          label: "信用证",
          prop: "letterCreditNo",
          isHide: [{
            value: ["LC"],
            key: 'paymentType'
          }]
        }
      ]
    }
  },
  // 收款登记
  fundReceiveAudit: {
    api: {
      get: "/fund/receive/getByNo"
    },
    editPart1: {
      title: "收款信息",
      formData: [
        {
          label: "单据号",
          prop: "receiveNo"
        },
        {
          label: "收款日期",
          prop: "receiveDate",
          formate: "date"
        },
        {
          label: "客户",
          prop: "customerNo",
          selectData: {
            type: "CUST_INFO",
            params: {
              typeCode: "12",
              usingFlag: "1",
              auditStatus: "3"
            }
          }
        },
        {
          label: "业务机构",
          prop: "bizOrganCode",
          selectData: {
            type: "FUNC_ORG"
          }
        },
        {
          label: "业务部门",
          prop: "bizDeptCode",
          selectData: {
            type: "FUNC_DEPT"
          }
        },
        {
          label: "业务员",
          prop: "bizEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "制单人",
          prop: "optEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "备注",
          prop: "remark"
        }
      ]
    },
    editPart2: {
      title: "收款方式",
      formData: [
        {
          label: "收款方式",
          prop: "receiveType",
          dict: "settlementType"
        },
        {
          label: "收款金额",
          prop: "receiveAmount",
          formate: "thousands",
          precision: 2
        },
        {
          label: "币种",
          prop: "currency",
          dict: "currency"
        },
        {
          label: "收款帐号",
          prop: "bankAccountCode",
          selectData: {
            type: "DD_ORGAN_BANK_ACCOUNT"
          },
          isHide: [{
            value: ["EFT"],
            key: 'receiveType'
          }]
        },
        {
          label: "收款银行",
          prop: "bankCode",
          selectData: {
            type: "DD_BANK"
          },
          isHide: [{
            value: ["EFT"],
            key: 'receiveType'
          }]
        }
      ]
    },
    editPart3: {
      title: "承兑汇票信息",
      isHide: [{
        value: ["ACCEPTANCE"],
        key: 'receiveType'
      }],
      formData: [
        {
          label: "票据号",
          prop: "acceptanceNo"
        },
        {
          label: "出票日期",
          prop: "acceptanceDate",
          formate: "date"
        },
        {
          label: "客户",
          prop: "customerNo",
          selectData: {
            type: "CUST_INFO",
            params: {
              usingFlag: "1",
              auditStatus: "3"
            }
          }
        },

        {
          label: "票面金额",
          prop: "acceptanceAmount",
          formate: "thousands",
          precision: 2
        },
        {
          label: "币种",
          prop: "currency",
          dict: "currency"
        },
        {
          label: "到期日",
          prop: "dueDate",
          formate: "date"
        },
        {
          label: "承兑银行",
          prop: "acceptanceBank"
        },
        {
          label: "业务机构",
          prop: "bizOrganCode",
          selectData: {
            type: "FUNC_ORG"
          }
        },
        {
          label: "业务部门",
          prop: "bizDeptCode",
          selectData: {
            type: "FUNC_DEPT"
          }
        },
        {
          label: "业务员",
          prop: "bizEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "制单人",
          prop: "optEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "备注",
          prop: "remark"
        }
      ]
    },
    editPart4: {
      title: "信用证信息",
      isHide: [{
        value: ["LC"],
        key: 'receiveType'
      }],
      formData: [
        {
          label: "信用证号",
          prop: "letterCreditNo"
        },
        {
          label: "信用证日期",
          prop: "issueDate",
          formate: "date"
        },
        {
          label: "客户",
          prop: "customerNo",
          selectData: {
            type: "CUST_INFO",
            params: {
              usingFlag: "1",
              auditStatus: "3"
            }
          }
        },

        {
          label: "批次号",
          prop: "lotNo"
        },
        {
          label: "溢短装",
          prop: "moreOrLess",
          formate: "thousands",
          precision: 3
        },
        {
          label: "信用证金额",
          prop: "letterCreditAmount",
          formate: "thousands",
          precision: 2
        },
        {
          label: "币种",
          prop: "currency",
          dict: "currency"
        },
        {
          label: "信用证类型",
          prop: "lcType",
          dict: "letterCreditType"
        },
        {
          label: "到期日",
          prop: "dueDate",
          formate: "date"
        },
        {
          label: "开证行",
          prop: "issuingBank"
        },
        {
          label: "通知行",
          prop: "adviseBank"
        },
        {
          label: "议付行",
          prop: "negoBank"
        },

        {
          label: "业务机构",
          prop: "bizOrganCode",
          selectData: {
            type: "FUNC_ORG"
          }
        },
        {
          label: "业务部门",
          prop: "bizDeptCode",
          selectData: {
            type: "FUNC_DEPT"
          }
        },
        {
          label: "业务员",
          prop: "bizEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "制单人",
          prop: "optEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "备注",
          prop: "remark"
        }
      ]
    }
  },
  // 收款认领
  fundClaimAudit: {
    api: {
      get: "/fund/claim/getByNo"
    },
    editPart1: {
      title: "认领信息",
      formData: [
        {
          label: "单据号",
          prop: "claimNo"
        },
        {
          label: "认领日期",
          prop: "claimDate",
          formate: "date"
        },
        {
          label: "客户",
          prop: "customerNo",
          selectData: {
            type: "CUST_INFO",
            params: {
              usingFlag: "1",
              auditStatus: "3"
            }
          }
        },
        {
          label: "收款单号",
          prop: "receiveNo"
        },
        {
          label: "收款方式",
          prop: "receiveType",
          dict: "settlementType"
        },
        {
          label: "认领类型",
          prop: "claimType",
          dict: "fundClaimType"
        },
        {
          label: "销售合同",
          prop: "contractNo",
          isHide: [{
            value: ["A"],
            key: 'claimType'
          }]
        },
        {
          label: "预付款单号",
          prop: "applyNo",
          isHide: [{
            value: ["RA"],
            key: 'claimType'
          }]
        },
        {
          label: "业务类别",
          prop: "businessType",
          dict: "fundClaimBusinessType",
          isHide: [{
            value: ["LOT"],
            key: 'claimType'
          }]
        },
        {
          label: "认领金额",
          prop: "claimAmount",
          formate: "thousands",
          precision: 2
        },
        {
          label: "币种",
          prop: "currency",
          dict: "currency"
        },
        {
          label: "业务机构",
          prop: "bizOrganCode",
          selectData: {
            type: "FUNC_ORG"
          }
        },
        {
          label: "业务部门",
          prop: "bizDeptCode",
          selectData: {
            type: "FUNC_DEPT"
          }
        },
        {
          label: "业务员",
          prop: "bizEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "制单人",
          prop: "optEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "备注",
          prop: "remark"
        }
      ]
    },
    fundClaimDetailDtoList: {
      title: "收款认领详细信息",
      api: "/fund/claimDetail/listByClaimNo",
      mainColumn: "lotNo",
      query: "uk",
      tableData: [
        {
          name: "合同号",
          prop: "contractNo"
        },
        {
          name: "批次号",
          prop: "lotNo"
        },
        {
          name: "批次类型",
          prop: "lotType",
          dict: "bizCode"
        },
        {
          name: "资金用途",
          prop: "fundUseType",
          dict: "fundUseType"
        },
        {
          name: "商品",
          prop: "productName"
        },
        ...mainGoodCols,
        {
          name: "认领金额",
          prop: "claimAmount",
          formate: "thousands",
          precision: 2
        },
        {
          label: "备注",
          prop: "remark"
        }
      ]
    }
  },
  // 账户收支登记
  accountBookAudit: {
    api: {
      get: "/fund/accountBook/get"
    },
    editPart1: {
      title: "账户收支信息",
      formData: [
        {
          label: "单据号",
          prop: "accountBookNo"
        },
        {
          label: "收支日期",
          prop: "accountBookDate",
          formate: "date"
        },
        {
          label: "帐号",
          prop: "bankAccountCode",
          selectData: {
            type: "DD_ORGAN_BANK_ACCOUNT"
          }
        },
        {
          label: "银行",
          prop: "bankCode",
          selectData: {
            type: "DD_BANK"
          }
        },
        {
          label: "收支方向",
          prop: "fundDirection",
          dict: "fundDirection"
        },
        {
          label: "金额",
          prop: "accountBookAmount",
          formate: "thousands",
          precision: 2
        },
        {
          label: "币种",
          prop: "currency",
          dict: "currency"
        },

        {
          label: "业务机构",
          prop: "bizOrganCode",
          selectData: {
            type: "FUNC_ORG"
          }
        },
        {
          label: "业务部门",
          prop: "bizDeptCode",
          selectData: {
            type: "FUNC_DEPT"
          }
        },
        {
          label: "业务员",
          prop: "bizEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "制单人",
          prop: "optEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "备注",
          prop: "remark"
        }
      ]
    }
  },
  // 账户转账登记
  accountTransferAudit: {
    api: {
      get: "/fund/accountTransfer/get"
    },
    editPart1: {
      title: "账户转账信息",
      formData: [
        {
          label: "单据号",
          prop: "accountTransferNo"
        },
        {
          label: "转账日期",
          prop: "accountTransferDate",
          formate: "date"
        },
        {
          label: "金额",
          prop: "accountTransferAmount",
          formate: "thousands",
          precision: 2
        },
        {
          label: "币种",
          prop: "currency",
          dict: "currency"
        },
        {
          label: "转出账号",
          prop: "outBankAccountCode",
          selectData: {
            type: "DD_ORGAN_BANK_ACCOUNT"
          }
        },
        {
          label: "转出银行",
          prop: "outBankCode",
          selectData: {
            type: "DD_BANK"
          }
        },
        {
          label: "转出机构",
          prop: "outOrganCode",
          selectData: {
            type: "FUNC_ORG"
          }
        },
        {
          label: "转入账号",
          prop: "inBankAccountCode",
          selectData: {
            type: "DD_ORGAN_BANK_ACCOUNT"
          }
        },
        {
          label: "转入银行",
          prop: "inBankCode",
          selectData: {
            type: "DD_BANK"
          }
        },
        {
          label: "转入机构",
          prop: "inOrganCode",
          selectData: {
            type: "FUNC_ORG"
          }
        },
        {
          label: "业务机构",
          prop: "bizOrganCode",
          selectData: {
            type: "FUNC_ORG"
          }
        },
        {
          label: "业务部门",
          prop: "bizDeptCode",
          selectData: {
            type: "FUNC_DEPT"
          }
        },
        {
          label: "业务员",
          prop: "bizEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "制单人",
          prop: "optEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "备注",
          prop: "remark"
        }
      ]
    }
  },
  // 预付款转货款
  advanceApplyTransferAudit: {
    api: {
      get: "/fund/applyAdvTran/get"
    },
    editPart1: {
      title: "预付款转换信息",
      formData: [
        {
          label: "单据号",
          prop: "transferNo"
        },
        {
          label: "转换日期",
          prop: "transferDate",
          formate: "date"
        },
        {
          label: "客户",
          prop: "customerNo",
          selectData: {
            type: "CUST_INFO",
            params: {
              usingFlag: "1",
              typeCode: "12",
              auditStatus: "3"
            }
          }
        },
        {
          label: "付款申请单号",
          prop: "applyNo"
        },
        {
          label: "采购合同号",
          prop: "contractNo"
        },
        {
          label: "转换金额",
          prop: "transferAmount",
          formate: "thousands",
          precision: 2
        },
        {
          label: "币种",
          prop: "currency",
          dict: "currency"
        },

        {
          label: "业务机构",
          prop: "bizOrganCode",
          selectData: {
            type: "FUNC_ORG"
          }
        },
        {
          label: "业务部门",
          prop: "bizDeptCode",
          selectData: {
            type: "FUNC_DEPT"
          }
        },
        {
          label: "业务员",
          prop: "bizEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "制单人",
          prop: "optEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "备注",
          prop: "remark"
        }
      ]
    },
    transferInfo: {
      title: "预付款转换详细信息",
      api: "/fund/applyAdvTranDe/listByTransferNo",
      mainColumn: "contractNo",
      query: "uk",
      tableData: [
        {
          name: "合同号",
          prop: "contractNo"
        },
        {
          name: "批次号",
          prop: "lotNo"
        },
        {
          name: "批次类型",
          prop: "lotType",
          dict: "bizCode"
        },
        {
          name: "资金用途",
          prop: "fundUseType",
          dict: "fundUseType"
        },
        {
          name: "商品",
          prop: "productName"
        },
        ...mainGoodCols,
        {
          name: "转换金额",
          prop: "transferAmount",
          formate: "thousands",
          precision: 2
        },
        {
          label: "备注",
          prop: "remark"
        }
      ]
    }
  },
  // 预收款转货款
  advanceClaimTransferAudit: {
    api: {
      get: "/fund/claimAdvTran/get"
    },
    editPart2: {
      title: "预收款转换信息",
      formData: [
        {
          label: "单据号",
          prop: "transferNo"
        },
        {
          label: "转换日期",
          prop: "transferDate",
          formate: "date"
        },
        {
          label: "客户",
          prop: "customerNo",
          selectData: {
            type: "CUST_INFO",
            params: {
              typeCode: "12",
              usingFlag: "1",
              auditStatus: "3"
            }
          }
        },
        {
          label: "收款认领单号",
          prop: "claimNo"
        },
        {
          name: "转换金额",
          prop: "transferAmount",
          formate: "thousands",
          precision: 2
        },
        {
          label: "币种",
          prop: "currency",
          dict: "currency"
        },
        {
          label: "业务机构",
          prop: "bizOrganCode",
          selectData: {
            type: "FUNC_ORG"
          }
        },
        {
          label: "业务部门",
          prop: "bizDeptCode",
          selectData: {
            type: "FUNC_DEPT"
          }
        },
        {
          label: "业务员",
          prop: "bizEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "制单人",
          prop: "optEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "备注",
          prop: "remark"
        }
      ]
    },
    transferInfo: {
      title: "预收款转换详细信息",
      api: "/fund/claimAdvTranDe/listByTransferNo",
      mainColumn: "lotNo",
      query: "uk",
      tableData: [
        {
          name: "合同号",
          prop: "contractNo"
        },
        {
          name: "批次号",
          prop: "lotNo"
        },
        {
          name: "批次类型",
          prop: "lotType",
          dict: "bizCode"
        },
        {
          name: "资金用途",
          prop: "fundUseType",
          dict: "fundUseType"
        },
        {
          name: "商品",
          prop: "productName"
        },
        ...mainGoodCols,
        {
          name: "转换金额",
          prop: "transferAmount",
          formate: "thousands",
          precision: 2
        },
        {
          label: "备注",
          prop: "remark"
        }
      ]
    }
  },
  // 外收承兑汇票
  acceptanceReceiveAudit: {
    api: {
      get: "/acceptance/receive/get"
    },
    editPart1: {
      title: "承兑汇票信息",
      formData: [
        {
          label: "单据号",
          prop: "receiveNo"
        },
        {
          label: "票据号",
          prop: "acceptanceNo"
        },
        {
          label: "出票日期",
          prop: "acceptanceDate",
          formate: "date"
        },
        {
          label: "客户",
          prop: "customerNo",
          selectData: {
            type: "CUST_INFO",
            params: {
              typeCode: "2",
              usingFlag: "1",
              auditStatus: "3"
            }
          }
        },
        {
          label: "票面金额",
          prop: "acceptanceAmount",
          formate: "thousands",
          precision: 2
        },
        {
          label: "币种",
          prop: "currency",
          dict: "currency"
        },
        {
          label: "到期日",
          prop: "dueDate",
          formate: "date"
        },
        {
          label: "承兑行",
          prop: "acceptanceBank"
        },
        {
          label: "业务机构",
          prop: "bizOrganCode",
          selectData: {
            type: "FUNC_ORG"
          }
        },
        {
          label: "业务部门",
          prop: "bizDeptCode",
          selectData: {
            type: "FUNC_DEPT"
          }
        },
        {
          label: "业务员",
          prop: "bizEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "制单人",
          prop: "optEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "备注",
          prop: "remark"
        }
      ]
    }
  },
  // 签发承兑汇票
  acceptanceSignAudit: {
    api: {
      get: "/acceptance/sign/get"
    },
    editPart1: {
      title: "承兑汇票信息",
      formData: [
        {
          label: "单据号",
          prop: "signNo"
        },
        {
          label: "票据号",
          prop: "acceptanceNo"
        },
        {
          label: "出票日期",
          prop: "acceptanceDate",
          formate: "date"
        },
        {
          label: "供应商",
          prop: "customerNo",
          selectData: {
            type: "CUST_INFO",
            params: {
              typeCode: "1",
              usingFlag: "1",
              auditStatus: "3"
            }
          }
        },
        {
          label: "票面金额",
          prop: "acceptanceAmount",
          formate: "thousands",
          precision: 2
        },
        {
          label: "币种",
          prop: "currency",
          dict: "currency"
        },
        {
          label: "到期日",
          prop: "dueDate",
          formate: "date"
        },
        {
          label: "承兑行",
          prop: "acceptanceBank"
        },

        {
          label: "业务机构",
          prop: "bizOrganCode",
          selectData: {
            type: "FUNC_ORG"
          }
        },
        {
          label: "业务部门",
          prop: "bizDeptCode",
          selectData: {
            type: "FUNC_DEPT"
          }
        },
        {
          label: "业务员",
          prop: "bizEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "制单人",
          prop: "optEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "备注",
          prop: "remark"
        }
      ]
    }
  },
  // 其他合同管理
  otherContractAudit: {
    api: {
      get: "/fee/otherContract/get"
    },
    editPart1: {
      title: "基本信息",
      formData: [
        {
          label: "合同号",
          prop: "otherContractNo"
        },
        {
          label: "合同文档号",
          prop: "otherContractDocNo"
        },
        {
          label: "合同名称",
          prop: "otherContractName"
        },
        {
          label: "合同类型",
          prop: "otherContractType",
          dict: "otherContractType"
        },
        {
          label: "服务商",
          prop: "customerNo",
          selectData: {
            type: "CUST_INFO",
            params: {
              typeCode: "2",
              auditStatus: "3"
            }
          }
        },
        {
          label: "合同金额",
          prop: "otherContractAmount",
          formate: "thousands",
          precision: 2
        },
        {
          label: "币种",
          prop: "currency",
          dict: "currency"
        },
        {
          label: "签订日期",
          prop: "signDate",
          formate: "date"
        },
        {
          label: "备注",
          prop: "remark"
        },
        {
          label: "业务机构",
          prop: "bizOrganCode",
          selectData: {
            type: "FUNC_ORG"
          }
        },
        {
          label: "业务部门",
          prop: "bizDeptCode",
          selectData: {
            type: "FUNC_DEPT"
          }
        },
        {
          label: "业务员",
          prop: "bizEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "制单人",
          prop: "optEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        }
      ]
    }
  },
  // 费用发票
  feeInvoiceAudit: {
    api: {
      get: "/fee/feeInvoice/get"
    },
    editPart1: {
      title: "基本信息",
      formData: [
        {
          label: "单据号",
          prop: "feeInvoiceNo"
        },
        {
          label: "发票号",
          prop: "invoiceNo"
        },
        {
          label: "发票日期",
          prop: "invoiceDate",
          formate: "date"
        },
        {
          label: "服务商",
          prop: "customerNo",
          selectData: {
            type: "CUST_INFO",
            params: {
              typeCode: "2",
              auditStatus: "3"
            }
          }
        },
        {
          label: "费用类型",
          prop: "feeType",
          dict: "otherContractType"
        },
        {
          label: "其他合同号",
          prop: "otherContractNo"
        },
        {
          label: "含税金额",
          prop: "includeTaxAmount",
          formate: "thousands",
          precision: 2
        },
        {
          label: "不含税金额",
          prop: "excludeTaxAmount",
          formate: "thousands",
          precision: 2
        },
        {
          label: "税额",
          prop: "taxAmount",
          formate: "thousands",
          precision: 2
        },
        {
          label: "币种",
          prop: "currency",
          dict: "currency"
        },
        {
          label: "备注",
          prop: "remark"
        },
        {
          label: "业务机构",
          prop: "bizOrganCode",
          selectData: {
            type: "FUNC_ORG"
          }
        },
        {
          label: "业务部门",
          prop: "bizDeptCode",
          selectData: {
            type: "FUNC_DEPT"
          }
        },
        {
          label: "业务员",
          prop: "bizEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "制单人",
          prop: "optEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        }
      ]
    },
    feeInvoiceDetailInfo: {
      title: "费用发票详细信息",
      api: "/fee/feeInvoiceDetail/get",
      mainColumn: "productCode",
      query: "uk",
      tableData: [
        {
          name: "商品",
          prop: "productCode",
          selectData: {
            type: "DD_PRODUCT"
          }
        },
        ...mainGoodCols,
        {
          name: "发票名称",
          prop: "invoiceName"
        },
        {
          name: "发票数量",
          prop: "invoiceQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "发票价格（不含税）",
          prop: "excludeTaxPrice",
          formate: "thousands",
          precision: 3
        },
        {
          name: "发票金额（不含税）",
          prop: "excludeTaxAmount",
          formate: "thousands",
          precision: 2
        },
        {
          name: "税率（%）",
          prop: "taxRate",
          formate: "thousands",
          precision: 3
        },
        {
          name: "税额",
          prop: "taxAmount",
          formate: "thousands",
          precision: 2
        },
        {
          name: "发票金额（含税）",
          prop: "includeTaxAmount",
          formate: "thousands",
          precision: 2
        },
        {
          name: "发票价格（含税）",
          prop: "includeTaxPrice",
          formate: "thousands",
          precision: 3
        }
      ]
    }
  },
  // 开信用证确认
  lcConfirmAudit: {
    api: {
      get: "/lc/confirm/get"
    },
    editPart1: {
      title: "开证确认信息",
      formData: [
        {
          label: "单据号",
          prop: "confirmNo"
        },
        {
          label: "申请单号",
          prop: "applyNo"
        },
        {
          label: "供应商",
          prop: "customerNo",
          selectData: {
            type: "CUST_INFO",
            params: {
              typeCode: "2",
              usingFlag: "1",
              auditStatus: "3"
            }
          }
        },
        {
          label: "采购合同",
          prop: "contractNo"
        },
        {
          label: "溢短装(%)",
          prop: "moreOrLess",
          formate: "thousands",
          precision: 2
        },
        {
          label: "申请金额",
          prop: "letterCreditAmount",
          formate: "thousands",
          precision: 2
        },
        {
          label: "币种",
          prop: "currency",
          dict: "currency"
        },
        {
          label: "信用证类型",
          prop: "lcType",
          dict: "letterCreditType"
        },
        {
          label: "远期天数",
          prop: "usanceDays",
          formate: "thousands",
          precision: 0,
          isHide: [{
            value: ["SIGHT"],
            key: 'lcType'
          }]
        },
        {
          label: "开证行",
          prop: "issuingBank"
        },
        {
          label: "通知行",
          prop: "adviseBank"
        },
        {
          label: "议付行",
          prop: "negoBank"
        },
        {
          label: "业务机构",
          prop: "bizOrganCode",
          selectData: {
            type: "FUNC_ORG"
          }
        },
        {
          label: "业务部门",
          prop: "bizDeptCode",
          selectData: {
            type: "FUNC_DEPT"
          }
        },
        {
          label: "业务员",
          prop: "bizEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "制单人",
          prop: "optEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "备注",
          prop: "remark"
        }
      ]
    }
  },
  // 收信用证登记
  lcReceiveAudit: {
    api: {
      get: "/lc/receive/get"
    },
    editPart1: {
      title: "收证信息",
      formData: [
        {
          label: "单据号",
          prop: "receiveNo"
        },
        {
          label: "信用证号",
          prop: "letterCreditNo"
        },
        {
          label: "信用证日期",
          prop: "issueDate",
          formate: "date"
        },
        {
          label: "客户",
          prop: "customerNo",
          selectData: {
            type: "CUST_INFO",
            params: {
              typeCode: "1",
              usingFlag: "1",
              auditStatus: "3"
            }
          }
        },
        {
          label: "销售合同",
          prop: "contractNo"
        },
        {
          label: "溢短装(%)",
          prop: "moreOrLess",
          formate: "thousands",
          precision: 2
        },
        {
          label: "信用证金额",
          prop: "letterCreditAmount",
          formate: "thousands",
          precision: 2
        },
        {
          label: "币种",
          prop: "currency",
          dict: "currency"
        },
        {
          label: "信用证类型",
          prop: "lcType",
          dict: "letterCreditType"
        },
        {
          label: "远期天数",
          prop: "usanceDays",
          formate: "thousands",
          precision: 0,
          isHide: [{
            value: ["SIGHT"],
            key: 'lcType'
          }]
        },
        {
          label: "到期日",
          prop: "dueDate",
          formate: "date"
        },
        {
          label: "开证行",
          prop: "issuingBank"
        },
        {
          label: "通知行",
          prop: "adviseBank"
        },
        {
          label: "议付行",
          prop: "negoBank"
        },
        {
          label: "业务机构",
          prop: "bizOrganCode",
          selectData: {
            type: "FUNC_ORG"
          }
        },
        {
          label: "业务部门",
          prop: "bizDeptCode",
          selectData: {
            type: "FUNC_DEPT"
          }
        },
        {
          label: "业务员",
          prop: "bizEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "制单人",
          prop: "optEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "备注",
          prop: "remark"
        }
      ]
    }
  },
  // 开信用证申请
  lcApplyAudit: {
    api: {
      get: "/lc/apply/get"
    },
    editPart1: {
      title: "开证申请信息",
      formData: [
        {
          label: "单据号",
          prop: "applyNo"
        },
        {
          label: "申请日期",
          prop: "applyDate",
          formate: "date"
        },
        {
          label: "供应商",
          prop: "customerNo",
          selectData: {
            type: "CUST_INFO",
            params: {
              typeCode: "2",
              usingFlag: "1",
              auditStatus: "3"
            }
          }
        },
        {
          label: "采购合同",
          prop: "contractNo"
        },
        {
          label: "溢短装",
          prop: "moreOrLess",
          formate: "thousands",
          precision: 2
        },
        {
          label: "申请金额",
          prop: "letterCreditAmount",
          formate: "thousands",
          precision: 2
        },
        {
          label: "币种",
          prop: "currency",
          dict: "currency"
        },
        {
          label: "信用证类型",
          prop: "lcType",
          dict: "letterCreditType"
        },
        {
          label: "远期天数",
          prop: "usanceDays",
          formate: "thousands",
          precision: 0,
          isHide: [{
            value: ["SIGHT"],
            key: 'lcType'
          }]
        },
        {
          label: "到期日",
          prop: "dueDate",
          formate: "date"
        },
        {
          label: "开证行",
          prop: "issuingBank"
        },
        {
          label: "通知行",
          prop: "adviseBank"
        },
        {
          label: "议付行",
          prop: "negoBank"
        },
        {
          label: "业务机构",
          prop: "bizOrganCode",
          selectData: {
            type: "FUNC_ORG"
          }
        },
        {
          label: "业务部门",
          prop: "bizDeptCode",
          selectData: {
            type: "FUNC_DEPT"
          }
        },
        {
          label: "业务员",
          prop: "bizEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "制单人",
          prop: "optEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "备注",
          prop: "remark"
        }
      ]
    }
  },
  // 开票申请（内贸）
  domesticInvoiceApplyAudit: {
    api: {
      get: "/invoice/domesticApply/get"
    },
    editPart1: {
      title: "开票申请（内贸）信息",
      formData: [
        {
          label: "单据号",
          prop: "applyNo"
        },
        {
          label: "申请日期",
          prop: "applyDate",
          formate: "date"
        },
        {
          label: "客户",
          prop: "customerNo",
          selectData: {
            type: "CUST_INFO",
            params: {
              typeCode: "1",
              usingFlag: "1",
              auditStatus: "3"
            }
          }
        },
        {
          label: "最迟开票日期",
          prop: "latestInvoiceDate",
          formate: "date"
        },
        {
          label: "不含税金额",
          prop: "excludeTaxAmount",
          formate: "thousands",
          precision: 2
        },
        {
          label: "税额",
          prop: "taxAmount",
          formate: "thousands",
          precision: 2
        },
        {
          label: "含税金额",
          prop: "includeTaxAmount",
          formate: "thousands",
          precision: 2
        },
        {
          label: "币种",
          prop: "currency",
          dict: "currency"
        },
        {
          label: "业务机构",
          prop: "bizOrganCode",
          selectData: {
            type: "FUNC_ORG"
          }
        },
        {
          label: "业务部门",
          prop: "bizDeptCode",
          selectData: {
            type: "FUNC_DEPT"
          }
        },
        {
          label: "业务员",
          prop: "bizEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "制单人",
          prop: "optEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "备注",
          prop: "remark"
        }
      ]
    },
    applyDetailInfo: {
      title: "开票申请（内贸）详细信息*",
      api: "/invoice/domApplyDetail/listByApplyNo",
      mainColumn: "contractNo",
      query: "uk",
      tableData: [
        {
          name: "合同号",
          prop: "contractNo"
        },
        {
          name: "批次号",
          prop: "lotNo"
        },
        {
          name: "商品",
          prop: "productName"
        },
        ...mainGoodCols,
        {
          name: "发票名称",
          prop: "invoiceName"
        },
        {
          name: "申请数量",
          prop: "applyQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "发票价格（含税）",
          prop: "includeTaxPrice",
          formate: "thousands",
          precision: 6
        },
        {
          name: "发票金额（含税）",
          prop: "includeTaxAmount",
          formate: "thousands",
          precision: 2
        },
        {
          name: "税率（%）",
          prop: "taxRate",
          dformate: "thousands",
          precision: 2
        },
        {
          name: "税额",
          prop: "taxAmount",
          formate: "thousands",
          precision: 2
        },
        {
          name: "发票价格（不含税）",
          prop: "excludeTaxPrice",
          dformate: "thousands",
          precision: 6
        },
        {
          name: "发票金额（不含税）",
          prop: "excludeTaxAmount",
          formate: "thousands",
          precision: 2
        },
        {
          label: "备注",
          prop: "remark"
        }
      ]
    }
  },
  // 开票确认（内贸）
  domesticInvoiceConfirmAudit: {
    api: {
      get: "/invoice/domesticConfirm/get"
    },
    editPart1: {
      title: "基本信息",
      formData: [
        {
          label: "单据号",
          prop: "confirmNo"
        },
        {
          label: "发票号",
          prop: "invoiceNo"
        },
        {
          label: "客户",
          prop: "customerNo",
          selectData: {
            type: "CUST_INFO",
            params: {
              typeCode: "1",
              usingFlag: "1",
              auditStatus: "3"
            }
          }
        },
        {
          label: "发票日期",
          prop: "invoiceDate",
          formate: "date"
        },
        {
          label: "不含税金额",
          prop: "excludeTaxAmount",
          formate: "thousands",
          precision: 2
        },
        {
          label: "税额",
          prop: "taxAmount",
          formate: "thousands",
          precision: 2
        },
        {
          label: "含税金额",
          prop: "includeTaxAmount",
          formate: "thousands",
          precision: 2
        },
        {
          label: "币种",
          prop: "currency",
          dict: "currency"
        },
        {
          label: "业务机构",
          prop: "bizOrganCode",
          selectData: {
            type: "FUNC_ORG"
          }
        },
        {
          label: "业务部门",
          prop: "bizDeptCode",
          selectData: {
            type: "FUNC_DEPT"
          }
        },
        {
          label: "业务员",
          prop: "bizEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "制单人",
          prop: "optEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "备注",
          prop: "remark"
        }
      ]
    },
    applyInfo: {
      title: "开票申请详细信息",
      api: "/invoice/domConfDetaJo/listByConfirmNo",
      mainColumn: "applyNo",
      query: "uk",
      tableData: [
        {
          name: "申请单号",
          prop: "applyNo"
        },
        {
          name: "合同号",
          prop: "contractNo"
        },
        {
          name: "批次号",
          prop: "lotNo"
        },
        {
          name: "商品",
          prop: "productName"
        },
        ...mainGoodCols,
        {
          name: "发票名称",
          prop: "invoiceName"
        },
        {
          name: "确认数量",
          prop: "confirmQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "发票价格（含税）",
          prop: "includeTaxPrice",
          formate: "thousands",
          precision: 6
        },
        {
          name: "发票金额（含税）",
          prop: "includeTaxAmount",
          formate: "thousands",
          precision: 2
        },
        {
          name: "税率（%）",
          prop: "taxRate",
          dformate: "thousands",
          precision: 2
        },
        {
          name: "税额",
          prop: "taxAmount",
          formate: "thousands",
          precision: 2
        },
        {
          name: "发票价格（不含税）",
          prop: "excludeTaxPrice",
          dformate: "thousands",
          precision: 6
        },
        {
          name: "发票金额（不含税）",
          prop: "excludeTaxAmount",
          formate: "thousands",
          precision: 2
        },
        {
          label: "备注",
          prop: "remark"
        }
      ]
    },
    confirmInfo: {
      title: "开票详细信息",
      api: "/invoice/domesticConfirm/listDetail",
      mainColumn: "productName",
      query: "uk",
      tableData: [
        {
          name: "商品",
          prop: "productCode",
          selectData: {
            type: "DD_PRODUCT"
          }
        },
        {
          name: "发票名称",
          prop: "invoiceName"
        },
        {
          name: "发票数量",
          prop: "invoiceQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "发票价格（不含税）",
          prop: "excludeTaxPrice",
          dformate: "thousands",
          precision: 2
        },
        {
          name: "发票金额（不含税）",
          prop: "excludeTaxAmount",
          formate: "thousands",
          precision: 2
        },
        {
          name: "税率（%）",
          prop: "taxRate",
          dformate: "thousands",
          precision: 2
        },
        {
          name: "税额",
          prop: "taxAmount",
          formate: "thousands",
          precision: 2
        },
        {
          name: "发票价格（含税）",
          prop: "includeTaxPrice",
          formate: "thousands",
          precision: 2
        },
        {
          name: "发票金额（含税）",
          prop: "includeTaxAmount",
          formate: "thousands",
          precision: 2
        },
        {
          name: "备注",
          prop: "remark"
        }
      ]
    }
  },
  // 收票认领（内贸）
  domesticInvoiceClaimAudit: {
    api: {
      get: "/invoice/domesticClaim/get"
    },
    editPart1: {
      title: "基本信息",
      formData: [
        {
          label: "单据号",
          prop: "claimNo"
        },
        {
          label: "认领日期",
          prop: "claimDate",
          formate: "date"
        },
        {
          label: "供应商",
          prop: "customerNo",
          selectData: {
            type: "CUST_INFO",
            params: {
              typeCode: "2",
              usingFlag: "1",
              auditStatus: "3"
            }
          }
        },
        {
          label: "商品",
          prop: "productCode",
          selectData: {
            type: "DD_PRODUCT"
          }
        },
        {
          label: "登记单号",
          prop: "receiveNo"
        },
        {
          label: "认领数量",
          prop: "claimQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          label: "发票价格(不含税)",
          prop: "excludeTaxPrice",
          formate: "thousands",
          precision: 6
        },
        {
          label: "发票金额(不含税)",
          prop: "excludeTaxAmount",
          formate: "thousands",
          precision: 2
        },
        {
          label: "税率（%）",
          prop: "taxRate",
          formate: "thousands",
          precision: 2
        },
        {
          label: "税额",
          prop: "taxAmount",
          formate: "thousands",
          precision: 2
        },
        {
          label: "发票价格(含税)",
          prop: "includeTaxPrice",
          formate: "thousands",
          precision: 2
        },
        {
          label: "发票金额(含税)",
          prop: "includeTaxAmount",
          formate: "thousands",
          precision: 2
        },
        {
          label: "币种",
          prop: "currency",
          dict: "currency"
        },
        {
          label: "业务机构",
          prop: "bizOrganCode",
          selectData: {
            type: "FUNC_ORG"
          }
        },
        {
          label: "业务部门",
          prop: "bizDeptCode",
          selectData: {
            type: "FUNC_DEPT"
          }
        },
        {
          label: "业务员",
          prop: "bizEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "制单人",
          prop: "optEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "备注",
          prop: "remark"
        }
      ]
    },
    fundDetailInfo: {
      title: "收票认领（内贸）详细信息",
      api: "/invoice/domClaimDetail/listByClaimNo",
      mainColumn: "lotNo",
      query: "uk",
      tableData: [
        {
          name: "合同号",
          prop: "contractNo"
        },
        {
          name: "批次号",
          prop: "lotNo"
        },
        {
          name: "商品",
          prop: "productName"
        },
        ...mainGoodCols,

        {
          name: "认领数量",
          prop: "claimQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "备注",
          prop: "remark"
        }
      ]
    }
  },
  // 开票登记（外贸）
  foreignInvoiceMakeAudit: {
    api: {
      get: "/invoice/foreign/get"
    },
    editPart1: {
      title: "基本信息",
      formData: [
        {
          label: "单据号",
          prop: "invoiceForeignNo"
        },
        {
          label: "发票号",
          prop: "invoiceNo"
        },
        {
          label: "客户",
          prop: "customerNo",
          selectData: {
            type: "CUST_INFO",
            params: {
              usingFlag: "1",
              auditStatus: "3"
            }
          }
        },
        {
          label: "销售批次",
          prop: "lotNo"
        },
        {
          label: "发票日期",
          prop: "invoiceDate",
          formate: "date"
        },
        {
          label: "发票金额",
          prop: "invoiceAmount",
          formate: "thousands",
          precision: 2
        },
        {
          label: "币种",
          prop: "currency",
          dict: "currency"
        },
        {
          label: "起运地",
          prop: "loadingPlace"
        },
        {
          label: "目的地",
          prop: "dischargePlace"
        },
        {
          label: "价格条款",
          prop: "priceTerm",
          dict: "priceTerm"
        },
        {
          label: "业务机构",
          prop: "bizOrganCode",
          selectData: {
            type: "FUNC_ORG"
          }
        },
        {
          label: "业务部门",
          prop: "bizDeptCode",
          selectData: {
            type: "FUNC_DEPT"
          }
        },
        {
          label: "业务员",
          prop: "bizEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "制单人",
          prop: "optEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "备注",
          prop: "remark"
        }
      ]
    },
    invoiceDetailInfo: {
      title: "发票信息",
      api: "/invoice/foreignDetail/get",
      mainColumn: "productCode",
      query: "uk",
      tableData: [
        {
          name: "商品",
          prop: "productCode",
          selectData: {
            type: "DD_PRODUCT"
          }
        },
        {
          name: "品牌",
          prop: "brand"
        },
        {
          name: "毛重",
          prop: "grossWeight",
          formate: "thousands",
          precision: 3
        },
        {
          name: "净重",
          prop: "netWeight",
          formate: "thousands",
          precision: 3
        },
        {
          name: "干重",
          prop: "dryWeight",
          formate: "thousands",
          precision: 3
        },
        {
          name: "发票单价",
          prop: "invoicePrice",
          formate: "thousands",
          precision: 2
        },
        {
          name: "发票金额",
          prop: "invoiceAmount",
          formate: "thousands",
          precision: 3
        }
      ]
    }
  },
  // 收票登记（内贸）
  domesticInvoiceReceiveAudit: {
    api: {
      get: "/invoice/domesticReceive/get"
    },
    editPart1: {
      title: "基本信息",
      formData: [
        {
          label: "单据号",
          prop: "receiveNo"
        },
        {
          label: "发票号",
          prop: "invoiceNo"
        },
        {
          label: "供应商",
          prop: "customerNo",
          selectData: {
            type: "CUST_INFO",
            params: {
              typeCode: "2",
              usingFlag: "1",
              auditStatus: "3"
            }
          }
        },
        {
          label: "发票日期",
          prop: "invoiceDate",
          formate: "date"
        },
        {
          label: "不含税金额",
          prop: "excludeTaxAmount",
          formate: "thousands",
          precision: 2
        },
        {
          label: "税额",
          prop: "taxAmount",
          formate: "thousands",
          precision: 2
        },
        {
          label: "含税金额",
          prop: "includeTaxAmount",
          formate: "thousands",
          precision: 2
        },
        {
          label: "币种",
          prop: "currency",
          dict: "currency"
        },
        {
          label: "业务机构",
          prop: "bizOrganCode",
          selectData: {
            type: "FUNC_ORG"
          }
        },
        {
          label: "业务部门",
          prop: "bizDeptCode",
          selectData: {
            type: "FUNC_DEPT"
          }
        },
        {
          label: "业务员",
          prop: "bizEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "制单人",
          prop: "optEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "备注",
          prop: "remark"
        }
      ]
    },
    invoiceDetailInfo: {
      title: "发票信息",
      api: "/invoice/domReceDetail/listByReceiveNo",
      mainColumn: "lotNo",
      query: "uk",
      tableData: [
        {
          name: "商品",
          prop: "productCode",
          selectData: {
            type: "DD_PRODUCT"
          }
        },
        {
          name: "发票名称",
          prop: "invoiceName"
        },
        {
          name: "发票数量",
          prop: "applyQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "发票价格(不含税)",
          prop: "excludeTaxPrice",
          dformate: "thousands",
          precision: 6
        },
        {
          name: "发票金额(不含税)",
          prop: "excludeTaxAmount",
          formate: "thousands",
          precision: 2
        },
        {
          name: "税率（%）",
          prop: "taxRate",
          dformate: "thousands",
          precision: 2
        },
        {
          name: "税额",
          prop: "taxAmount",
          formate: "thousands",
          precision: 2
        },
        {
          name: "发票金额(含税)",
          prop: "includeTaxPrice",
          formate: "thousands",
          precision: 6
        },
        {
          name: "发票价格(含税)",
          prop: "includeTaxAmount",
          formate: "thousands",
          precision: 2
        },
        {
          name: "备注",
          prop: "remark"
        }
      ]
    }
  },
  // 收票登记（外贸）
  foreignInvoiceReceiveAudit: {
    api: {
      get: "/invoice/foreign/get"
    },
    editPart1: {
      title: "基本信息",
      formData: [
        {
          label: "单据号",
          prop: "invoiceForeignNo"
        },
        {
          label: "发票号",
          prop: "invoiceNo"
        },
        {
          label: "供应商",
          prop: "customerNo",
          selectData: {
            type: "CUST_INFO",
            params: {
              typeCode: "2",
              auditStatus: "3"
            }
          }
        },
        {
          label: "临时/调整发票号",
          prop: "prevInvoiceNo"
        },
        {
          label: "采购批次",
          prop: "lotNo"
        },
        {
          label: "发票日期",
          prop: "invoiceDate",
          formate: "date"
        },
        {
          label: "发票金额",
          prop: "invoiceAmount",
          formate: "thousands",
          precision: 2
        },
        {
          label: "币种",
          prop: "currency",
          dict: "currency"
        },
        {
          label: "临时/调整发票金额",
          prop: "provisionalAmount"
        },
        {
          label: "差额",
          prop: "diffAmount"
        },
        {
          label: "起运地",
          prop: "loadingPlace"
        },
        {
          label: "目的地",
          prop: "dischargePlace"
        },
        {
          label: "价格条款",
          prop: "priceTerm",
          dict: "priceTerm"
        },
        {
          label: "业务机构",
          prop: "bizOrganCode",
          selectData: {
            type: "FUNC_ORG"
          }
        },
        {
          label: "业务部门",
          prop: "bizDeptCode",
          selectData: {
            type: "FUNC_DEPT"
          }
        },
        {
          label: "业务员",
          prop: "bizEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "制单人",
          prop: "optEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "备注",
          prop: "remark"
        }
      ]
    },
    invoiceDetailInfo: {
      title: "发票信息",
      api: "/invoice/foreignDetail/get",
      mainColumn: "productCode",
      query: "uk",
      tableData: [
        {
          name: "商品",
          prop: "productCode",
          selectData: {
            type: "DD_PRODUCT"
          }
        },
        {
          name: "品牌",
          prop: "brand"
        },
        {
          name: "毛重",
          prop: "grossWeight",
          formate: "thousands",
          precision: 3
        },
        {
          name: "净重",
          prop: "netWeight",
          formate: "thousands",
          precision: 3
        },
        {
          name: "干重",
          prop: "dryWeight",
          formate: "thousands",
          precision: 3
        },
        {
          name: "发票单价",
          prop: "invoicePrice",
          formate: "thousands",
          precision: 2
        },
        {
          name: "发票金额",
          prop: "invoiceAmount",
          formate: "thousands",
          precision: 3
        }
      ]
    }
  },
  // 海关增值税发票
  importVatAudit: {
    api: {
      get: "/invoice/importVat/get"
    },
    editPart1: {
      title: "基本信息",
      formData: [
        {
          label: "单据号",
          prop: "importVatNo"
        },
        {
          label: "发票号",
          prop: "invoiceNo"
        },
        {
          label: "发票日期",
          prop: "invoiceDate",
          formate: "date"
        },
        {
          label: "海关",
          prop: "customHouseCode",
          selectData: {
            type: "DD_CUSTOMS"
          }
        },
        {
          label: "采购合同",
          prop: "contractNo"
        },
        {
          label: "税额",
          prop: "taxAmount",
          formate: "thousands",
          precision: 2
        },
        {
          label: "币种",
          prop: "currency",
          dict: "currency"
        },
        {
          label: "缴款期限",
          prop: "dueDate",
          formate: "date"
        },
        {
          label: "业务机构",
          prop: "bizOrganCode",
          selectData: {
            type: "FUNC_ORG"
          }
        },
        {
          label: "业务部门",
          prop: "bizDeptCode",
          selectData: {
            type: "FUNC_DEPT"
          }
        },
        {
          label: "业务员",
          prop: "bizEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "制单人",
          prop: "optEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "备注",
          prop: "remark"
        }
      ]
    },
    importVatDetailInfo: {
      title: "货物信息",
      api: "/invoice/importVatDeta/get",
      mainColumn: "lotNo",
      query: "uk",
      tableData: [
        {
          name: "商品",
          prop: "productCode",
          selectData: {
            type: "DD_PRODUCT"
          }
        },
        {
          name: "发票名称",
          prop: "invoiceName"
        },
        {
          name: "发票数量",
          prop: "invoiceQuantity",
          formate: "thousands",
          precision: 0
        },
        {
          name: "税额",
          prop: "taxAmount",
          formate: "thousands",
          precision: 2
        },
        {
          name: "税率（%）",
          prop: "taxRate",
          dformate: "thousands",
          precision: 2
        },
        {
          name: "完税价格",
          prop: "dutyPayingValue",
          formate: "thousands",
          precision: 2
        }
      ]
    }
  },
  // 提单登记
  ladingBillAudit: {
    api: {
      get: "/warehouse/whLadingBill/get"
    },
    editPart1: {
      title: "提单信息",
      formData: [
        {
          label: "提单号",
          prop: "ladingBillNo"
        },
        {
          label: "提单日期",
          prop: "ladingDate",
          formate: "date"
        },
        {
          label: "提单类型",
          prop: "ladingType",
          dict: "ladingType"
        },
        {
          label: "原始单号",
          prop: "originNo"
        },
        {
          label: "供应商",
          prop: "supplierCode",
          selectData: {
            type: "CUST_INFO",
            params: {
              typeCode: "2",
              auditStatus: "3"
            }
          }
        },
        {
          label: "发货单位",
          prop: "deliverCode",
          selectData: {
            type: "CUST_INFO",
            params: {
              typeCode: "2",
              auditStatus: "3"
            }
          }
        },
        {
          label: "业务机构",
          prop: "bizOrganCode",
          selectData: {
            type: "FUNC_ORG"
          }
        },
        {
          label: "业务部门",
          prop: "bizDeptCode",
          selectData: {
            type: "FUNC_DEPT"
          }
        },
        {
          label: "业务员",
          prop: "bizEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "制单人",
          prop: "optEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "备注",
          prop: "remark"
        },
        {
          label: "采购批次号",
          prop: "preBillNo"
        }
      ]
    },
    product: {
      title: "提单商品信息",
      api: "/warehouse/whLadingBillProduct/get",
      mainColumn: "productName",
      query: "uk",
      tableData: [
        {
          name: "商品",
          prop: "productName"
        },
        ...mainGoodCols,
        {
          name: "货权转移",
          prop: "rightFlag",
          dict: "yesNo"
        },
        {
          name: "件数",
          prop: "itemCount",
          formate: "thousands",
          precision: 0
        },
        {
          name: "计量数量",
          prop: "measurementQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "计量单位",
          prop: "measurementUnitCode",
          dict: "measurementUnit"
        },
        {
          name: "货物重量",
          prop: "ladingQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "货物单位",
          prop: "productUnitCode",
          dict: "goodsUnit"
        },
        ...reserveGoodCols
      ]
    }
  },
  // 提单直发
  ladingOutAudit: {
    api: {
      get: "/warehouse/whLadingOut/getInfoByLadingOutNo"
    },
    editPart1: {
      title: "直发信息",
      formData: [
        {
          label: "提单直发编号",
          prop: "ladingOutNo"
        },
        {
          label: "直发日期",
          prop: "ladingOutDate",
          formate: "date"
        },
        {
          label: "直发类型",
          prop: "ladingOutType",
          dict: "ladingOutType"
        },
        {
          label: "销售批次号",
          prop: "lotNo"
        },
        {
          label: "币种",
          prop: "currencyCode",
          dict: "currency"
        },
        {
          label: "客户",
          prop: "customerCode",
          selectData: {
            type: "CUST_INFO",
            params: {
              usingFlag: "1",
              auditStatus: "3"
            }
          }
        },
        {
          label: "业务机构",
          prop: "bizOrganCode",
          selectData: {
            type: "FUNC_ORG"
          }
        },
        {
          label: "业务部门",
          prop: "bizDeptCode",
          selectData: {
            type: "FUNC_DEPT"
          }
        },
        {
          label: "业务员",
          prop: "bizEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "制单人",
          prop: "optEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "备注",
          prop: "remark"
        }
      ]
    },
    product: {
      title: "直发商品信息",
      api: "/warehouse/whLadingOutProduct/getInfoByLadingOutNo",
      mainColumn: "productName",
      query: "uk",
      tableData: [
        {
          name: "商品",
          prop: "productName"
        },
        ...mainGoodCols,
        {
          name: "直发件数",
          prop: "itemCount",
          formate: "thousands",
          precision: 0
        },
        {
          name: "直发计量数量",
          prop: "measurementQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "确认计量数量",
          prop: "actualMeasurementQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "计量单位",
          prop: "measurementUnitCode",
          dict: "measurementUnit"
        },
        {
          name: "直发货物重量",
          prop: "outQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "确认货物重量",
          prop: "actualQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "货物单位",
          prop: "productUnitCode",
          dict: "goodsUnit"
        },
        {
          name: "货权转移",
          prop: "rightFlag",
          dict: "yesNo"
        },
        {
          name: "货齐",
          prop: "goodsFlag",
          dict: "yesNo"
        },
        {
          name: "结算数量",
          prop: "settlementQuantity",
          dict: "yesNo"
        },
        {
          name: "含税单价",
          prop: "includeTaxPrice",
          formate: "thousands",
          precision: 6
        },
        {
          name: "含税金额",
          prop: "includeTaxAmount",
          formate: "thousands",
          precision: 2
        },
        {
          name: "无税单价",
          prop: "excludeTaxPrice",
          dformate: "thousands",
          precision: 6
        },
        {
          name: "无税金额",
          prop: "excludeTaxAmount",
          formate: "thousands",
          precision: 2
        },
        {
          name: "税率（%）",
          prop: "taxRate",
          dformate: "thousands",
          precision: 2
        },
        {
          name: "税额",
          prop: "taxAmount",
          formate: "thousands",
          precision: 2
        },
        ...reserveGoodCols
      ]
    },
    productPick: {
      title: "直发商品拣配信息",
      api: "/warehouse/whLadingOutPick/getInfoByLadingOutNo",
      mainColumn: "ladingBillNo",
      query: "uk",
      tableData: [
        {
          name: "提单号",
          prop: "ladingBillNo"
        },
        {
          name: "提单商品编号",
          prop: "ladingProductNo"
        },
        {
          name: "供应商",
          prop: "supplierName"
        },
        {
          name: "商品",
          prop: "productName"
        },
        ...mainGoodCols,
        {
          name: "直发件数",
          prop: "itemCount",
          formate: "thousands",
          precision: 0
        },
        {
          name: "直发计量数量",
          prop: "measurementQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "计量单位",
          prop: "measurementUnitCode",
          dict: "measurementUnit"
        },
        {
          name: "直发货物重量",
          prop: "outQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "货物单位",
          prop: "productUnitCode",
          dict: "goodsUnit"
        },
        ...reserveGoodCols
      ]
    },
    // 费用
    costInfo: {
      title: "费用",
      api: "/warehouse/whLadingOutCost/list",
      query: "uk",
      mainColumn: "productName",
      tableData: [
        {
          name: "结算单位",
          prop: "settlementCode"
        },
        {
          name: "费用方向",
          prop: "feeDirection"
        },
        {
          name: "费用名称",
          prop: "feeCode"
        },
        {
          name: "商品名称",
          prop: "productName"
        },
        ...mainGoodCols,
        {
          name: "数量",
          prop: "quantity"
        },
        {
          name: "含税单价",
          prop: "includeTaxPrice"
        },
        {
          name: "含税金额",
          prop: "includeTaxAmount"
        },
        {
          name: "无税单价",
          prop: "excludeTaxPrice"
        },
        {
          name: "无税金额",
          prop: "excludeTaxAmount"
        },
        {
          name: "币种",
          prop: "currencyCode"
        },
        {
          name: "税率（%）",
          prop: "taxRate"
        },
        {
          name: "税额",
          prop: "taxAmount"
        },
        {
          name: "进成本",
          prop: "costFlag"
        },
        {
          name: "进往来",
          prop: "intercourseFlag"
        }
      ]
    }
  },
  // 提单直发确认
  ladingOutCheckAudit: {
    api: {
      get: "/warehouse/whLadingOutCheck/get"
    },
    editPart1: {
      title: "直发信息",
      formData: [
        {
          label: "直发确认编号",
          prop: "ladingOutConfirmNo"
        },
        {
          label: "直发确认日期",
          prop: "ladingOutConfirmDate",
          formate: "date"
        },
        {
          label: "直发类型",
          prop: "ladingOutType",
          dict: "ladingOutType"
        },
        {
          label: "销售批次号",
          prop: "lotNo"
        },
        {
          label: "客户",
          prop: "customerCode",
          selectData: {
            type: "CUST_INFO",
            params: {
              usingFlag: "1",
              auditStatus: "3"
            }
          }
        },
        {
          label: "业务机构",
          prop: "bizOrganCode",
          selectData: {
            type: "FUNC_ORG"
          }
        },
        {
          label: "业务部门",
          prop: "bizDeptCode",
          selectData: {
            type: "FUNC_DEPT"
          }
        },
        {
          label: "业务员",
          prop: "bizEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "制单人",
          prop: "optEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "备注",
          prop: "remark"
        }
      ]
    },
    product: {
      title: "直发商品信息",
      api: "/warehouse/whLadingOutCfmPrd/get",
      mainColumn: "productName",
      query: "uk",
      tableData: [
        {
          name: "商品",
          prop: "productName"
        },
        ...mainGoodCols,

        {
          name: "直发件数",
          prop: "itemCount",
          formate: "thousands",
          precision: 0
        },
        {
          name: "直发计量数量",
          prop: "measurementQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "确认计量数量",
          prop: "actualMeasurementQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "计量单位",
          prop: "measurementUnitCode",
          dict: "measurementUnit"
        },
        {
          name: "直发货物重量",
          prop: "outQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "确认货物重量",
          prop: "actualQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "货物单位",
          prop: "productUnitCode",
          dict: "goodsUnit"
        },
        {
          name: "货权转移",
          prop: "rightFlag",
          dict: "yesNo"
        },
        ...reserveGoodCols
      ]
    },
    productPick: {
      title: "直发商品拣配信息",
      api: "/warehouse/whLadingOutCfmPick/get",
      mainColumn: "ladingBillNo",
      query: "uk",
      tableData: [
        {
          name: "提单号",
          prop: "ladingBillNo"
        },
        {
          name: "提单商品编号",
          prop: "ladingProductNo"
        },
        {
          name: "供应商",
          prop: "supplierName"
        },
        {
          name: "商品",
          prop: "productName"
        },
        ...mainGoodCols,
        {
          name: "直发件数",
          prop: "itemCount",
          formate: "thousands",
          precision: 0
        },
        {
          name: "直发计量数量",
          prop: "measurementQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "确认计量数量",
          prop: "actualMeasurementQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "计量单位",
          prop: "measurementUnitCode",
          dict: "measurementUnit"
        },
        {
          name: "直发货物重量",
          prop: "outQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "确认货物重量",
          prop: "actualQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "货物单位",
          prop: "productUnitCode",
          dict: "goodsUnit"
        },
        ...reserveGoodCols
      ]
    }
  },
  // 入库通知
  inNoticeAudit: {
    api: {
      get: "/warehouse/inBill/get"
    },
    editPart1: {
      title: "入库单信息",
      formData: [
        {
          label: "入库单号",
          prop: "inBillNo"
        },
        {
          label: "入库日期",
          prop: "inDate",
          formate: "date"
        },
        {
          label: "入库类型",
          prop: "inType",
          dict: "inNormalType"
        },
        {
          label: "提单号",
          prop: "ladingBillNo"
        },
        {
          label: "供应商",
          prop: "supplierCode"
        },
        {
          label: "仓库",
          prop: "warehouseCode"
        },
        {
          label: "采购批次号",
          prop: "bizOrganCode"
        },
        {
          label: "币种",
          prop: "currencyCode",
          dict: "currency"
        },
        {
          label: "业务机构",
          prop: "bizOrganCode",
          selectData: {
            type: "FUNC_ORG"
          }
        },
        {
          label: "业务部门",
          prop: "bizDeptCode",
          selectData: {
            type: "FUNC_DEPT"
          }
        },
        {
          label: "业务员",
          prop: "bizEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "制单人",
          prop: "optEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "备注",
          prop: "remark"
        }
      ]
    },
    product: {
      title: "入库商品信息",
      api: "/warehouse/inProduct/listByInBillNo",
      mainColumn: "productName",
      query: "uk",
      tableData: [
        {
          name: "商品",
          prop: "productName"
        },
        ...mainGoodCols,
        ...reserveGoodCols,
        {
          name: "货权转移",
          prop: "rightFlag",
          dict: "yesNo"
        },
        {
          name: "件数",
          prop: "itemCount",
          formate: "thousands",
          precision: 0
        },
        {
          name: "入库数量",
          prop: "inQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "货齐",
          prop: "goodsFlag",
          dict: "yesNo"
        },
        {
          name: "结算数量",
          prop: "settlementQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "验收数量",
          prop: "actualQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "单位",
          prop: "productUnitCode",
          dict: "goodsUnit"
        },
        {
          name: "入库计量数量",
          prop: "measurementQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "计量单位",
          prop: "measurementUnitCode",
          dict: "measurementUnit"
        },
        {
          name: "含税单价",
          prop: "includeTaxPrice"
        },
        {
          name: "含税金额",
          prop: "includeTaxAmount"
        },
        {
          name: "无税单价",
          prop: "excludeTaxPrice"
        },
        {
          name: "无税金额",
          prop: "excludeTaxAmount"
        },
        {
          name: "税率（%）",
          prop: "taxRate"
        },
        {
          name: "税额",
          prop: "taxAmount"
        }
      ]
    },
    // 费用
    costInfo: {
      title: "费用",
      api: "/warehouse/whInBillCost/list",
      query: "uk",
      mainColumn: "productName",
      tableData: [
        {
          name: "结算单位",
          prop: "settlementCode"
        },
        {
          name: "费用方向",
          prop: "feeDirection"
        },
        {
          name: "费用名称",
          prop: "feeCode"
        },
        {
          name: "商品名称",
          prop: "productName"
        },
        ...mainGoodCols,
        {
          name: "数量",
          prop: "quantity"
        },
        {
          name: "含税单价",
          prop: "includeTaxPrice"
        },
        {
          name: "含税金额",
          prop: "includeTaxAmount"
        },
        {
          name: "无税单价",
          prop: "excludeTaxPrice"
        },
        {
          name: "无税金额",
          prop: "excludeTaxAmount"
        },
        {
          name: "币种",
          prop: "currencyCode"
        },
        {
          name: "税率（%）",
          prop: "taxRate"
        },
        {
          name: "税额",
          prop: "taxAmount"
        },
        {
          name: "进成本",
          prop: "costFlag"
        },
        {
          name: "进往来",
          prop: "intercourseFlag"
        }
      ]
    }
  },
  // 入库验收
  inCheckAudit: {
    api: {
      get: "/warehouse/inCheckBill/get"
    },
    editPart1: {
      title: "入库单信息",
      formData: [
        {
          label: "入库单号",
          prop: "inBillNo"
        },
        {
          label: "入库日期",
          prop: "inDate",
          formate: "date"
        },
        {
          label: "入库类型",
          prop: "inType",
          dict: "inNormalType"
        },
        {
          label: "提单号",
          prop: "ladingBillNo"
        },
        {
          label: "供应商",
          prop: "supplierName"
        },
        {
          label: "仓库",
          prop: "warehouseName"
        },
        {
          label: "采购批次号",
          prop: "lotNo"
        }
      ]
    },
    editPart2: {
      title: "入库验收单信息信息",
      formData: [
        {
          label: "入库验收单号",
          prop: "inCheckNo"
        },
        {
          label: "入库验收日期",
          prop: "inCheckDate",
          formate: "date"
        },
        {
          label: "业务机构",
          prop: "bizOrganCode",
          selectData: {
            type: "FUNC_ORG"
          }
        },
        {
          label: "业务部门",
          prop: "bizDeptCode",
          selectData: {
            type: "FUNC_DEPT"
          }
        },
        {
          label: "业务员",
          prop: "bizEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "制单人",
          prop: "optEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "备注",
          prop: "remark"
        }
      ]
    },
    product: {
      title: "入库验收商品信息",
      api: "/warehouse/inCheckProduct/listByInCheckNo",
      mainColumn: "productName",
      query: "uk",
      tableData: [
        {
          name: "商品",
          prop: "productName"
        },
        ...mainGoodCols,
        ...reserveGoodCols,
        {
          name: "货权转移",
          prop: "rightFlag",
          dict: "yesNo"
        },
        {
          name: "验收件数",
          prop: "actualCount",
          formate: "thousands",
          precision: 0
        },
        {
          name: "未验收数量",
          prop: "restQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "验收数量",
          prop: "actualQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "单位",
          prop: "productUnitCode",
          dict: "goodsUnit"
        },
        {
          name: "未验收计量数量",
          prop: "restMeasurementQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "验收计量数量",
          prop: "actualMeasurementQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "计量单位",
          prop: "measurementUnitCode",
          dict: "measurementUnit"
        }
      ]
    },
    productDetail: {
      title: "入库验收商品明细信息",
      api: "/warehouse/inProductDetail/listByInCheckNo",
      mainColumn: "inBillNo",
      query: "uk",
      tableData: [
        {
          name: "商品",
          prop: "productName"
        },
        ...mainGoodCols,
        ...reserveGoodCols,
        {
          name: "库区",
          prop: "stockArea"
        },
        {
          name: "库位",
          prop: "stockPosition"
        },
        {
          name: "仓储号",
          prop: "stockNo"
        },
        {
          name: "验收件数",
          prop: "actualCount",
          formate: "thousands",
          precision: 0
        },
        {
          name: "验收数量",
          prop: "actualQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "单位",
          prop: "productUnitCode",
          dict: "goodsUnit"
        },
        {
          name: "验收计量数量",
          prop: "actualMeasurementQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "计量单位",
          prop: "measurementUnitCode",
          dict: "measurementUnit"
        }
      ]
    }
  },
  // 库存调整
  revisionAudit: {
    api: {
      get: "/warehouse/whRevisionBill/get"
    },
    editPart1: {
      title: "库存调整单信息",
      formData: [
        {
          label: "库存调整单号",
          prop: "revisionNo"
        },
        {
          label: "调整日期",
          prop: "revisionDate",
          formate: "date"
        },
        {
          label: "仓库",
          prop: "warehouseCode",
          selectData: {
            type: "DD_WAREHOUSE"
          }
        },
        {
          label: "业务机构",
          prop: "bizOrganCode",
          selectData: {
            type: "FUNC_ORG"
          }
        },
        {
          label: "业务部门",
          prop: "bizDeptCode",
          selectData: {
            type: "FUNC_DEPT"
          }
        },
        {
          label: "业务员",
          prop: "bizEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "制单人",
          prop: "optEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "备注",
          prop: "remark"
        }
      ]
    },
    stockProduct: {
      title: "库存商品信息",
      api: "/warehouse/whRevisionProduct/listStockByRevisionNo",
      mainColumn: "stockDetailNo",
      query: "uk",
      tableData: [
        {
          name: "库存商品明细编号",
          prop: "stockDetailNo"
        },
        {
          name: "入库单号",
          prop: "inBillNo"
        },
        {
          name: "入库商品编号",
          prop: "inProductNo"
        },
        {
          name: "入库商品明细编号",
          prop: "inDetailNo"
        },
        {
          name: "商品",
          prop: "productName"
        },
        ...mainGoodCols,
        ...reserveGoodCols,
        {
          name: "库存件数",
          prop: "itemCount",
          formate: "thousands",
          precision: 0
        },
        {
          name: "库存数量",
          prop: "quantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "可卖数量",
          prop: "restQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "单位",
          prop: "productUnitCode",
          dict: "goodsUnit"
        },
        {
          name: "库存计量数量",
          prop: "measurementQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "可卖计量数量",
          prop: "restMeasurementQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "计量单位",
          prop: "measurementUnitCode",
          dict: "measurementUnit"
        }
      ]
    },
    revisionProduct: {
      title: "库存调整商品信息",
      api: "/warehouse/whRevisionProduct/listByRevisionNo",
      mainColumn: "stockDetailNo",
      query: "uk",
      tableData: [
        {
          name: "库存商品明细编号",
          prop: "stockDetailNo"
        },
        {
          name: "入库单号",
          prop: "inBillNo"
        },
        {
          name: "入库商品编号",
          prop: "inProductNo"
        },
        {
          name: "入库商品明细编号",
          prop: "inDetailNo"
        },
        {
          name: "商品",
          prop: "productName"
        },
        ...mainGoodCols,
        ...reserveGoodCols,
        {
          name: "调整件数",
          prop: "revision",
          formate: "thousands",
          precision: 0
        },
        {
          name: "调整数量",
          prop: "revisionQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "单位",
          prop: "productUnitCode",
          dict: "goodsUnit"
        },
        {
          name: "调整计量数量",
          prop: "revisionMeasurementQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "计量单位",
          prop: "measurementUnitCode",
          dict: "measurementUnit"
        }
      ]
    }
  },
  // 库存冻结
  frozenBillAudit: {
    api: {
      get: "/warehouse/whFrozenBill/get"
    },
    editPart1: {
      title: "库存冻结单信息",
      formData: [
        {
          label: "库存冻结单号",
          prop: "frozenBillNo"
        },
        {
          label: "冻结有效期",
          prop: "expireDate",
          formate: "date"
        },
        {
          label: "仓库",
          prop: "warehouseCode",
          selectData: {
            type: "DD_WAREHOUSE"
          }
        },
        {
          label: "业务机构",
          prop: "bizOrganCode",
          selectData: {
            type: "FUNC_ORG"
          }
        },
        {
          label: "业务部门",
          prop: "bizDeptCode",
          selectData: {
            type: "FUNC_DEPT"
          }
        },
        {
          label: "业务员",
          prop: "bizEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "制单人",
          prop: "optEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "备注",
          prop: "remark"
        }
      ]
    },
    product: {
      title: "库存冻结商品信息",
      api: "/warehouse/whFrozenBill/listProductByInCheckNo",
      mainColumn: "stockDetailNo",
      query: "uk",
      tableData: [
        {
          name: "库存商品明细编号",
          prop: "stockDetailNo"
        },
        {
          name: "入库单号",
          prop: "inBillNo"
        },
        {
          name: "入库商品编号",
          prop: "inProductNo"
        },
        {
          name: "入库商品明细编号",
          prop: "inDetailNo"
        },
        {
          name: "商品",
          prop: "productName"
        },
        ...mainGoodCols,
        ...reserveGoodCols,
        {
          name: "库存件数",
          prop: "itemCount",
          formate: "thousands",
          precision: 0
        },
        {
          name: "冻结件数",
          prop: "frozenCount",
          formate: "thousands",
          precision: 0
        },
        {
          name: "库存数量",
          prop: "quantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "冻结数量",
          prop: "frozenQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "单位",
          prop: "productUnitCode",
          dict: "goodsUnit"
        },
        {
          name: "库存计量数量",
          prop: "measurementQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "冻结计量数量",
          prop: "frozenMeasurementQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "计量单位",
          prop: "measurementUnitCode",
          dict: "measurementUnit"
        }
      ]
    }
  },
  // 出库通知
  outNoticeAudit: {
    api: {
      get: "/warehouse/whOutBill/get"
    },
    editPart1: {
      title: "出库信息",
      formData: [
        {
          label: "出库单号",
          prop: "outBillNo"
        },
        {
          label: "出库日期",
          prop: "outDate",
          formate: "date"
        },
        {
          label: "出库类型",
          prop: "outType",
          dict: "outNormalType"
        },
        {
          label: "仓库",
          prop: "warehouseName"
        },
        {
          label: "销售批次号",
          prop: "lotNo"
        },
        {
          label: "客户",
          prop: "customerNo",
          selectData: {
            type: "CUST_INFO",
            params: {
              usingFlag: "1",
              auditStatus: "3"
            }
          }
        },
        {
          label: "业务机构",
          prop: "bizOrganCode",
          selectData: {
            type: "FUNC_ORG"
          }
        },
        {
          label: "业务部门",
          prop: "bizDeptCode",
          selectData: {
            type: "FUNC_DEPT"
          }
        },
        {
          label: "业务员",
          prop: "bizEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "制单人",
          prop: "optEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "备注",
          prop: "remark"
        }
      ]
    },
    product: {
      title: "出库商品信息",
      api: "/warehouse/whOutBill/listProduct",
      mainColumn: "productName",
      query: "uk",
      tableData: [
        {
          name: "商品",
          prop: "productName"
        },
        ...mainGoodCols,
        ...reserveGoodCols,
        {
          name: "货权转移",
          prop: "rightFlag",
          dict: "yesNo"
        },
        {
          name: "件数",
          prop: "itemCount",
          formate: "thousands",
          precision: 0
        },
        {
          name: "出库数量",
          prop: "outQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "货齐",
          prop: "goodsFlag",
          dict: "yesNo"
        },
        {
          name: "结算数量",
          prop: "settlementQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "单位",
          prop: "productUnitCode",
          dict: "goodsUnit"
        },
        {
          name: "出库计量数量",
          prop: "measurementQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "计量单位",
          prop: "measurementUnitCode",
          dict: "measurementUnit"
        }
      ]
    },
    productDetail: {
      title: "出库商品拣配信息",
      api: "/warehouse/whOutBill/listProductDetail",
      mainColumn: "inBillNo",
      query: "uk",
      tableData: [
        {
          name: "库存商品明细编号",
          prop: "stockDetailNo"
        },
        {
          name: "入库单号",
          prop: "inBillNo"
        },
        {
          name: "入库商品编号",
          prop: "inProductNo"
        },
        {
          name: "入库商品明细编号",
          prop: "inDetailNo"
        },
        {
          name: "商品",
          prop: "productName"
        },
        ...mainGoodCols,
        ...reserveGoodCols,
        {
          name: "库区",
          prop: "stockArea"
        },
        {
          name: "库位",
          prop: "stockPosition"
        },
        {
          name: "仓储号",
          prop: "stockNo"
        },
        {
          name: "件数",
          prop: "itemCount",
          formate: "thousands",
          precision: 0
        },
        {
          name: "出库数量",
          prop: "inQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "单位",
          prop: "productUnitCode",
          dict: "goodsUnit"
        },
        {
          name: "出库计量数量",
          prop: "measurementQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "计量单位",
          prop: "measurementUnitCode",
          dict: "measurementUnit"
        }
      ]
    },
    // 费用
    costInfo: {
      title: "费用",
      api: "/warehouse/whOutBillCost/list",
      query: "uk",
      mainColumn: "productName",
      tableData: [
        {
          name: "结算单位",
          prop: "settlementCode"
        },
        {
          name: "费用方向",
          prop: "feeDirection"
        },
        {
          name: "费用名称",
          prop: "feeCode"
        },
        {
          name: "商品名称",
          prop: "productName"
        },
        ...mainGoodCols,
        {
          name: "数量",
          prop: "quantity"
        },
        {
          name: "含税单价",
          prop: "includeTaxPrice"
        },
        {
          name: "含税金额",
          prop: "includeTaxAmount"
        },
        {
          name: "无税单价",
          prop: "excludeTaxPrice"
        },
        {
          name: "无税金额",
          prop: "excludeTaxAmount"
        },
        {
          name: "币种",
          prop: "currencyCode"
        },
        {
          name: "税率（%）",
          prop: "taxRate"
        },
        {
          name: "税额",
          prop: "taxAmount"
        },
        {
          name: "进成本",
          prop: "costFlag"
        },
        {
          name: "进往来",
          prop: "intercourseFlag"
        }
      ]
    }
  },
  // 库存调出
  transferOutAudit: {
    api: {
      get: "/warehouse/whTransferOutBill/get"
    },
    editPart1: {
      title: "库存调出信息",
      formData: [
        {
          label: "单据号",
          prop: "transferOutBillNo"
        },
        {
          label: "调拨日期",
          prop: "transferOutDate"
        },
        {
          label: "调出仓库",
          prop: "outWarehouseCode",
          selectData: {
            type: "DD_WAREHOUSE"
          }
        },
        {
          label: "调入仓库",
          prop: "inWarehouseCode",
          selectData: {
            type: "DD_WAREHOUSE"
          }
        },
        {
          label: "调出部门",
          prop: "outDeptCode",
          selectData: {
            type: "TREE_DEPT"
          }
        },
        {
          label: "调入部门",
          prop: "inDeptCode",
          selectData: {
            type: "TREE_DEPT"
          }
        },
        {
          label: "业务机构",
          prop: "bizOrganCode",
          selectData: {
            type: "FUNC_ORG"
          }
        },
        {
          label: "业务部门",
          prop: "bizDeptCode",
          selectData: {
            type: "FUNC_DEPT"
          }
        },
        {
          label: "业务员",
          prop: "bizEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "制单人",
          prop: "optEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "备注",
          prop: "remark"
        }
      ]
    },
    transferOutProduct: {
      title: "调出商品信息",
      api: "/warehouse/whTransferOutProduct/listByTransferOutBillNo",
      mainColumn: "inBillNo",
      query: "uk",
      tableData: [
        {
          name: "库存商品明细编号",
          prop: "stockDetailNo"
        },
        {
          name: "商品",
          prop: "productName"
        },
        ...mainGoodCols,
        {
          name: "调拨件数",
          prop: "itemCount",
          formate: "thousands",
          precision: 0
        },
        {
          name: "调拨出库数量",
          prop: "transferOutQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "单位",
          prop: "productUnitCode",
          dict: "goodsUnit"
        },
        {
          name: "调拨出库计量数量",
          prop: "transferOutMeasurementQty",
          formate: "thousands",
          precision: 0
        },
        {
          name: "计量单位",
          prop: "measurementUnitCode",
          dict: "measurementUnit"
        },
        {
          name: "供应商",
          prop: "supplierName"
        },
        {
          name: "发货单位",
          prop: "deliverName"
        },
        {
          name: "库区",
          prop: "stockArea"
        },
        {
          name: "库位",
          prop: "stockPosition"
        },
        {
          name: "仓储号",
          prop: "stockNo"
        },
        ...reserveGoodCols
      ]
    }
  },
  // 库存调入
  transferInAudit: {
    api: {
      get: "/warehouse/whTransferInBill/get"
    },
    editPart1: {
      title: "库存调出信息",
      formData: [
        {
          label: "单据号",
          prop: "transferInBillNo"
        },
        {
          label: "调入日期",
          prop: "transferInDate"
        },
        {
          label: "库存调出单号",
          prop: "transferOutBillNo"
        },
        {
          label: "调入仓库",
          prop: "inWarehouseCode",
          selectData: {
            type: "DD_WAREHOUSE"
          }
        },
        {
          label: "调出仓库",
          prop: "outWarehouseCode",
          selectData: {
            type: "DD_WAREHOUSE"
          }
        },
        {
          label: "调入部门",
          prop: "inDeptCode",
          selectData: {
            type: "TREE_DEPT"
          }
        },
        {
          label: "调出部门",
          prop: "outDeptCode",
          selectData: {
            type: "TREE_DEPT"
          }
        },
        {
          label: "业务机构",
          prop: "bizOrganCode",
          selectData: {
            type: "FUNC_ORG"
          }
        },
        {
          label: "业务部门",
          prop: "bizDeptCode",
          selectData: {
            type: "FUNC_DEPT"
          }
        },
        {
          label: "业务员",
          prop: "bizEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "制单人",
          prop: "optEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "备注",
          prop: "remark"
        }
      ]
    },
    transferOutProduct: {
      title: "调出商品信息",
      api: "/warehouse/whTransferInProduct/listByTransferInBillNo",
      mainColumn: "inBillNo",
      query: "uk",
      tableData: [
        {
          name: "库存调出商品编号",
          prop: "transferOutProductNo"
        },
        {
          name: "库存商品明细编号",
          prop: "stockDetailNo"
        },
        {
          name: "商品",
          prop: "productName"
        },
        ...mainGoodCols,
        {
          name: "调拨件数",
          prop: "itemCount",
          formate: "thousands",
          precision: 0
        },
        {
          name: "调拨入库数量",
          prop: "transferInQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "单位",
          prop: "productUnitCode",
          dict: "goodsUnit"
        },
        {
          name: "调拨入库计量数量",
          prop: "transferInMeasurementQty",
          formate: "thousands",
          precision: 0
        },
        {
          name: "计量单位",
          prop: "measurementUnitCode",
          dict: "measurementUnit"
        },
        {
          name: "供应商",
          prop: "supplierName"
        },
        {
          name: "发货单位",
          prop: "deliverName"
        },
        {
          name: "库区",
          prop: "stockArea"
        },
        {
          name: "库位",
          prop: "stockPosition"
        },
        {
          name: "仓储号",
          prop: "stockNo"
        },
        ...reserveGoodCols
      ]
    },
    // 费用
    costInfo: {
      title: "费用",
      api: "/warehouse/whTransferInCost/list",
      query: "uk",
      mainColumn: "productName",
      tableData: [
        {
          name: "结算单位",
          prop: "settlementCode"
        },
        {
          name: "费用方向",
          prop: "feeDirection"
        },
        {
          name: "费用名称",
          prop: "feeCode"
        },
        {
          name: "商品名称",
          prop: "productName"
        },
        ...mainGoodCols,
        {
          name: "数量",
          prop: "quantity"
        },
        {
          name: "含税单价",
          prop: "includeTaxPrice"
        },
        {
          name: "含税金额",
          prop: "includeTaxAmount"
        },
        {
          name: "无税单价",
          prop: "excludeTaxPrice"
        },
        {
          name: "无税金额",
          prop: "excludeTaxAmount"
        },
        {
          name: "币种",
          prop: "currencyCode"
        },
        {
          name: "税率（%）",
          prop: "taxRate"
        },
        {
          name: "税额",
          prop: "taxAmount"
        },
        {
          name: "进成本",
          prop: "costFlag"
        },
        {
          name: "进往来",
          prop: "intercourseFlag"
        }
      ]
    }
  },
  // 出库实提
  outCheckAudit: {
    api: {
      get: "/warehouse/whOutCheckBill/get"
    },
    editPart1: {
      title: "出库单信息",
      formData: [
        {
          label: "出库单号",
          prop: "outBillNo"
        },
        {
          label: "出库日期",
          prop: "outDate"
        },
        {
          label: "出库类型",
          prop: "outType",
          dict: "outNormalType"
        },
        {
          label: "仓库",
          prop: "warehouseCode",
          selectData: {
            type: "DD_WAREHOUSE"
          }
        },
        {
          label: "客户",
          prop: "customerCode",
          selectData: {
            type: "CUST_INFO",
            params: {
              usingFlag: "1",
              auditStatus: "3"
            }
          }
        }
      ]
    },
    editPart2: {
      title: "出库实提单信息",
      formData: [
        {
          label: "出库实提单号",
          prop: "outCheckNo"
        },
        {
          label: "出库实提日期",
          prop: "outCheckDate"
        },
        {
          label: "业务机构",
          prop: "bizOrganCode",
          selectData: {
            type: "FUNC_ORG"
          }
        },
        {
          label: "业务部门",
          prop: "bizDeptCode",
          selectData: {
            type: "FUNC_DEPT"
          }
        },
        {
          label: "业务员",
          prop: "bizEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "制单人",
          prop: "optEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "备注",
          prop: "remark"
        }
      ]
    },
    product: {
      title: "出库实提商品信息",
      api: "/warehouse/whOutCheckBill/listProduct",
      mainColumn: "productName",
      query: "uk",
      tableData: [
        {
          name: "商品",
          prop: "productName"
        },
        ...mainGoodCols,
        ...reserveGoodCols,
        {
          name: "货权转移",
          prop: "rightFlag",
          dict: "yesNo"
        },
        {
          name: "件数",
          prop: "itemCount",
          formate: "thousands",
          precision: 0
        },
        {
          name: "出库数量",
          prop: "outQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "实提数量",
          prop: "actualQuantity",
          formate: "thousands",
          precision: 0
        },
        {
          name: "单位",
          prop: "productUnitCode",
          dict: "goodsUnit"
        },
        {
          name: "出库计量数量",
          prop: "measurementQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "实提计量数量",
          prop: "actualMeasurementQuantity",
          formate: "thousands",
          precision: 0
        },
        {
          name: "计量单位",
          prop: "measurementUnitCode",
          dict: "measurementUnit"
        }
      ]
    },
    productDetail: {
      title: "出库实提商品拣配信息",
      api: "/warehouse/whOutCheckBill/listProductDetail",
      mainColumn: "inBillNo",
      query: "uk",
      tableData: [
        {
          name: "库存商品明细编号",
          prop: "stockDetailNo"
        },
        {
          name: "入库单号",
          prop: "inBillNo"
        },
        {
          name: "入库商品编号",
          prop: "inProductNo"
        },
        {
          name: "入库商品明细编号",
          prop: "inDetailNo"
        },
        {
          name: "商品",
          prop: "productName"
        },
        ...mainGoodCols,
        ...reserveGoodCols,
        {
          name: "库区",
          prop: "stockArea"
        },
        {
          name: "库位",
          prop: "stockPosition"
        },
        {
          name: "仓储号",
          prop: "stockNo"
        },
        {
          name: "件数",
          prop: "itemCount",
          formate: "thousands",
          precision: 0
        },
        {
          name: "实提数量",
          prop: "actualQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "单位",
          prop: "productUnitCode",
          dict: "goodsUnit"
        },
        {
          name: "实提计量数量",
          prop: "actualMeasurementQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "计量单位",
          prop: "measurementUnitCode",
          dict: "measurementUnit"
        }
      ]
    }
  },
  // 出库交单
  negotiateAudit: {
    api: {
      get: "/warehouse/whNegotiate/get"
    },
    editPart1: {
      title: "交单信息",
      formData: [
        {
          label: "申请单号",
          prop: "negotiateNo"
        },
        {
          label: "销售合同",
          prop: "contractNo"
        },
        {
          label: "客户",
          prop: "customerCode",
          selectData: {
            type: "CUST_INFO",
            params: {
              typeCode: "12", // 不写:所有客户供应商经济商仓储公司， '1'只显示客户，'2'只显示供应商，
              usingFlag: "1",
              auditStatus: "3"
            }
          }
        },
        {
          label: "业务机构",
          prop: "bizOrganCode",
          selectData: {
            type: "FUNC_ORG"
          }
        },
        {
          label: "业务部门",
          prop: "bizDeptCode",
          selectData: {
            type: "FUNC_DEPT"
          }
        },
        {
          label: "业务员",
          prop: "bizEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "制单人",
          prop: "optEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "本次交单金额",
          prop: "originalCurrencyAmt",
          formate: "thousands",
          precision: 3
        },
        {
          label: "预计交单时间",
          prop: "negotiateDate",
          formate: "date"
        },
        {
          label: "汇票付款期限",
          prop: "draftsAtDate",
          formate: "date"
        },
        {
          label: "备注",
          prop: "remark"
        }
      ]
    },
    editPart2: {
      title: "信用证信息",
      formData: [
        {
          label: "信用证号",
          prop: "lcNo"
        },
        {
          label: "信用证金额",
          prop: "lcAmt",
          formate: "thousands",
          precision: 3
        },
        {
          label: "币种",
          prop: "currencyCode",
          dict: "currency"
        },
        {
          label: "交单行",
          prop: "negotiateBankCode",
          selectData: {
            type: "DD_BANK"
          }
        }
      ]
    },
    product: {
      title: "交单商品信息",
      api: "/warehouse/whNegotiateOut/get",
      mainColumn: "productName",
      query: "uk",
      tableData: [
        {
          name: "出库单号",
          prop: "outBillNo"
        },
        {
          name: "出库日期",
          prop: "outDate",
          formate: "date"
        },
        {
          name: "商品",
          prop: "productName"
        },
        ...mainGoodCols,
        ...reserveGoodCols,
        {
          name: "出库件数",
          prop: "itemCount",
          formate: "thousands",
          precision: 0
        },
        {
          name: "出库数量",
          prop: "outQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "单位",
          prop: "productUnitCode",
          dict: "goodsUnit"
        },
        {
          name: "出库计量数量",
          prop: "measurementQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "计量单位",
          prop: "measurementUnitCode",
          dict: "measurementUnit"
        },
        {
          name: "交单金额",
          prop: "negotiateAmount",
          formate: "thousands",
          precision: 3
        },
        {
          name: "币种",
          prop: "currencyCode",
          dict: "currency"
        }
      ]
    }
  },
  // 采购退货
  inReturnAudit: {
    api: {
      get: "/warehouse/whInReturnBill/get"
    },
    editPart1: {
      title: "采购退货信息",
      formData: [
        {
          label: "单据号",
          prop: "inReturnNo"
        },
        {
          label: "采购退货日期",
          prop: "inReturnDate",
          formate: "date"
        },
        {
          label: "退换货类型",
          prop: "returnType",
          dict: "returnType"
        },
        {
          label: "供应商",
          prop: "supplierName"
        },
        {
          label: "发货单位",
          prop: "deliverName"
        },
        {
          label: "仓库",
          prop: "warehouseCode",
          selectData: {
            type: "DD_WAREHOUSE"
          }
        },
        {
          label: "业务机构",
          prop: "bizOrganCode",
          selectData: {
            type: "FUNC_ORG"
          }
        },
        {
          label: "业务部门",
          prop: "bizDeptCode",
          selectData: {
            type: "FUNC_DEPT"
          }
        },
        {
          label: "业务员",
          prop: "bizEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "制单人",
          prop: "optEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "备注",
          prop: "remark"
        }
      ]
    },
    product: {
      title: "采购退换货商品信息",
      api: "/warehouse/whInReturnProduct/listByInReturnNo",
      mainColumn: "inProductNo",
      query: "uk",
      tableData: [
        {
          name: "库存商品明细编号",
          prop: "stockDetailNo"
        },
        {
          name: "商品",
          prop: "productName"
        },
        ...mainGoodCols,
        {
          name: "退货件数",
          prop: "itemCount",
          formate: "thousands",
          precision: 0
        },
        {
          name: "退货数量",
          prop: "outQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "商品单位",
          prop: "productUnitCode",
          dict: "goodsUnit"
        },
        {
          name: "计量数量",
          prop: "measurementQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "计量单位",
          prop: "measurementUnitCode",
          dict: "measurementUnit"
        },
        {
          name: "库区",
          prop: "stockArea"
        },
        {
          name: "库位",
          prop: "stockPosition"
        },
        {
          name: "仓储号",
          prop: "stockNo"
        },
        ...reserveGoodCols
      ]
    },
    // 费用
    costInfo: {
      title: "费用",
      api: "/warehouse/whInReturnCost/list",
      query: "uk",
      mainColumn: "productName",
      tableData: [
        {
          name: "结算单位",
          prop: "settlementCode"
        },
        {
          name: "费用方向",
          prop: "feeDirection"
        },
        {
          name: "费用名称",
          prop: "feeCode"
        },
        {
          name: "商品名称",
          prop: "productName"
        },
        ...mainGoodCols,
        {
          name: "数量",
          prop: "quantity"
        },
        {
          name: "含税单价",
          prop: "includeTaxPrice"
        },
        {
          name: "含税金额",
          prop: "includeTaxAmount"
        },
        {
          name: "无税单价",
          prop: "excludeTaxPrice"
        },
        {
          name: "无税金额",
          prop: "excludeTaxAmount"
        },
        {
          name: "币种",
          prop: "currencyCode"
        },
        {
          name: "税率（%）",
          prop: "taxRate"
        },
        {
          name: "税额",
          prop: "taxAmount"
        },
        {
          name: "进成本",
          prop: "costFlag"
        },
        {
          name: "进往来",
          prop: "intercourseFlag"
        }
      ]
    }
  },
  // 销售退货
  outReturnAudit: {
    api: {
      get: "/warehouse/whOutReturnBill/get"
    },
    editPart1: {
      title: "销售退货信息",
      formData: [
        {
          label: "单据号",
          prop: "outReturnNo"
        },
        {
          label: "销售退货日期",
          prop: "outReturnDate",
          formate: "date"
        },
        {
          label: "退换货类型",
          prop: "returnType",
          dict: "returnType"
        },
        {
          label: "客户",
          prop: "customerNo",
          selectData: {
            type: "CUST_INFO",
            params: {
              typeCode: "1",
              usingFlag: "1",
              auditStatus: "3"
            }
          }
        },
        {
          label: "退入仓库",
          prop: "warehouseCode",
          selectData: {
            type: "DD_WAREHOUSE"
          }
        },
        {
          label: "业务机构",
          prop: "bizOrganCode",
          selectData: {
            type: "FUNC_ORG"
          }
        },
        {
          label: "业务部门",
          prop: "bizDeptCode",
          selectData: {
            type: "FUNC_DEPT"
          }
        },
        {
          label: "业务员",
          prop: "bizEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "制单人",
          prop: "optEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "备注",
          prop: "remark"
        }
      ]
    },
    product: {
      title: "销售退换货商品信息",
      api: "/warehouse/whOutReturnProduct/listByOutReturnNo",
      mainColumn: "productName",
      query: "uk",
      tableData: [
        {
          name: "原出库单号",
          prop: "outBillNo"
        },
        {
          name: "原出库商品编号",
          prop: "outProductNo"
        },
        {
          name: "商品",
          prop: "productName"
        },
        ...mainGoodCols,
        {
          name: "退货件数",
          prop: "itemCount",
          formate: "thousands",
          precision: 0
        },
        {
          name: "退货数量",
          prop: "inQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "商品单位",
          prop: "productUnitName",
          dict: "goodsUnit"
        },
        {
          name: "计量数量",
          prop: "measurementQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "计量单位",
          prop: "measurementUnitCode",
          dict: "measurementUnit"
        }
      ]
    },
    // 费用
    costInfo: {
      title: "费用",
      api: "/warehouse/whOutReturnCost/list",
      query: "uk",
      mainColumn: "productName",
      tableData: [
        {
          name: "结算单位",
          prop: "settlementCode"
        },
        {
          name: "费用方向",
          prop: "feeDirection"
        },
        {
          name: "费用名称",
          prop: "feeCode"
        },
        {
          name: "商品名称",
          prop: "productName"
        },
        ...mainGoodCols,
        {
          name: "数量",
          prop: "quantity"
        },
        {
          name: "含税单价",
          prop: "includeTaxPrice"
        },
        {
          name: "含税金额",
          prop: "includeTaxAmount"
        },
        {
          name: "无税单价",
          prop: "excludeTaxPrice"
        },
        {
          name: "无税金额",
          prop: "excludeTaxAmount"
        },
        {
          name: "币种",
          prop: "currencyCode"
        },
        {
          name: "税率（%）",
          prop: "taxRate"
        },
        {
          name: "税额",
          prop: "taxAmount"
        },
        {
          name: "进成本",
          prop: "costFlag"
        },
        {
          name: "进往来",
          prop: "intercourseFlag"
        }
      ]
    }
  },
  // 盘盈亏
  profitAndLossAudit: {
    api: {
      get: "/warehouse/whPnl/get"
    },
    editPart1: {
      title: "盘盈亏信息",
      formData: [
        {
          label: "单据号",
          prop: "pnlNo"
        },
        {
          label: "盘盈亏日期",
          prop: "pnlDate",
          formate: "date"
        },
        {
          label: "仓库",
          prop: "warehouseCode",
          selectData: {
            type: "DD_WAREHOUSE"
          }
        },
        {
          label: "业务机构",
          prop: "bizOrganCode",
          selectData: {
            type: "FUNC_ORG"
          }
        },
        {
          label: "业务部门",
          prop: "bizDeptCode",
          selectData: {
            type: "FUNC_DEPT"
          }
        },
        {
          label: "业务员",
          prop: "bizEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "制单人",
          prop: "optEmployeeCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "备注",
          prop: "remark"
        }
      ]
    },
    product: {
      title: "盘盈亏商品信息",
      api: "/warehouse/whPnlProduct/listByPnlNo",
      mainColumn: "inProductNo",
      query: "uk",
      tableData: [
        {
          name: "库存商品明细编号",
          prop: "stockDetailNo"
        },
        {
          name: "商品",
          prop: "productName"
        },
        ...mainGoodCols,
        {
          name: "盘盈亏类型",
          prop: "pnlType",
          dict: "pnlType"
        },
        {
          name: "盘盈亏件数",
          prop: "itemCount",
          formate: "thousands",
          precision: 0
        },
        {
          name: "盘盈亏数量",
          prop: "pnlQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "商品单位",
          prop: "productUnitCode",
          dict: "goodsUnit"
        },
        {
          name: "盘货计量数量",
          prop: "measurementQuantity",
          formate: "thousands",
          precision: 3
        },
        {
          name: "计量单位",
          prop: "measurementUnitCode",
          dict: "measurementUnit"
        },
        {
          name: "库区",
          prop: "stockArea"
        },
        {
          name: "库位",
          prop: "stockPosition"
        },
        {
          name: "仓储号",
          prop: "stockNo"
        },
        ...reserveGoodCols
      ]
    }
  },// 策略审批
  strategyAudit: {
    api: {
      get: "/strg/strategy/get"
    },
    editPart1: {
      title: "主信息",
      formData: [
        {
          label: "上级策略",
          prop: "parentStrategyCode",
          isHide: [
            {
              key: 'isOptimizeFlag',
              value: ['1']
            }
          ]
        },
        {
          label: "机构名称",
          prop: "organCode",
          selectData: {
            type: "FUNC_ORG"
          }
        },
        {
          label: "部门名称",
          prop: "deptCode",
          selectData: {
            type: "FUNC_DEPT"
          }
        },
        {
          label: "策略名称",
          prop: "strategyName"
        },
        {
          label: "策略编号",
          prop: "strategyCode"
        },
        {
          label: "考核主体",
          prop: "projectCode",
          selectData: {
            type: "PROJECT"
          }
        },
        {
          label: "策略类型",
          prop: "strategyNature",
          dict: "strategyNature"
        },
        {
          label: "策略制定日期",
          prop: "makeDate",
          formate: "date"
        },
        {
          label: "策略层级",
          prop: "strgLevel",
          dict: "strgLevel"
        },
        {
          label: "套期方式",
          prop: "hedgingMode",
          dict: "hedgingMode",
          isHide: [{
            key: 'strategyNature',
            value: ['2', '4']
          }]
        }
      ]
    },
    editPart2: {
      title: "副信息",
      formData: [
        {
          label: "策略目的",
          prop: "purpose",
          selectData: {
            type: "DD_TYPE"
          }
        },
        {
          label: "申请人",
          prop: "applicant",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "最大占用资金",
          prop: "maxFund"
        },
        {
          label: "损失限额",
          prop: "limitLoss"
        },
        {
          label: "预期盈利",
          prop: "expectProfit"
        },
        {
          label: "策略开始日期",
          prop: "startDate",
          formate: "date"
        },
        {
          label: "策略结束日期",
          prop: "endDate",
          formate: "date"
        },
      ]
    },
    buyDetail: {
      title: "多头",
      isHide: [
        {
          key: 'strategyNature',
          value: ['4', '5']
        },
        {
          key: 'isOptimizeFlag',
          value: ['2']
        }
      ],
      api: "/strg/strDetail/listByCode",
      mainColumn: "productName",
      "query": {
        "strategyCode": "uk"
      },
      "params": {
        "direction": "1"
      },
      tableData: [
        {
          name: "类型",
          prop: "itemClass",
          dict: "itemClass",
          isHide: [{
            key: 'strategyNature',
            value: ['2', '3']
          }]
        },
        {
          name: "品名",
          prop: "productName"
        },
        {
          name: "合约",
          prop: "contractCode",
          isHide: [{
            key: 'strategyNature',
            value: ['1', '3', '6']
          }]
        },
        {
          name: "最大开仓手数",
          prop: "maxHands",
          isHide: [{
            key: 'strategyNature',
            value: ['3']
          }]
        },
        {
          name: "最大开仓量",
          prop: "maxPostion"
        },
        {
          name: "单位",
          prop: "unitCode",
          dict: "measurementUnit"
        },
        {
          name: "估值基准",
          prop: "valuationName",
          isHide: [{
            key: 'strategyNature',
            value: ['2']
          }]
        },
        {
          name: "币种",
          prop: "currencyName"
        }
      ]
    },
    sellDetail: {
      title: "空头",
      isHide: [
        {
          key: 'strategyNature',
          value: ['4', '5']
        },
        {
          key: 'isOptimizeFlag',
          value: ['2']
        }
      ],
      api: "/strg/strDetail/listByCode",
      mainColumn: "productName",
      "query": {
        "strategyCode": "uk"
      },
      "params": {
        "direction": "2"
      },
      tableData: [
        {
          name: "类型",
          prop: "itemClass",
          dict: "itemClass",
          isHide: [{
            key: 'strategyNature',
            value: ['2', '3']
          }]
        },
        {
          name: "品名",
          prop: "productName"
        },
        {
          name: "合约",
          prop: "contractCode",
          isHide: [{
            key: 'strategyNature',
            value: ['1', '3', '6']
          }]
        },
        {
          name: "最大开仓手数",
          prop: "maxHands",
          isHide: [{
            key: 'strategyNature',
            value: ['3']
          }]
        },
        {
          name: "最大开仓量",
          prop: "maxPostion"
        },
        {
          name: "单位",
          prop: "unitCode",
          dict: "measurementUnit"
        },
        {
          name: "估值基准",
          prop: "valuationName",
          isHide: [{
            key: 'strategyNature',
            value: ['2']
          }]
        },
        {
          name: "币种",
          prop: "currencyName"
        }
      ]
    },
    tradeDetail: {
      title: "交易信息",
      isHide: [
        {
          key: 'strategyNature',
          value: ['1', '2', '3', '6']
        },
        {
          key: 'isOptimizeFlag',
          value: ['2']
        }
      ],
      api: "/strg/strDetail/listByCode",
      mainColumn: "productName",
      "query": {
        "strategyCode": "uk"
      },
      tableData: [
        {
          name: "品名",
          prop: "productName"
        },
        {
          name: "方向",
          prop: "direction",
          dict: "futuresDirection"
        },
        {
          name: "最大开仓手数",
          prop: "maxHands",
          isHide: [{
            key: 'strategyNature',
            value: ['5']
          }]
        },
        {
          name: "最大开仓量",
          prop: "maxPostion"
        },
        {
          name: "单位",
          prop: "unitCode",
          dict: "measurementUnit"
        },
        {
          name: "估值基准",
          prop: "valuationName",
          isHide: [{
            key: 'strategyNature',
            value: ['4']
          }]
        },
        {
          name: "币种",
          prop: "currencyName"
        }
      ]
    },
    optimizeDetail: {
      title: "优化标的",
      isHide: [
        {
          key: 'isOptimizeFlag',
          value: ['1']
        }
      ],
      api: "/strg/strDetail/listByCode",
      mainColumn: "productName",
      "query": {
        "strategyCode": "uk"
      },
      "params": {
        "optimizationFlag": "1"
      },
      tableData: [
        {
          name: "类型",
          prop: "itemClass",
          dict: "itemClass",
          isHide: [{
            key: 'strategyNature',
            value: ['2', '4']
          }]
        },
        {
          name: "品名",
          prop: "productName"
        },
        {
          name: "合约",
          prop: "contractCode",
          isHide: [{
            key: 'strategyNature',
            value: ['1', '4', '6']
          }]
        },
        {
          name: "最大开仓手数",
          prop: "maxHands"
        },
        {
          name: "最大开仓量",
          prop: "maxPostion"
        },
        {
          name: "单位",
          prop: "unitCode",
          dict: "measurementUnit"
        },
        {
          name: "估值基准",
          prop: "valuationName",
          isHide: [{
            key: 'strategyNature',
            value: ['2', '4']
          }]
        },
        {
          name: "币种",
          prop: "currencyName"
        }
      ]
    },
    maskDetail: {
      title: "目的标的",
      isHide: [
        {
          key: 'isOptimizeFlag',
          value: ['1']
        }
      ],
      api: "/strg/strDetail/listByCode",
      mainColumn: "productName",
      "query": {
        "strategyCode": "uk"
      },
      "params": {
        "optimizationFlag": "0"
      },
      tableData: [
        {
          name: "类型",
          prop: "itemClass",
          dict: "itemClass",
          isHide: [{
            key: 'strategyNature',
            value: ['2', '3', '4', '5']
          }]
        },
        {
          name: "品名",
          prop: "productName"
        },
        {
          name: "合约",
          prop: "contractCode",
          isHide: [{
            key: 'strategyNature',
            value: ['1', '3', '4', '5', '6']
          }]
        },
        {
          name: "方向",
          prop: "direction",
          dict: "direction",
        },
        {
          name: "最大开仓手数",
          prop: "maxHands",
          isHide: [{
            key: 'strategyNature',
            value: ['3', '5']
          }]
        },
        {
          name: "最大开仓量",
          prop: "maxPostion"
        },
        {
          name: "单位",
          prop: "unitCode",
          dict: "measurementUnit"
        },
        {
          name: "估值基准",
          prop: "valuationName",
          isHide: [{
            key: 'strategyNature',
            value: ['2', '4']
          }]
        },
        {
          name: "币种",
          prop: "currencyName"
        }
      ]
    }
  },
  // 策略变更审批
  strategyChangeAudit: {
    api: {
      get: "/strg/strgStrategyChg/get"
    },
    editPart1: {
      title: "主信息",
      formData: [
        {
          label: "机构名称",
          prop: "organCode",
          selectData: {
            type: "FUNC_ORG"
          }
        },
        {
          label: "部门名称",
          prop: "deptCode",
          selectData: {
            type: "FUNC_DEPT"
          }
        },
        {
          label: "策略名称",
          prop: "strategyName"
        },
        {
          label: "策略编号",
          prop: "strategyCode"
        },
        {
          label: "考核主体",
          prop: "projectCode",
          selectData: {
            type: "PROJECT"
          }
        },
        {
          label: "策略类型",
          prop: "strategyNature",
          dict: "strategyNature"
        },
        {
          label: "策略制定日期",
          prop: "makeDate",
          formate: "date"
        },
        {
          label: "策略层级",
          prop: "strgLevel",
          dict: "strgLevel"
        },
        {
          label: "套期方式",
          prop: "hedgingMode",
          dict: "hedgingMode",
          isHide: [{
            key: 'strategyNature',
            value: ['4', '5']
          }]
        }
      ]
    },
    editPart2: {
      title: "副信息",
      formData: [
        {
          label: "策略目的",
          prop: "purpose",
          selectData: {
            type: "DD_TYPE"
          }
        },
        {
          label: "申请人",
          prop: "applicant",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        },
        {
          label: "最大占用资金",
          prop: "maxFund"
        },
        {
          label: "损失限额",
          prop: "limitLoss"
        },
        {
          label: "预期盈利",
          prop: "expectProfit"
        },
        {
          label: "策略开始日期",
          prop: "startDate",
          formate: "date"
        },
        {
          label: "策略结束日期",
          prop: "endDate",
          formate: "date"
        },
        {
          label: "变更原因",
          prop: "changeReason"
        }
      ]
    },
    buyDetail: {
      title: "多头",
      isHide: [{
        key: 'strategyNature',
        value: ['4', '5']
      }],
      api: "/strg/strgStrDetailChg/get",
      mainColumn: "productName",
      "query": {
        "changeId": "uk"
      },
      "params": {
        "direction": "1"
      },
      tableData: [
        {
          name: "类型",
          prop: "itemClass",
          dict: "itemClass",
          isHide: [{
            key: 'strategyNature',
            value: ['2', '3']
          }]
        },
        {
          name: "品名",
          prop: "productName"
        },
        {
          name: "合约",
          prop: "contractCode",
          isHide: [{
            key: 'strategyNature',
            value: ['1', '3', '6']
          }]
        },
        {
          name: "最大开仓手数",
          prop: "maxHands",
          isHide: [{
            key: 'strategyNature',
            value: ['3']
          }]
        },
        {
          name: "最大开仓量",
          prop: "maxPostion"
        },
        {
          name: "单位",
          prop: "unitCode",
          dict: "measurementUnit"
        },
        {
          name: "估值基准",
          prop: "valuationName",
          isHide: [{
            key: 'strategyNature',
            value: ['2']
          }]
        },
        {
          name: "币种",
          prop: "currencyName"
        }
      ]
    },
    sellDetail: {
      title: "空头",
      isHide: [{
        key: 'strategyNature',
        value: ['4', '5']
      }],
      api: "/strg/strgStrDetailChg/get",
      mainColumn: "productName",
      "query": {
        "changeId": "uk"
      },
      "params": {
        "direction": "2"
      },
      tableData: [
        {
          name: "类型",
          prop: "itemClass",
          dict: "itemClass",
          isHide: [{
            key: 'strategyNature',
            value: ['2', '3']
          }]
        },
        {
          name: "品名",
          prop: "productName"
        },
        {
          name: "合约",
          prop: "contractCode",
          isHide: [{
            key: 'strategyNature',
            value: ['1', '3', '6']
          }]
        },
        {
          name: "最大开仓手数",
          prop: "maxHands",
          isHide: [{
            key: 'strategyNature',
            value: ['3']
          }]
        },
        {
          name: "最大开仓量",
          prop: "maxPostion"
        },
        {
          name: "单位",
          prop: "unitCode",
          dict: "measurementUnit"
        },
        {
          name: "估值基准",
          prop: "valuationName",
          isHide: [{
            key: 'strategyNature',
            value: ['2']
          }]
        },
        {
          name: "币种",
          prop: "currencyName"
        }
      ]
    },
    tradeDetail: {
      title: "交易信息",
      isHide: [{
        key: 'strategyNature',
        value: ['1', '2', '3', '6']
      }],
      api: "/strg/strgStrDetailChg/get",
      mainColumn: "productName",
      "query": {
        "changeId": "uk"
      },
      tableData: [
        {
          name: "品名",
          prop: "productName"
        },
        {
          name: "方向",
          prop: "direction",
          dict: "futuresDirection"
        },
        {
          name: "最大开仓手数",
          prop: "maxHands",
          isHide: [{
            key: 'strategyNature',
            value: ['5']
          }]
        },
        {
          name: "最大开仓量",
          prop: "maxPostion"
        },
        {
          name: "单位",
          prop: "unitCode",
          dict: "measurementUnit"
        },
        {
          name: "估值基准",
          prop: "valuationName",
          isHide: [{
            key: 'strategyNature',
            value: ['4']
          }]
        },
        {
          name: "币种",
          prop: "currencyName"
        }
      ]
    }
  },
  // 计划审批
  planAudit: {
    api: {
      get: "/strategy/strgPlan/get"
    },
    editPart1: {
      title: "主信息",
      formData: [
        {
          label: "所属策略",
          prop: "strategyName"
        },
        {
          label: "策略编码",
          prop: "strategyCode"
        },
        {
          label: "策略类型",
          prop: "strategyNature",
          dict: "strategyNature"
        },
        {
          label: "计划编号",
          prop: "planCode"
        },
        {
          label: "计划名称",
          prop: "planName"
        },
        {
          label: "部门名称",
          prop: "deptCode",
          selectData: {
            type: "FUNC_DEPT"
          }
        },
        {
          label: "申请人",
          prop: "applicant",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        }
      ]
    },
    editPart2: {
      title: "副信息",
      formData: [
        {
          label: "套期比例下限",
          prop: "minHedgeRatio",
          isHide: [{
            key: 'strategyNature',
            value: ['2', '3', '4', '5']
          }],
        },
        {
          label: "套期比例上限",
          prop: "maxHedgeRatio",
          isHide: [{
            key: 'strategyNature',
            value: ['2', '3', '4', '5']
          }],
        },
        {
          label: "计划开始日期",
          prop: "startDate",
          formate: "date"
        },
        {
          label: "计划结束日期",
          prop: "endDate",
          formate: "date"
        },
        {
          label: "进场规则",
          prop: "enterMode",
          dict: "enterMode",
          isHide: [{
            key: 'strategyNature',
            value: ['2', '3', '4', '5']
          }],
        },
        {
          label: "止损",
          prop: "stopPoint",
          isHide: [{
            key: 'strategyNature',
            value: ['1', '6']
          }],
        },
        {
          label: "价差区间下限",
          prop: "minLimit",
          isHide: [{
            key: 'strategyNature',
            value: ['2', '3', '4', '5']
          }, {
            key: 'enterMode',
            value: ['2', '3']
          }],
        },
        {
          label: "价差区间上限",
          prop: "maxLimit",
          isHide: [{
            key: 'strategyNature',
            value: ['2', '3', '4', '5']
          }, {
            key: 'enterMode',
            value: ['2', '3']
          }],
        },
        {
          label: "价比区间下限",
          prop: "minLimit",
          isHide: [{
            key: 'strategyNature',
            value: ['2', '3', '4', '5']
          }, {
            key: 'enterMode',
            value: ['2', '1']
          }],
        },
        {
          label: "价比区间上限",
          prop: "maxLimit",
          isHide: [{
            key: 'strategyNature',
            value: ['2', '3', '4', '5']
          }, {
            key: 'enterMode',
            value: ['2', '1']
          }],
        }
      ]
    },
    buyDetail: {
      title: "多头",
      isHide: [{
        key: 'strategyNature',
        value: ['4', '5']
      }],
      api: "/strategy/strgPlan/listDetail",
      mainColumn: "productName",
      "query": {
        "planCode": "uk"
      },
      "params": {
        "direction": "1"
      },
      tableData: [
        {
          name: "类型",
          prop: "itemClass",
          dict: "itemClass",
          isHide: [{
            key: 'strategyNature',
            value: ['2', '3']
          }]
        },
        {
          name: "品名",
          prop: "productName"
        },
        {
          name: "合约",
          prop: "contractCode",
          isHide: [{
            key: 'strategyNature',
            value: ['3']
          }]
        },
        {
          name: "开/平",
          prop: "offsetFlag",
          dict: "offset",
          isHide: [{
            key: 'strategyNature',
            value: ['3']
          }]
        },
        {
          name: "成交价格区间下限",
          prop: "minPrice"
        },
        {
          name: "成交价格区间上限",
          prop: "maxPrice"
        },
        {
          name: "成交数量区间下限",
          prop: "minQuantity"
        },
        {
          name: "成交数量区间上限",
          prop: "maxQuantity"
        },
        {
          name: "单位",
          prop: "unitCode",
          dict: "measurementUnit"
        }
      ]
    },
    sellDetail: {
      title: "空头",
      isHide: [{
        key: 'strategyNature',
        value: ['4', '5']
      }],
      api: "/strategy/strgPlan/listDetail",
      mainColumn: "productName",
      "query": {
        "planCode": "uk"
      },
      "params": {
        "direction": "2"
      },
      tableData: [
        {
          name: "类型",
          prop: "itemClass",
          dict: "itemClass",
          isHide: [{
            key: 'strategyNature',
            value: ['2', '3']
          }]
        },
        {
          name: "品名",
          prop: "productName"
        },
        {
          name: "合约",
          prop: "contractCode",
          isHide: [{
            key: 'strategyNature',
            value: ['3']
          }]
        },
        {
          name: "开/平",
          prop: "offsetFlag",
          dict: "offset",
          isHide: [{
            key: 'strategyNature',
            value: ['3']
          }]
        },
        {
          name: "成交价格区间下限",
          prop: "minPrice"
        },
        {
          name: "成交价格区间上限",
          prop: "maxPrice"
        },
        {
          name: "成交数量区间下限",
          prop: "minQuantity"
        },
        {
          name: "成交数量区间上限",
          prop: "maxQuantity"
        },
        {
          name: "单位",
          prop: "unitCode",
          dict: "measurementUnit"
        }
      ]
    },
    tradeDetail: {
      title: "交易信息",
      isHide: [{
        key: 'strategyNature',
        value: ['1', '2', '3', '6']
      }],
      api: "/strategy/strgPlan/listDetail",
      mainColumn: "productName",
      "query": {
        "planCode": "uk"
      },
      tableData: [
        {
          name: "品名",
          prop: "productName"
        },
        {
          name: "合约",
          prop: "contractCode",
          isHide: [{
            key: 'strategyNature',
            value: ['5']
          }]
        },
        {
          name: "方向",
          prop: "direction",
          dict: "futuresDirection"
        },
        {
          name: "开/平",
          prop: "offsetFlag",
          dict: "offset",
          isHide: [{
            key: 'strategyNature',
            value: ['5']
          }]
        },
        {
          name: "成交价格区间下限",
          prop: "minPrice"
        },
        {
          name: "成交价格区间上限",
          prop: "maxPrice"
        },
        {
          name: "成交数量区间下限",
          prop: "minQuantity"
        },
        {
          name: "成交数量区间上限",
          prop: "maxQuantity"
        },
        {
          name: "单位",
          prop: "unitCode",
          dict: "measurementUnit"
        }
      ]
    }
  },
  // 计划变更审批
  planChangeAudit: {
    api: {
      get: "/strategy/strgPlanChg/get"
    },
    editPart1: {
      title: "主信息",
      formData: [
        {
          label: "所属策略",
          prop: "strategyName"
        },
        {
          label: "策略编码",
          prop: "strategyCode"
        },
        {
          label: "策略类型",
          prop: "strategyNature",
          dict: "strategyNature"
        },
        {
          label: "计划编号",
          prop: "planCode"
        },
        {
          label: "计划名称",
          prop: "planName"
        },
        {
          label: "部门名称",
          prop: "deptCode",
          selectData: {
            type: "FUNC_DEPT"
          }
        },
        {
          label: "申请人",
          prop: "applicant",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        }
      ]
    },
    editPart2: {
      title: "副信息",
      formData: [
        {
          label: "套期比例下限",
          prop: "minHedgeRatio",
          isHide: [{
            key: 'strategyNature',
            value: ['2', '3', '4', '5']
          }],
        },
        {
          label: "套期比例上限",
          prop: "maxHedgeRatio",
          isHide: [{
            key: 'strategyNature',
            value: ['2', '3', '4', '5']
          }],
        },
        {
          label: "计划开始日期",
          prop: "startDate",
          formate: "date"
        },
        {
          label: "计划结束日期",
          prop: "endDate",
          formate: "date"
        },
        {
          label: "进场规则",
          prop: "enterMode",
          dict: "enterMode",
          isHide: [{
            key: 'strategyNature',
            value: ['2', '3', '4', '5']
          }],
        },
        {
          label: "止损",
          prop: "stopPoint",
          isHide: [{
            key: 'strategyNature',
            value: ['1', '6']
          }],
        },
        {
          label: "价差/价比区间下限",
          prop: "minLimit",
          isHide: [{
            key: 'strategyNature',
            value: ['2', '3', '4', '5']
          }],
        },
        {
          label: "价差/价比区间上限",
          prop: "maxLimit",
          isHide: [{
            key: 'strategyNature',
            value: ['2', '3', '4', '5']
          }]
        },
        {
          label: "变更原因",
          prop: "changeReason"
        }
      ]
    },
    buyDetail: {
      title: "多头",
      isHide: [{
        key: 'strategyNature',
        value: ['4', '5']
      }],
      api: "/strategy/strgPlanChg/getDetailByParams",
      mainColumn: "productName",
      "query": {
        "changeNo": "uk"
      },
      "params": {
        "direction": "1"
      },
      tableData: [
        {
          name: "类型",
          prop: "itemClass",
          dict: "itemClass",
          isHide: [{
            key: 'strategyNature',
            value: ['2', '3']
          }]
        },
        {
          name: "品名",
          prop: "productName"
        },
        {
          name: "合约",
          prop: "contractCode",
          isHide: [{
            key: 'strategyNature',
            value: ['3']
          }]
        },
        {
          name: "开/平",
          prop: "offsetFlag",
          dict: "offset",
          isHide: [{
            key: 'strategyNature',
            value: ['3']
          }]
        },
        {
          name: "成交价格区间下限",
          prop: "minPrice"
        },
        {
          name: "成交价格区间上限",
          prop: "maxPrice"
        },
        {
          name: "成交数量区间下限",
          prop: "minQuantity"
        },
        {
          name: "成交数量区间上限",
          prop: "maxQuantity"
        },
        {
          name: "单位",
          prop: "unitCode",
          dict: "measurementUnit"
        }
      ]
    },
    sellDetail: {
      title: "空头",
      isHide: [{
        key: 'strategyNature',
        value: ['4', '5']
      }],
      api: "/strategy/strgPlanChg/getDetailByParams",
      mainColumn: "productName",
      "query": {
        "changeNo": "uk"
      },
      "params": {
        "direction": "2"
      },
      tableData: [
        {
          name: "类型",
          prop: "itemClass",
          dict: "itemClass",
          isHide: [{
            key: 'strategyNature',
            value: ['2', '3']
          }]
        },
        {
          name: "品名",
          prop: "productName"
        },
        {
          name: "合约",
          prop: "contractCode",
          isHide: [{
            key: 'strategyNature',
            value: ['3']
          }]
        },
        {
          name: "开/平",
          prop: "offsetFlag",
          dict: "offset",
          isHide: [{
            key: 'strategyNature',
            value: ['3']
          }]
        },
        {
          name: "成交价格区间下限",
          prop: "minPrice"
        },
        {
          name: "成交价格区间上限",
          prop: "maxPrice"
        },
        {
          name: "成交数量区间下限",
          prop: "minQuantity"
        },
        {
          name: "成交数量区间上限",
          prop: "maxQuantity"
        },
        {
          name: "单位",
          prop: "unitCode",
          dict: "measurementUnit"
        }
      ]
    },
    tradeDetail: {
      title: "交易信息",
      isHide: [{
        key: 'strategyNature',
        value: ['1', '2', '3', '6']
      }],
      api: "/strategy/strgPlanChg/getDetailByParams",
      mainColumn: "productName",
      "query": {
        "changeNo": "uk"
      },
      tableData: [
        {
          name: "品名",
          prop: "productName"
        },
        {
          name: "合约",
          prop: "contractCode",
          isHide: [{
            key: 'strategyNature',
            value: ['5']
          }]
        },
        {
          name: "方向",
          prop: "direction",
          dict: "futuresDirection"
        },
        {
          name: "开/平",
          prop: "offsetFlag",
          dict: "offset",
          isHide: [{
            key: 'strategyNature',
            value: ['5']
          }]
        },
        {
          name: "成交价格区间下限",
          prop: "minPrice"
        },
        {
          name: "成交价格区间上限",
          prop: "maxPrice"
        },
        {
          name: "成交数量区间下限",
          prop: "minQuantity"
        },
        {
          name: "成交数量区间上限",
          prop: "maxQuantity"
        },
        {
          name: "单位",
          prop: "unitCode",
          dict: "measurementUnit"
        }
      ]
    }
  },
  // 指令审批
  instructionAudit: {
    api: {
      get: "/strg/instruction/get"
    },
    editPart1: {
      title: "主信息",
      formData: [
        {
          label: "所属策略",
          prop: "strategyName",
          isHide: [{
            key: 'strgLevel',
            value: ['1', '3', '4']
          }]
        },
        {
          label: "策略编码",
          prop: "strategyCode",
          isHide: [{
            key: 'strgLevel',
            value: ['1', '3', '4']
          }]
        },
        {
          label: "所属计划",
          prop: "planName",
          isHide: [{
            key: 'strgLevel',
            value: ['2', '3', '4']
          }]
        },
        {
          label: "计划编码",
          prop: "planCode",
          isHide: [{
            key: 'strgLevel',
            value: ['2', '3', '4']
          }]
        },
        {
          label: "指令类型",
          prop: "instructionType",
          dict: "instructionType1"
        },
        {
          label: "指令名称",
          prop: "instructionName"
        },
        {
          label: "指令编码",
          prop: "instructionCode"
        },
        {
          label: "指令下达日期",
          prop: "startDate",
          formate: "date"
        },
        {
          label: "有效期至",
          prop: "endDate",
          formate: "date"
        },
        {
          label: "部门名称",
          prop: "deptCode",
          selectData: {
            type: "FUNC_DEPT"
          }
        },
        {
          label: "下达人",
          prop: "orderCode",
          selectData: {
            type: "FUNC_EMPLOYEE"
          }
        }
      ]
    },
    editPart2: {
      title: "副信息",
      formData: [
        {
          label: "期货账号",
          prop: "faccount",
          selectData: {
            type: "DERIVATIVE_ACCOUNT"
          },
        },
        {
          label: "子账号",
          prop: "subFaccount",
          selectData: {
            type: "DERIVATIVE_SUB_ACCOUNT"
          }
        },
        {
          label: "交易员",
          prop: "traderCode",
          selectData: {
            type: "TREE_STAFF"
          }
        }
      ]
    },
    instructionDetail: {
      title: "指令信息",
      api: "/strg/strgInstrDetail/listByCode",
      mainColumn: "productName",
      query: "uk",
      tableData: [
        {
          name: "品名",
          prop: "productName"
        },
        {
          name: "合约",
          prop: "contractCode"
        },
        {
          name: "买/卖",
          prop: "direction",
          dict: "futuresDirection"
        },
        {
          name: "开/平",
          prop: "offsetFlag",
          dict: "offset"
        },
        {
          name: "手数",
          prop: "lots"
        },
        {
          name: "成交价格",
          prop: "price"
        },
        {
          name: "成交价差",
          prop: "priceDiff"
        }
      ]
    }
  },
  // 期货费用审批
  futuresCostAudit: {
    api: {
      get: "/spot/futureCost/get"
    },
    editPart1: {
      title: "主信息",
      formData: [
        {
          label: "机构名称",
          prop: "organCode",
          selectData: {
            type: "FUNC_ORG"
          }
        },
        {
          label: "部门",
          prop: "deptCode",
          selectData: {
            type: "FUNC_DEPT"
          }
        },
        {
          label: "单据日期",
          prop: "documentDate",
          formate: "date"
        },
        {
          label: "原币币种",
          prop: "originalCurrencyCode",
          selectData: {
            type: "CURRENCY"
          }
        },
        {
          label: "原币金额",
          prop: "originalCurrencyAmt"
        },
        {
          label: "汇率",
          prop: "exchangeRate"
        },
        {
          label: "本币金额",
          prop: "domesticCurrencyAmt"
        },
        {
          label: "考核主体",
          prop: "projectCode",
          selectData: {
            type: "PROJECT"
          }
        },
        {
          label: "策略名称",
          prop: "strategyCode",
          selectData: {
            type: "STRATEGY"
          }
        },
        {
          label: "期货账号",
          prop: "derivativeAccount",
          selectData: {
            type: "DERIVATIVE_ACCOUNT"
          }
        }
      ]
    },
    editPart2: {
      title: "副信息",
      formData: [
        {
          label: "申请人",
          prop: "faccount",
          selectData: {
            type: "FUNC_EMPLOYEE"
          },
        }
      ]
    },
    futureCostDetail: {
      title: "费用分配",
      api: "/spot/finFutureCostDetail/getDetailByParams",
      mainColumn: "costType",
      mainColumnDict: "futureCostType",
      query: "uk",
      tableData: [
        {
          name: "费用类型",
          prop: "costType",
          dict: "futureCostType"
        },
        {
          name: "认领金额",
          prop: "claimAmt"
        },
        {
          name: "备注",
          prop: "remark"
        }
      ]
    }
  },
  // 费用审批
  auditView: {
    api: {
      get: "/spot/cost/get"
    },
    editPart1: {
      title: "主信息",
      formData: [
        {
          label: "机构名称",
          prop: "organCode",
          selectData: {
            type: "FUNC_ORG"
          }
        },
        {
          label: "部门",
          prop: "deptCode",
          selectData: {
            type: "FUNC_DEPT"
          }
        },
        {
          label: "单据日期",
          prop: "documentDate",
          formate: "date"
        },
        {
          label: "购销类型",
          prop: "purchaseSaleType",
          dict: "purchaseSaleType"
        },
        {
          label: "原币币种",
          prop: "originalCurrencyCode",
          selectData: {
            type: "CURRENCY"
          }
        },
        {
          label: "原币金额",
          prop: "originalCurrencyAmt"
        },
        {
          label: "汇率",
          prop: "exchangeRate"
        },
        {
          label: "本币金额",
          prop: "domesticCurrencyAmt"
        },
        {
          label: "客商",
          prop: "customerCode",
          selectData: {
            type: "CUST_INFO"
          }
        }
      ]
    },
    spotCostDetail: {
      title: "费用分配",
      api: "/spot/cost/getDetailByParams",
      mainColumn: "fundType",
      mainColumnDict: "fundType",
      query: "uk",
      tableData: [
        {
          name: "费用类型",
          prop: "fundType",
          dict: "fundType"
        },
        {
          name: "现货敞口编号",
          prop: "spotExposureCode"
        },
        {
          name: "认领金额",
          prop: "claimAmt"
        },
        {
          name: "备注",
          prop: "remark"
        }
      ]
    }
  },
  // 资金审批
  fundAudit: {
    api: {
      get: "/spot/fund/get"
    },
    editPart1: {
      title: "主信息",
      formData: [
        {
          label: "机构名称",
          prop: "organCode",
          selectData: {
            type: "FUNC_ORG"
          }
        },
        {
          label: "部门",
          prop: "deptCode",
          selectData: {
            type: "FUNC_DEPT"
          }
        },
        {
          label: "单据日期",
          prop: "documentDate",
          formate: "date"
        },
        {
          label: "购销类型",
          prop: "purchaseSaleType",
          dict: "purchaseSaleType"
        },
        {
          label: "原币币种",
          prop: "originalCurrencyCode",
          selectData: {
            type: "CURRENCY"
          }
        },
        {
          label: "原币金额",
          prop: "originalCurrencyAmt"
        },
        {
          label: "汇率",
          prop: "exchangeRate"
        },
        {
          label: "本币金额",
          prop: "domesticCurrencyAmt"
        },
        {
          label: "客商",
          prop: "customerCode",
          selectData: {
            type: "CUST_INFO"
          }
        }
      ]
    },
    fundDetail: {
      title: "费用分配",
      api: "/spot/fund/getDetailByParams",
      mainColumn: "fundType",
      mainColumnDict: "spotFundType",
      query: "uk",
      tableData: [
        {
          name: "款项类型",
          prop: "fundType",
          dict: "spotFundType"
        },
        {
          name: "现货敞口编号",
          prop: "spotExposureCode"
        },
        {
          name: "认领金额",
          prop: "claimAmt"
        },
        {
          name: "备注",
          prop: "remark"
        }
      ]
    }
  },
  // 考核主体审批
  auditProject: {
    api: {
      get: "/dd/project/getByCode"
    },
    editPart1: {
      title: "主信息",
      formData: [
        {
          label: "考核主体名称",
          prop: "projectName"
        },
        {
          label: "考核主体编码",
          prop: "projectCode"
        }
      ]
    }
  },
  // 期货账号数据调整单
  futuresAccountAdjustAudit: {
    api: {
      get: "/dvt/dvtFutureAdjRecord/getByParams"
    },
    editPart1: {
      title: "主信息",
      formData: [
        {
          label: "调整日期",
          prop: "makeDate",
          formate: "date"
        },
        {
          label: "制单人",
          prop: "makeUserName"
        }
      ]
    },
    futuresAccountTab: {
      title: "调整单明细",
      api: "/dvt/dvtFutureAdjDtl/get",
      mainColumn: "futuresContractCode",
      query: "uk",
      tableData: [
        {
          name: "调整类型",
          prop: "adjustType",
          dict: "dvtAdjustType"
        },
        {
          name: "交易日期",
          prop: "tradingDay",
          formate: "date"
        },
        {
          name: "期货账号",
          prop: "derivativeAccount"
        },
        {
          name: "合约",
          prop: "futuresContractCode"
        },
        {
          name: "方向",
          prop: "direction",
          dict: "futureDirectionType"
        },
        {
          name: "开/平",
          prop: "offsetFlag",
          dict: "offset"
        },
        {
          name: "价格",
          prop: "price"
        },
        {
          name: "数量",
          prop: "volume"
        },
        {
          name: "成交金额",
          prop: "amount"
        },
        {
          name: "手续费",
          prop: "commission"
        },
        {
          name: "投机/套保",
          prop: "hedgeFlag",
          dict: "futureHedgeType"
        }
      ]
    }
  },
  // 期货子账号数据调整单
  futuresSubAdjustAudit: {
    api: {
      get: "/dvt/dvtFutureAdjRecord/getByParams"
    },
    editPart1: {
      title: "主信息",
      formData: [
        {
          label: "调整日期",
          prop: "makeDate",
          formate: "date"
        },
        {
          label: "制单人",
          prop: "makeUserName"
        }
      ]
    },
    futuresSubAccountTab: {
      title: "调整单明细",
      api: "/dvt/dvtFutureAdjDtl/get",
      mainColumn: "futuresContractCode",
      query: "uk",
      tableData: [
        {
          name: "调整类型",
          prop: "adjustType",
          dict: "dvtAdjustType"
        },
        {
          name: "交易日期",
          prop: "tradingDay",
          formate: "date"
        },
        {
          name: "期货账号",
          prop: "derivativeAccount"
        },
        {
          name: "子账号",
          prop: "derivativeSubAccount"
        },
        {
          name: "合约",
          prop: "futuresContractCode"
        },
        {
          name: "方向",
          prop: "direction",
          dict: "futureDirectionType"
        },
        {
          name: "开/平",
          prop: "offsetFlag",
          dict: "offset"
        },
        {
          name: "价格",
          prop: "price"
        },
        {
          name: "数量",
          prop: "volume"
        },
        {
          name: "成交金额",
          prop: "amount"
        },
        {
          name: "手续费",
          prop: "commission"
        },
        {
          name: "投机/套保",
          prop: "hedgeFlag",
          dict: "futureHedgeType"
        }
      ]
    }
  }
};
