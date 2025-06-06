import express from 'express'
const router = express.Router()

// 模拟部门数据库
const departments = [
  {
    id: 1,
    name: '计软智学院',
    courses: [
      {
        id: 101,
        title: 'Python编程入门',
        description:
          '学习Python编程的基础，帮助入门编程。课程内容包括Python语法基础、数据类型、控制流程、函数、模块等核心概念。通过实践项目，掌握Python编程的基本技能。',
        date: '2024/03/15',
        teachers: [{ name: '张教授' }, { name: '王教授' }],
        semester: {
          grade: '大一',
          term: '春季',
        },
        credits: 4,
        courseType: '必修',
      },
      {
        id: 102,
        title: '数据结构与算法',
        description:
          '深入学习计算机科学中的基础数据结构与算法。包括数组、链表、栈、队列、树、图等数据结构，以及排序、搜索、动态规划等经典算法。',
        date: '2024/03/14',
        teachers: [{ name: '李教授' }],
        semester: {
          grade: '大二',
          term: '春季',
        },
        credits: 5,
        courseType: '必修',
      },
      {
        id: 103,
        title: '操作系统原理',
        description:
          '学习操作系统的基本概念和原理，包括进程管理、内存管理、文件系统、设备管理等核心内容。通过实验加深对操作系统工作原理的理解。',
        date: '2024/03/13',
        teachers: [{ name: '刘教授' }, { name: '陈教授' }],
        semester: {
          grade: '大二',
          term: '秋季',
        },
        credits: 4,
        courseType: '必修',
      },
      {
        id: 104,
        title: '计算机网络',
        description:
          '掌握计算机网络的基本原理和协议，包括TCP/IP协议栈、网络层、传输层、应用层等内容。通过实验学习网络配置和故障排查。',
        date: '2024/03/12',
        teachers: [{ name: '赵教授' }],
        semester: {
          grade: '大三',
          term: '春季',
        },
        credits: 4,
        courseType: '必修',
      },
      {
        id: 105,
        title: '数据库系统',
        description:
          '学习数据库设计和管理，包括关系数据库、SQL语言、数据库优化、事务处理等内容。通过项目实践掌握数据库应用开发。',
        date: '2024/03/11',
        teachers: [{ name: '孙教授' }, { name: '周教授' }],
        semester: {
          grade: '大二',
          term: '秋季',
        },
        credits: 3,
        courseType: '必修',
      },
      {
        id: 106,
        title: '软件工程',
        description:
          '了解软件开发的完整生命周期，包括需求分析、系统设计、编码实现、测试维护等环节。学习敏捷开发方法和工具使用。',
        date: '2024/03/10',
        teachers: [{ name: '吴教授' }],
        semester: {
          grade: '大三',
          term: '春季',
        },
        credits: 3,
        courseType: '必修',
      },
      {
        id: 107,
        title: '人工智能导论',
        description:
          '介绍人工智能的基本概念和应用，包括机器学习、深度学习、自然语言处理等内容。通过实践项目了解AI技术应用。',
        date: '2024/03/09',
        teachers: [{ name: '郑教授' }, { name: '钱教授' }],
        semester: {
          grade: '大三',
          term: '秋季',
        },
        credits: 4,
        courseType: '选修',
      },
      {
        id: 108,
        title: 'Web开发技术',
        description:
          '学习现代Web开发技术，包括前端框架、后端开发、数据库集成等内容。通过项目实践掌握全栈开发技能。',
        date: '2024/03/08',
        teachers: [{ name: '冯教授' }],
        semester: {
          grade: '大二',
          term: '秋季',
        },
        credits: 3,
        courseType: '选修',
      },
      {
        id: 109,
        title: '移动应用开发',
        description:
          '掌握移动应用开发技术，包括Android和iOS平台开发、UI设计、性能优化等内容。通过项目实践开发移动应用。',
        date: '2024/03/07',
        teachers: [{ name: '朱教授' }, { name: '杨教授' }],
        semester: {
          grade: '大三',
          term: '春季',
        },
        credits: 3,
        courseType: '选修',
      },
      {
        id: 110,
        title: '云计算与大数据',
        description:
          '学习云计算和大数据技术，包括分布式系统、Hadoop生态、数据挖掘等内容。通过实践了解云平台使用和大数据处理。',
        date: '2024/03/06',
        teachers: [{ name: '秦教授' }],
        semester: {
          grade: '大三',
          term: '秋季',
        },
        credits: 4,
        courseType: '选修',
      },
    ],
  },
  {
    id: 2,
    name: '自动化学院',
    courses: [
      {
        id: 201,
        title: '自动控制原理',
        description:
          '掌握基础控制理论和方法，包括系统建模、时域分析、频域分析、稳定性分析等核心内容。通过实验加深对控制理论的理解。',
        date: '2024/03/15',
      },
      {
        id: 202,
        title: '机器人学导论',
        description:
          '介绍机器人学的基本概念和原理，包括机器人运动学、动力学、轨迹规划等内容。结合实践项目，学习机器人控制系统的设计与实现。',
        date: '2024/03/14',
      },
      {
        id: 203,
        title: '传感器与检测技术',
        description:
          '学习各类传感器的原理和应用，包括温度、压力、位移、速度等传感器的特性及信号处理技术。',
        date: '2024/03/13',
      },
      {
        id: 204,
        title: 'PLC编程与应用',
        description:
          '掌握可编程逻辑控制器的编程和应用，包括梯形图编程、功能块编程、通信接口等内容。',
        date: '2024/03/12',
      },
      {
        id: 205,
        title: '工业自动化系统',
        description: '学习工业自动化系统的设计和实现，包括生产线自动化、过程控制、工业网络等内容。',
        date: '2024/03/11',
      },
      {
        id: 206,
        title: '智能控制技术',
        description: '介绍智能控制的基本理论和方法，包括模糊控制、神经网络控制、专家系统等内容。',
        date: '2024/03/10',
      },
      {
        id: 207,
        title: '运动控制系统',
        description: '学习运动控制系统的设计和实现，包括伺服系统、步进电机控制、运动规划等内容。',
        date: '2024/03/09',
      },
      {
        id: 208,
        title: '工业机器人技术',
        description: '掌握工业机器人的编程和应用，包括机器人操作、编程语言、应用集成等内容。',
        date: '2024/03/08',
      },
      {
        id: 209,
        title: '自动化仪表',
        description: '学习自动化仪表的原理和应用，包括测量仪表、控制仪表、显示仪表等内容。',
        date: '2024/03/07',
      },
      {
        id: 210,
        title: '工业物联网技术',
        description: '介绍工业物联网的基本概念和应用，包括传感器网络、通信协议、数据采集等内容。',
        date: '2024/03/06',
      },
    ],
  },
  {
    id: 3,
    name: '机械学院',
    courses: [
      {
        id: 301,
        title: '机械设计基础',
        description:
          '学习机械设计的基本原理和方法，包括机械零件设计、机构设计、传动系统设计等内容。',
        date: '2024/03/15',
      },
      {
        id: 302,
        title: '工程制图与CAD',
        description:
          '掌握工程制图的基本规范和CAD软件的使用，包括二维制图、三维建模、工程图样等内容。',
        date: '2024/03/14',
      },
      {
        id: 303,
        title: '材料力学',
        description: '学习材料力学的基本理论，包括应力分析、变形分析、强度计算等内容。',
        date: '2024/03/13',
      },
      {
        id: 304,
        title: '机械制造工艺',
        description: '掌握机械制造的基本工艺，包括切削加工、铸造、锻造、焊接等内容。',
        date: '2024/03/12',
      },
      {
        id: 305,
        title: '数控技术',
        description: '学习数控机床的编程和操作，包括G代码编程、刀具路径规划、加工工艺等内容。',
        date: '2024/03/11',
      },
      {
        id: 306,
        title: '机械工程材料',
        description: '了解机械工程常用材料的性能和应用，包括金属材料、非金属材料、复合材料等内容。',
        date: '2024/03/10',
      },
      {
        id: 307,
        title: '机械系统动力学',
        description: '学习机械系统的动力学分析，包括振动分析、动力学建模、系统响应等内容。',
        date: '2024/03/09',
      },
      {
        id: 308,
        title: '机械优化设计',
        description: '掌握机械优化设计的方法，包括参数优化、结构优化、多目标优化等内容。',
        date: '2024/03/08',
      },
      {
        id: 309,
        title: '机械故障诊断',
        description: '学习机械故障诊断的技术，包括信号分析、故障特征提取、诊断方法等内容。',
        date: '2024/03/07',
      },
      {
        id: 310,
        title: '先进制造技术',
        description: '了解先进制造技术的发展和应用，包括增材制造、智能制造、绿色制造等内容。',
        date: '2024/03/06',
      },
    ],
  },
]

// 获取所有部门及其课程信息（只返回基础信息）
router.get('/', (req, res) => {
  // 只返回课程的基础信息
  const simplifiedDepartments = departments.map((dept) => ({
    id: dept.id,
    name: dept.name,
    courses: dept.courses.map((course) => ({
      id: course.id,
      title: course.title,
      description: course.description,
      date: course.date,
    })),
  }))

  res.json({
    code: 200,
    message: '获取成功',
    data: simplifiedDepartments,
  })
})

// 获取单个部门的课程信息（返回完整信息）
router.get('/:id/courses', (req, res) => {
  const department = departments.find((dept) => dept.id === parseInt(req.params.id))
  if (!department) {
    return res.status(404).json({
      code: 404,
      message: '部门不存在',
      data: null,
    })
  }

  res.json({
    code: 200,
    message: '获取成功',
    data: {
      departmentName: department.name,
      courses: department.courses, // 返回完整的课程信息
    },
  })
})

export default router
