// ===== TRANSLATIONS =====
const TRANSLATIONS = {
  th: {
    appTitle:               'CSA & GICA Dashboard',
    appSubtitle:            'Center of Skill Acquisition · Garment Inspection Competency Assessment',
    loginTitle:             'เข้าสู่ระบบด้วย Microsoft Account',
    loginBtn:               'Sign in with Microsoft',
    selectDept:             'เลือก BU',
    overallDashboard:       'ภาพรวมทั้งหมด',
    allYears:               'ทุกปี',
    department:             'BU',
    adminTitle:             'ตั้งค่าผู้ดูแลระบบ',
    holidaySection:         'กำหนดวันหยุดพิเศษ',
    addHoliday:             'เพิ่มวันหยุด',
    holidayHint:            'ระบบจะไม่นับวันอาทิตย์และวันหยุดพิเศษในการคำนวณ Remaining Days',
    backHome:               '← กลับหน้าแรก',
    refresh:                'โหลดใหม่',
    total:                  'ทั้งหมด',
    congratulations:        'สำเร็จการฝึก',
    training:               'กำลังฝึก',
    resignation:            'การลาออก',
    transferred:            'การโอนย้าย',
    register:               'ลงทะเบียน',
    newRecord:              'บันทึกข้อมูลใหม่',
    employeeId:             'รหัสพนักงาน',
    employeeName:           'ชื่อพนักงาน',
    grade:                  'เกรด',
    selectPlaceholder:      '-- เลือก --',
    saveNew:                'บันทึกพนักงานใหม่',
    viewEdit:               'ดูข้อมูล / แก้ไขข้อมูล',
    search:                 'ค้นหา',
    remaining:              'คงเหลือ',
    workingDays:            'วันทำงาน',
    csaStartDate:           'CSA Start Date',
    basicStart:             'Basic Start',
    basicEnd:               'Basic End',
    operationStart:         'Operation Start',
    operationEnd:           'Operation End',
    resignDate:             'วันลาออก',
    transfersDate:          'วันโอนย้าย',
    graduateEff:            'Graduate Eff',
    comment:                'หมายเหตุ',
    saveUpdate:             'บันทึกการแก้ไข',
    close:                  'ปิด',
    riskList:               'ข้อมูลพนักงาน',
    filterAll:              'ทั้งหมด',
    colEmployeeId:          'รหัสพนักงาน',
    colEmployeeName:        'ชื่อพนักงาน',
    colGrade:               'เกรด',
    colCsaStart:            'วันเริ่มฝึก',
    colDueDate:             'วันครบกำหนด',
    colBasicStart:          'เริ่มฝึกพื้นฐาน',
    colBasicEnd:            'ฝึกพื้นฐานเสร็จ',
    colOpStart:             'เริ่มฝึกขั้นตอนงาน',
    colOpEnd:               'ฝึกขั้นตอนงานเสร็จ',
    colResignDate:          'วันลาออก',
    colTransferDate:        'วันโอนย้าย',
    colGradEff:             'ประสิทธิภาพ',
    colActualStatus:        'สถานะจริง',
    dashboard:              'แดชบอร์ด',
    dueDate:                'Due Date',
    employeeIdPlaceholder:  'รหัสพนักงาน',
    signedIn:               'เข้าสู่ระบบแล้ว',
    logout:                 'ออกจากระบบ',
    loading:                'กำลังโหลด...',
    loadedCount:            'โหลด {n} พนักงาน',
    created:                'สร้างพนักงานใหม่สำเร็จ',
    updated:                'อัปเดตข้อมูลสำเร็จ',
    loaded:                 'โหลดข้อมูลพนักงานสำเร็จ',
    pleaseEnterEmployeeId:  'กรุณากรอกรหัสพนักงาน',
    statusCompleted:        'ฝึกเสร็จ',
    statusCompletedOverdue: 'ฝึกเสร็จ (เกินกำหนด)',
    statusUnderOperation:   'กำลังฝึกขั้นตอนงาน',
    statusUnderBasic:       'กำลังฝึกพื้นฐาน',
    statusResignOperation:  'ลาออกระหว่างฝึกขั้นตอน',
    statusResignBasic:      'ลาออกระหว่างฝึกพื้นฐาน',
    statusTransferOperation:'โอนย้ายระหว่างฝึกขั้นตอน',
    statusTransferBasic:    'โอนย้ายระหว่างฝึกพื้นฐาน',
    statusTransferBeforeBasic: 'โอนย้ายก่อนฝึกพื้นฐาน',
    statusResignBeforeBasic:   'ลาออกก่อนฝึกพื้นฐาน',
    ratio:                  'สัดส่วน',
    analyticsTitle:         'วิเคราะห์ข้อมูล',
    analyticsTotalTraining: 'ระยะเวลาฝึกรวม',
    analyticsBasicTraining: 'ระยะเวลาฝึกพื้นฐาน',
    analyticsOpTraining:    'ระยะเวลาฝึกขั้นตอนงาน',
    analyticsResignDur:     'ระยะเวลาก่อนลาออก',
    analyticsResignRatio:   'สัดส่วนการลาออก',
    analyticsAvg:           'ค่าเฉลี่ย',
    analyticsMin:           'ต่ำสุด',
    analyticsMax:           'สูงสุด',
    analyticsDays:          'วัน',
    analyticsEmployees:     'คน',
    analyticsResignTotal:   'ลาออกทั้งหมด',
    analyticsResignOp:      'ระหว่างฝึกขั้นตอน',
    analyticsResignBasic:   'ระหว่างฝึกพื้นฐาน',
    analyticsResignBeforeBasic: 'ก่อนฝึกพื้นฐาน',
    analyticsNoData:        'ไม่มีข้อมูล',
    analyticsExpandGrade:       'ดูแยกตามเกรด',
    analyticsExpandResignGrade: 'ดูแยกตามเกรด (ผู้ลาออก)',
    analyticsExpandResignType:  'ดูแยกตามประเภทการลาออก',
    analyticsExpandProceed:     'ดูอัตราการไปต่อ Op Training',
    analyticsProceedLabel:      '% ผู้ที่ไปต่อ Op Training',
    analyticsProceedHint:       'คน (จากผู้เริ่ม Basic Training)',
    analyticsAllDept:       'ทุกหน่วยงาน',
    dayModeTotal:           'รวมทุกวัน',
    dayMode5d:              'ทำงาน 5 วัน',
    dayMode6d:              'ทำงาน 6 วัน',
    chartsTitle:            'ภาพรวมสถานะ',
    chartOverall:           'สถานะรวม',
    chartGradBreakdown:     'การฝึกเสร็จ',
    chartTrainingBreakdown: 'กำลังฝึก',
    chartResignBreakdown:   'การลาออก',
    statusOnTime:           'ตรงเวลา',
    statusOverdue:          'เกินกำหนด',
    statusTransfer:         'โอนย้าย',
    colEmployeesLeave:      'วันลา',
    workMode5d:             'ทำงาน 5 วัน',
    workMode6d:             'ทำงาน 6 วัน',
    adminBtn:               'Admin',
    tooltipEdit:            'แก้ไข',
    tooltipConfirm:         'ยืนยัน',
    tooltipCancel:          'ยกเลิก',
    themeToggleTitle:       'เปลี่ยนธีม',
    trendTitle:             'แนวโน้มรายเดือน',
    trendJoined:            'พนักงานเข้าใหม่',
    trendCompleted:         'ฝึกสำเร็จ',
    trendResigned:          'ลาออก',
    trendMonth:             'เดือน',
    yearLabel:              'ปี',
    managerLoginBtn:        'เข้าสู่ระบบ',
    managerModeBadge:       'View Mode',
    managerLoginFailed:     'ไม่สามารถเข้าสู่ระบบ View Mode ได้',
    tabNewOperator:         'New Operator',
    tabJumper:              'Jumper',
    tabTrainer:             'CSA Trainer',
    tabSewingOperator:      'Sewing Operator',
    tabComingSoon:          'อยู่ระหว่างพัฒนา กรุณารอสักครู่...',
  },
  en: {
    appTitle:               'CSA & GICA Dashboard',
    appSubtitle:            'Center of Skill Acquisition · Garment Inspection Competency Assessment',
    loginTitle:             'Sign in with Microsoft Account',
    loginBtn:               'Sign in with Microsoft',
    selectDept:             'Select BU',
    overallDashboard:       'Overall Dashboard',
    allYears:               'All Years',
    department:             'BU',
    adminTitle:             'Admin Settings',
    holidaySection:         'Configure Special Holidays',
    addHoliday:             'Add Holiday',
    holidayHint:            'Sundays and special holidays are excluded from the Remaining Days calculation.',
    backHome:               '← Back to Home',
    refresh:                'Refresh',
    total:                  'Total',
    congratulations:        'Completed Training',
    training:               'In Training',
    resignation:            'Resignation',
    transferred:            'Transferred',
    register:               'Register',
    newRecord:              'Create New Record',
    employeeId:             'Employee ID',
    employeeName:           'Employee Name',
    grade:                  'Grade',
    selectPlaceholder:      '-- Select --',
    saveNew:                'Save New Employee',
    viewEdit:               'View / Edit Record',
    search:                 'Search',
    remaining:              'Remaining',
    workingDays:            'working days',
    csaStartDate:           'CSA Start Date',
    basicStart:             'Basic Start',
    basicEnd:               'Basic End',
    operationStart:         'Operation Start',
    operationEnd:           'Operation End',
    resignDate:             'Resign Date',
    transfersDate:          'Transfers Date',
    graduateEff:            'Graduate Eff',
    comment:                'Comment',
    saveUpdate:             'Save Update',
    close:                  'Close',
    riskList:               'Employee Data',
    filterAll:              'All',
    colEmployeeId:          'Employee ID',
    colEmployeeName:        'Employee Name',
    colGrade:               'Grade',
    colCsaStart:            'CSA Start',
    colDueDate:             'Due Date',
    colBasicStart:          'Basic Start',
    colBasicEnd:            'Basic End',
    colOpStart:             'Op Start',
    colOpEnd:               'Op End',
    colResignDate:          'Resign Date',
    colTransferDate:        'Transfer Date',
    colGradEff:             'Eff%',
    colActualStatus:        'Actual Status',
    dashboard:              'Dashboard',
    dueDate:                'Due Date',
    employeeIdPlaceholder:  'Employee ID',
    signedIn:               'Signed in',
    logout:                 'Logout',
    loading:                'Loading...',
    loadedCount:            'Loaded {n} employees',
    created:                'Employee created successfully',
    updated:                'Employee updated successfully',
    loaded:                 'Employee data loaded',
    pleaseEnterEmployeeId:  'Please enter Employee ID',
    statusCompleted:        'Completed',
    statusCompletedOverdue: 'Completed (Overdue)',
    statusUnderOperation:   'In Operation Training',
    statusUnderBasic:       'In Basic Training',
    statusResignOperation:  'Resigned (Op Training)',
    statusResignBasic:      'Resigned (Basic Training)',
    statusTransferOperation:'Transferred (Op Training)',
    statusTransferBasic:    'Transferred (Basic Training)',
    statusTransferBeforeBasic: 'Transferred (Before Basic)',
    statusResignBeforeBasic:   'Resigned (Before Basic)',
    ratio:                  'Ratio',
    analyticsTitle:         'Data Analytics',
    analyticsTotalTraining: 'Total Training Duration',
    analyticsBasicTraining: 'Basic Training Duration',
    analyticsOpTraining:    'Operation Training Duration',
    analyticsResignDur:     'Duration Before Resign',
    analyticsResignRatio:   'Resign Breakdown',
    analyticsAvg:           'Average',
    analyticsMin:           'Min',
    analyticsMax:           'Max',
    analyticsDays:          'days',
    analyticsEmployees:     'employees',
    analyticsResignTotal:   'Total Resigned',
    analyticsResignOp:      'During Op Training',
    analyticsResignBasic:   'During Basic Training',
    analyticsResignBeforeBasic: 'Before Basic Training',
    analyticsNoData:        'No data',
    analyticsExpandGrade:       'View by Grade',
    analyticsExpandResignGrade: 'View by Grade (Resigned)',
    analyticsExpandResignType:  'View by Resign Type',
    analyticsExpandProceed:     'View Proceed-to-Op Rate',
    analyticsProceedLabel:      '% Proceed to Op Training',
    analyticsProceedHint:       'people (of Basic Training starters)',
    analyticsAllDept:       'All departments',
    dayModeTotal:           'Total',
    dayMode5d:              '5-day Week',
    dayMode6d:              '6-day Week',
    chartsTitle:            'Status Overview',
    chartOverall:           'Overall',
    chartGradBreakdown:     'Graduation',
    chartTrainingBreakdown: 'In Training',
    chartResignBreakdown:   'Resignation',
    statusOnTime:           'On time',
    statusOverdue:          'Overdue',
    statusTransfer:         'Transfer',
    colEmployeesLeave:      'Leave Days',
    workMode5d:             '5-day Week',
    workMode6d:             '6-day Week',
    adminBtn:               'Admin',
    tooltipEdit:            'Edit',
    tooltipConfirm:         'Confirm',
    tooltipCancel:          'Cancel',
    themeToggleTitle:       'Toggle theme',
    trendTitle:             'Monthly Trend',
    trendJoined:            'New Hires',
    trendCompleted:         'Completed',
    trendResigned:          'Resigned',
    trendMonth:             'Month',
    yearLabel:              'Year',
    managerLoginBtn:        'Sign In',
    managerModeBadge:       'View Mode',
    managerLoginFailed:     'Could not sign in as View Mode',
    tabNewOperator:         'New Operator',
    tabJumper:              'Jumper',
    tabTrainer:             'CSA Trainer',
    tabSewingOperator:      'Sewing Operator',
    tabComingSoon:          'Under development, please wait...',
  },
  lo: {
    appTitle:               'CSA & GICA Dashboard',
    appSubtitle:            'Center of Skill Acquisition · Garment Inspection Competency Assessment',
    loginTitle:             'ເຂົ້າສູ່ລະບົບດ້ວຍ Microsoft Account',
    loginBtn:               'Sign in with Microsoft',
    selectDept:             'ເລືອກ BU',
    overallDashboard:       'ພາບລວມທັງໝົດ',
    allYears:               'ທຸກປີ',
    department:             'BU',
    adminTitle:             'ຕັ້ງຄ່າຜູ້ດູແລລະບົບ',
    holidaySection:         'ກຳນົດວັນຫຍຸດພິເສດ',
    addHoliday:             'ເພີ່ມວັນຫຍຸດ',
    holidayHint:            'ລະບົບຈະບໍ່ນັບວັນອາທິດ ແລະ ວັນຫຍຸດພິເສດໃນການຄຳນວນ Remaining Days',
    backHome:               '← ກັບໄປໜ້າຫຼັກ',
    refresh:                'ໂຫຼດໃໝ່',
    total:                  'ທັງໝົດ',
    congratulations:        'ສຳເລັດການຝຶກ',
    training:               'ກຳລັງຝຶກ',
    resignation:            'ການລາອອກ',
    transferred:            'ການໂອນຍ້າຍ',
    register:               'ລົງທະບຽນ',
    newRecord:              'ບັນທຶກຂໍ້ມູນໃໝ່',
    employeeId:             'ລະຫັດພະນັກງານ',
    employeeName:           'ຊື່ພະນັກງານ',
    grade:                  'ເກຣດ',
    selectPlaceholder:      '-- ເລືອກ --',
    saveNew:                'ບັນທຶກພະນັກງານໃໝ່',
    viewEdit:               'ເບິ່ງ / ແກ້ໄຂຂໍ້ມູນ',
    search:                 'ຄົ້ນຫາ',
    remaining:              'ຄົງເຫຼືອ',
    workingDays:            'ວັນເຮັດວຽກ',
    csaStartDate:           'CSA Start Date',
    basicStart:             'Basic Start',
    basicEnd:               'Basic End',
    operationStart:         'Operation Start',
    operationEnd:           'Operation End',
    resignDate:             'ວັນລາອອກ',
    transfersDate:          'ວັນໂອນຍ້າຍ',
    graduateEff:            'Graduate Eff',
    comment:                'ໝາຍເຫດ',
    saveUpdate:             'ບັນທຶກການແກ້ໄຂ',
    close:                  'ປິດ',
    riskList:               'ຂໍ້ມູນພະນັກງານ',
    filterAll:              'ທັງໝົດ',
    colEmployeeId:          'ລະຫັດພະນັກງານ',
    colEmployeeName:        'ຊື່ພະນັກງານ',
    colGrade:               'ເກຣດ',
    colCsaStart:            'ວັນເລີ່ມຝຶກ',
    colDueDate:             'ວັນຄົບກຳນົດ',
    colBasicStart:          'ເລີ່ມຝຶກພື້ນຖານ',
    colBasicEnd:            'ຝຶກພື້ນຖານສຳເລັດ',
    colOpStart:             'ເລີ່ມຝຶກຂັ້ນຕອນ',
    colOpEnd:               'ຝຶກຂັ້ນຕອນສຳເລັດ',
    colResignDate:          'ວັນລາອອກ',
    colTransferDate:        'ວັນໂອນຍ້າຍ',
    colGradEff:             'ປະສິດທິພາບ',
    colActualStatus:        'ສະຖານະຈິງ',
    dashboard:              'ແດສບອດ',
    dueDate:                'Due Date',
    employeeIdPlaceholder:  'ລະຫັດພະນັກງານ',
    signedIn:               'ເຂົ້າສູ່ລະບົບແລ້ວ',
    logout:                 'ອອກຈາກລະບົບ',
    loading:                'ກຳລັງໂຫຼດ...',
    loadedCount:            'ໂຫຼດ {n} ພະນັກງານ',
    created:                'ສ້າງພະນັກງານໃໝ່ສຳເລັດ',
    updated:                'ອັບເດດຂໍ້ມູນສຳເລັດ',
    loaded:                 'ໂຫຼດຂໍ້ມູນພະນັກງານສຳເລັດ',
    pleaseEnterEmployeeId:  'ກະລຸນາໃສ່ລະຫັດພະນັກງານ',
    statusCompleted:        'ຝຶກສຳເລັດ',
    statusCompletedOverdue: 'ຝຶກສຳເລັດ (ເກີນກຳນົດ)',
    statusUnderOperation:   'ກຳລັງຝຶກຂັ້ນຕອນ',
    statusUnderBasic:       'ກຳລັງຝຶກພື້ນຖານ',
    statusResignOperation:  'ລາອອກລະຫວ່າງຝຶກຂັ້ນຕອນ',
    statusResignBasic:      'ລາອອກລະຫວ່າງຝຶກພື້ນຖານ',
    statusTransferOperation:'ໂອນຍ້າຍລະຫວ່າງຝຶກຂັ້ນຕອນ',
    statusTransferBasic:    'ໂອນຍ້າຍລະຫວ່າງຝຶກພື້ນຖານ',
    statusTransferBeforeBasic: 'ໂອນຍ້າຍກ່ອນຝຶກພື້ນຖານ',
    statusResignBeforeBasic:   'ລາອອກກ່ອນຝຶກພື້ນຖານ',
    ratio:                  'ອັດຕາສ່ວນ',
    analyticsTitle:         'ວິເຄາະຂໍ້ມູນ',
    analyticsTotalTraining: 'ໄລຍະເວລາຝຶກທັງໝົດ',
    analyticsBasicTraining: 'ໄລຍະເວລາຝຶກພື້ນຖານ',
    analyticsOpTraining:    'ໄລຍະເວລາຝຶກຂັ້ນຕອນ',
    analyticsResignDur:     'ໄລຍະເວລາກ່ອນລາອອກ',
    analyticsResignRatio:   'ອັດຕາການລາອອກ',
    analyticsAvg:           'ຄ່າສະເລ່ຍ',
    analyticsMin:           'ຕ່ຳສຸດ',
    analyticsMax:           'ສູງສຸດ',
    analyticsDays:          'ວັນ',
    analyticsEmployees:     'ຄົນ',
    analyticsResignTotal:   'ລາອອກທັງໝົດ',
    analyticsResignOp:      'ລະຫວ່າງຝຶກຂັ້ນຕອນ',
    analyticsResignBasic:   'ລະຫວ່າງຝຶກພື້ນຖານ',
    analyticsResignBeforeBasic: 'ກ່ອນຝຶກພື້ນຖານ',
    analyticsNoData:        'ບໍ່ມີຂໍ້ມູນ',
    analyticsExpandGrade:       'ເບິ່ງແຍກຕາມເກຣດ',
    analyticsExpandResignGrade: 'ເບິ່ງແຍກຕາມເກຣດ (ລາອອກ)',
    analyticsExpandResignType:  'ເບິ່ງແຍກຕາມປະເພດການລາອອກ',
    analyticsExpandProceed:     'ເບິ່ງອັດຕາການໄປຕໍ່ Op Training',
    analyticsProceedLabel:      '% ຜູ້ທີ່ໄປຕໍ່ Op Training',
    analyticsProceedHint:       'ຄົນ (ຈາກຜູ້ເລີ່ມ Basic Training)',
    analyticsAllDept:       'ທຸກພະແນກ',
    dayModeTotal:           'ທັງໝົດ',
    dayMode5d:              'ເຮັດວຽກ 5 ວັນ',
    dayMode6d:              'ເຮັດວຽກ 6 ວັນ',
    chartsTitle:            'ພາບລວມສະຖານະ',
    chartOverall:           'ສະຖານະລວມ',
    chartGradBreakdown:     'ສຳເລັດການຝຶກ',
    chartTrainingBreakdown: 'ກຳລັງຝຶກ',
    chartResignBreakdown:   'ການລາອອກ',
    statusOnTime:           'ຕົງເວລາ',
    statusOverdue:          'ເກີນກຳນົດ',
    statusTransfer:         'ໂອນຍ້າຍ',
    colEmployeesLeave:      'ວັນລາ',
    workMode5d:             'ເຮັດວຽກ 5 ວັນ',
    workMode6d:             'ເຮັດວຽກ 6 ວັນ',
    adminBtn:               'Admin',
    tooltipEdit:            'ແກ້ໄຂ',
    tooltipConfirm:         'ຢືນຢັນ',
    tooltipCancel:          'ຍົກເລີກ',
    themeToggleTitle:       'ປ່ຽນຮູບແບບ',
    trendTitle:             'ແນວໂນ້ມລາຍເດືອນ',
    trendJoined:            'ພະນັກງານໃໝ່',
    trendCompleted:         'ຝຶກສຳເລັດ',
    trendResigned:          'ລາອອກ',
    trendMonth:             'ເດືອນ',
    yearLabel:              'ປີ',
    managerLoginBtn:        'ເຂົ້າສູ່ລະບົບ',
    managerModeBadge:       'View Mode',
    managerLoginFailed:     'ບໍ່ສາມາດເຂົ້າສູ່ລະບົບ View Mode ໄດ້',
    tabNewOperator:         'New Operator',
    tabJumper:              'Jumper',
    tabTrainer:             'CSA Trainer',
    tabSewingOperator:      'Sewing Operator',
    tabComingSoon:          'ກຳລັງພັດທະນາ ກະລຸນາລໍຖ້າ...',
  },
  vi: {
    appTitle:               'CSA & GICA Dashboard',
    appSubtitle:            'Center of Skill Acquisition · Garment Inspection Competency Assessment',
    loginTitle:             'Đăng nhập bằng tài khoản Microsoft',
    loginBtn:               'Sign in with Microsoft',
    selectDept:             'Chọn BU',
    overallDashboard:       'Tổng quan',
    allYears:               'Tất cả năm',
    department:             'BU',
    adminTitle:             'Cài đặt Admin',
    holidaySection:         'Cấu hình ngày nghỉ đặc biệt',
    addHoliday:             'Thêm ngày nghỉ',
    holidayHint:            'Hệ thống sẽ không tính Chủ nhật và ngày nghỉ đặc biệt khi tính Remaining Days.',
    backHome:               '← Về trang chủ',
    refresh:                'Làm mới',
    total:                  'Tổng',
    congratulations:        'Hoàn thành đào tạo',
    training:               'Đang đào tạo',
    resignation:            'Nghỉ việc',
    transferred:            'Chuyển bộ phận',
    register:               'Đăng ký',
    newRecord:              'Tạo bản ghi mới',
    employeeId:             'Mã nhân viên',
    employeeName:           'Tên nhân viên',
    grade:                  'Cấp bậc',
    selectPlaceholder:      '-- Chọn --',
    saveNew:                'Lưu nhân viên mới',
    viewEdit:               'Xem / Chỉnh sửa',
    search:                 'Tìm kiếm',
    remaining:              'Còn lại',
    workingDays:            'ngày làm việc',
    csaStartDate:           'CSA Start Date',
    basicStart:             'Basic Start',
    basicEnd:               'Basic End',
    operationStart:         'Operation Start',
    operationEnd:           'Operation End',
    resignDate:             'Ngày nghỉ việc',
    transfersDate:          'Ngày chuyển',
    graduateEff:            'Graduate Eff',
    comment:                'Ghi chú',
    saveUpdate:             'Lưu cập nhật',
    close:                  'Đóng',
    riskList:               'Dữ liệu nhân viên',
    filterAll:              'Tất cả',
    colEmployeeId:          'Mã nhân viên',
    colEmployeeName:        'Tên nhân viên',
    colGrade:               'Cấp bậc',
    colCsaStart:            'Ngày bắt đầu',
    colDueDate:             'Ngày hết hạn',
    colBasicStart:          'Bắt đầu cơ bản',
    colBasicEnd:            'Kết thúc cơ bản',
    colOpStart:             'Bắt đầu vận hành',
    colOpEnd:               'Kết thúc vận hành',
    colResignDate:          'Ngày nghỉ',
    colTransferDate:        'Ngày chuyển',
    colGradEff:             'Hiệu suất',
    colActualStatus:        'Trạng thái thực',
    dashboard:              'Bảng điều khiển',
    dueDate:                'Ngày hết hạn',
    employeeIdPlaceholder:  'Mã nhân viên',
    signedIn:               'Đã đăng nhập',
    logout:                 'Đăng xuất',
    loading:                'Đang tải...',
    loadedCount:            'Đã tải {n} nhân viên',
    created:                'Tạo nhân viên mới thành công',
    updated:                'Cập nhật thông tin thành công',
    loaded:                 'Đã tải dữ liệu nhân viên',
    pleaseEnterEmployeeId:  'Vui lòng nhập mã nhân viên',
    statusCompleted:        'Hoàn thành',
    statusCompletedOverdue: 'Hoàn thành (Trễ hạn)',
    statusUnderOperation:   'Đang đào tạo vận hành',
    statusUnderBasic:       'Đang đào tạo cơ bản',
    statusResignOperation:  'Nghỉ việc (Đào tạo vận hành)',
    statusResignBasic:      'Nghỉ việc (Đào tạo cơ bản)',
    statusTransferOperation:'Chuyển bộ phận (Vận hành)',
    statusTransferBasic:    'Chuyển bộ phận (Cơ bản)',
    statusTransferBeforeBasic: 'Chuyển bộ phận (Trước cơ bản)',
    statusResignBeforeBasic:   'Nghỉ việc (Trước cơ bản)',
    ratio:                  'Tỷ lệ',
    analyticsTitle:         'Phân tích dữ liệu',
    analyticsTotalTraining: 'Thời gian đào tạo tổng',
    analyticsBasicTraining: 'Thời gian đào tạo cơ bản',
    analyticsOpTraining:    'Thời gian đào tạo vận hành',
    analyticsResignDur:     'Thời gian trước khi nghỉ việc',
    analyticsResignRatio:   'Phân tích nghỉ việc',
    analyticsAvg:           'Trung bình',
    analyticsMin:           'Min',
    analyticsMax:           'Max',
    analyticsDays:          'ngày',
    analyticsEmployees:     'nhân viên',
    analyticsResignTotal:   'Tổng nghỉ việc',
    analyticsResignOp:      'Trong khi đào tạo vận hành',
    analyticsResignBasic:   'Trong khi đào tạo cơ bản',
    analyticsResignBeforeBasic: 'Trước đào tạo cơ bản',
    analyticsNoData:        'Không có dữ liệu',
    analyticsExpandGrade:       'Xem theo Cấp bậc',
    analyticsExpandResignGrade: 'Xem theo Cấp bậc (Nghỉ việc)',
    analyticsExpandResignType:  'Xem theo Loại nghỉ việc',
    analyticsExpandProceed:     'Xem tỷ lệ tiếp tục Op Training',
    analyticsProceedLabel:      '% Tiếp tục Op Training',
    analyticsProceedHint:       'người (trong số bắt đầu Basic)',
    analyticsAllDept:       'Tất cả bộ phận',
    dayModeTotal:           'Tổng',
    dayMode5d:              'Tuần 5 ngày',
    dayMode6d:              'Tuần 6 ngày',
    chartsTitle:            'Tổng quan trạng thái',
    chartOverall:           'Trạng thái tổng',
    chartGradBreakdown:     'Hoàn thành',
    chartTrainingBreakdown: 'Đang đào tạo',
    chartResignBreakdown:   'Nghỉ việc',
    statusOnTime:           'Đúng hạn',
    statusOverdue:          'Trễ hạn',
    statusTransfer:         'Chuyển',
    colEmployeesLeave:      'Ngày nghỉ',
    workMode5d:             'Tuần 5 ngày',
    workMode6d:             'Tuần 6 ngày',
    adminBtn:               'Admin',
    tooltipEdit:            'Chỉnh sửa',
    tooltipConfirm:         'Xác nhận',
    tooltipCancel:          'Hủy',
    themeToggleTitle:       'Đổi giao diện',
    trendTitle:             'Xu hướng theo tháng',
    trendJoined:            'Nhân viên mới',
    trendCompleted:         'Hoàn thành',
    trendResigned:          'Nghỉ việc',
    trendMonth:             'Tháng',
    yearLabel:              'Năm',
    managerLoginBtn:        'Đăng nhập',
    managerModeBadge:       'View Mode',
    managerLoginFailed:     'Không thể đăng nhập View Mode',
    tabNewOperator:         'New Operator',
    tabJumper:              'Jumper',
    tabTrainer:             'CSA Trainer',
    tabSewingOperator:      'Sewing Operator',
    tabComingSoon:          'Đang phát triển, vui lòng chờ...',
  },
};

// ===== STATE =====
let _switchMainTab    = null;   // set by initTabBar — used by renderTabSubMenu
let currentDepartment = null;
let currentEmployeeId = null;
let currentFilter     = '';
let currentYearFilter = '';
let departments       = [];
let holidays          = JSON.parse(localStorage.getItem('specialHolidays') || '[]');
let lastEmployees     = [];
let allDeptData       = {};   // home dashboard cache: { deptKey: [employees] }
let currentAnalyticsDept = '';  // '' = all departments
let currentDayMode    = 'total'; // 'total' | '5d' | '6d'  (Data Analytics)
let trendVisibility   = { joined: true, inTraining: true, completed: true, resigned: true };  // toggle state for trend lines
// expand state for the 4 stat cards — default open (true = expanded on load)
let cardExpanded      = { total: true, basic: true, op: true, resign: true };

// Month abbreviations per language (used for trend chart x-axis)
const MONTH_ABBR = {
  th: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  lo: ['ມ.ກ.', 'ກ.ພ.', 'ມີ.ນ.', 'ມ.ສ.', 'ພ.ພ.', 'ມິ.ຖ.', 'ກ.ລ.', 'ສ.ຫ.', 'ກ.ຍ.', 'ຕ.ລ.', 'ພ.ຈ.', 'ທ.ວ.'],
  vi: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'],
};
function monthAbbr(idx) {
  return (MONTH_ABBR[currentLang] || MONTH_ABBR.en)[idx];
}
let currentUser       = null;
let currentRole       = 'user';  // 'user' | 'manager' (view-only)
let lastCalc          = null;
let currentLang       = localStorage.getItem('lang')  || 'th';
let currentTheme      = localStorage.getItem('theme') || 'light';

const $ = (id) => document.getElementById(id);

// ===== TRANSLATION HELPERS =====
function t(key, vars = {}) {
  const lang = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  let val = lang[key] ?? TRANSLATIONS.en[key] ?? key;
  if (typeof val === 'string' && vars.n !== undefined) {
    val = val.replace('{n}', vars.n);
  }
  return String(val);
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    el.title = t(el.dataset.i18nTitle);
  });
  document.documentElement.lang = currentLang;
}

// ===== STATUS HELPERS =====
const STATUS_KEY_MAP = {
  'completed':              'statusCompleted',
  'completed-overdue':      'statusCompletedOverdue',
  'under-operation':        'statusUnderOperation',
  'under-basic':            'statusUnderBasic',
  'resign-operation':       'statusResignOperation',
  'resign-basic':           'statusResignBasic',
  'resign-before-basic':    'statusResignBeforeBasic',
  'transfer-operation':     'statusTransferOperation',
  'transfer-basic':         'statusTransferBasic',
  'transfer-before-basic':  'statusTransferBeforeBasic',
};

function statusBadgeClass(key) {
  if (key === 'completed')                                   return 'ok';
  if (key === 'completed-overdue')                           return 'warn';
  if (key === 'under-operation' || key === 'under-basic')    return 'warn';
  if (key === 'resign-operation' || key === 'resign-basic'
      || key === 'resign-before-basic')                      return 'danger';
  if (key === 'transfer-operation' || key === 'transfer-basic'
      || key === 'transfer-before-basic')                    return 'muted';
  return 'muted';
}

// ===== THEME =====
function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.dataset.theme = theme;
  $('themeToggle').textContent = theme === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('theme', theme);
  if (typeof Chart !== 'undefined') {
    Chart.defaults.color = theme === 'dark' ? '#94a3b8' : '#6b7280';
    ['gica-scheduleChart', 'gica-scheduleChartRight'].forEach(id => {
      if (_gicaCharts[id]) _gicaCharts[id].update();
    });
  }
}

function initTheme() {
  applyTheme(currentTheme);
  $('themeToggle').onclick = () => applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

// ===== LANGUAGE =====
function initLang() {
  const sel = $('langSelect');
  sel.value = currentLang;
  applyTranslations();

  sel.onchange = () => {
    currentLang = sel.value;
    localStorage.setItem('lang', currentLang);
    applyTranslations();
    if (currentDepartment) {
      const dep = departments.find(d => d.key === currentDepartment);
      if (dep) $('dashboardTitle').textContent = `${dep.label} ${t('dashboard')}`;
    }
    if (lastEmployees.length) renderEmployeeTable(lastEmployees);
    if (currentUser) {
      $('authBox').innerHTML = `${t('signedIn')} · <a href="/logout">${t('logout')}</a>`;
    }
    // Role badge text is fixed per door/mode (see _roleBadgeText) — not re-set
    // here since it doesn't change with language.
    if (lastCalc) {
      $('dueDateText').textContent = `${t('dueDate')}: ${lastCalc.due_date || '-'}`;
    }
    renderHomeDashboard($('homeDashYearFilter').value);
    // sync tab button labels to new language
    const tabBar = document.getElementById('mainTabBar');
    if (tabBar) {
      tabBar.querySelectorAll('.tab-btn[data-i18n]').forEach(btn => {
        btn.textContent = t(btn.dataset.i18n);
      });
    }
  };
}

// ===== ADMIN FAB / MODAL =====
function initAdmin() {
  $('adminBtn').onclick = () => $('adminModal').classList.remove('hidden');
  $('closeAdminBtn').onclick = closeAdmin;
  $('adminModal').onclick = (e) => { if (e.target === $('adminModal')) closeAdmin(); };
}
function closeAdmin() { $('adminModal').classList.add('hidden'); }

// ===== REGISTER MODAL =====
function initRegisterModal() {
  $('registerBtn').onclick    = () => $('registerModal').classList.remove('hidden');
  $('closeRegisterBtn').onclick = closeRegisterModal;
  $('registerModal').onclick  = (e) => { if (e.target === $('registerModal')) closeRegisterModal(); };
  $('createBtn').onclick      = createNewEmployee;
}
function closeRegisterModal() { $('registerModal').classList.add('hidden'); }

// ===== EDIT MODAL (used for search results) =====
function initEditModal() {
  $('closeEditModalBtn').onclick = closeEditModal;
  $('closeEditBtn').onclick      = closeEditModal;
  $('editModal').onclick = (e) => { if (e.target === $('editModal')) closeEditModal(); };
  $('editForm').onsubmit = saveEditForm;
}
function closeEditModal() { $('editModal').classList.add('hidden'); }

// ===== UTILITY =====
function show(el) { el.classList.remove('hidden'); }
function hide(el) { el.classList.add('hidden'); }

function showMessage(text, isError = false) {
  const box = $('messageBox');
  box.textContent = text;
  box.style.borderLeftColor = isError ? '#b42318' : '#e5b300';
  show(box);
}

function getHolidayQuery() {
  return holidays.map(h => `holiday=${encodeURIComponent(h)}`).join('&');
}

async function api(path, options = {}) {
  const res = await fetch(path, {
    ...options,
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const err = new Error(data.error || `Request failed: ${res.status}`);
    err.status = res.status;
    err.loginRequired = !!data.login_required || res.status === 401;
    throw err;
  }
  return data;
}

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function normalizeDateForInput(value) {
  if (value === null || value === undefined || value === '' || value === 0) return '';
  if (typeof value === 'number') {
    if (value <= 0) return '';
    const d = new Date(Date.UTC(1899, 11, 30) + Math.round(value) * 86400000);
    return isNaN(d.getTime()) ? '' : d.toISOString().slice(0, 10);
  }
  const str = String(value).trim();
  if (!str) return '';
  const d = new Date(str);
  if (isNaN(d.getTime())) return str.slice(0, 10);
  return d.toISOString().slice(0, 10);
}

// ===== HOLIDAYS =====
function renderHolidays() {
  const list = $('holidayList');
  list.innerHTML = '';
  holidays.forEach(date => {
    const chip = document.createElement('span');
    chip.className = 'chip';
    chip.innerHTML = `${escapeHtml(date)} <button type="button">×</button>`;
    chip.querySelector('button').onclick = () => {
      holidays = holidays.filter(h => h !== date);
      localStorage.setItem('specialHolidays', JSON.stringify(holidays));
      renderHolidays();
      if (currentDepartment) loadDashboard();
    };
    list.appendChild(chip);
  });
}

// ===== PAGES =====
function setPage(page) {
  hide($('homePage'));
  hide($('dashboardPage'));
  if (page === 'home')      show($('homePage'));
  if (page === 'dashboard') show($('dashboardPage'));
}

// ===== DEPARTMENT GRID =====
function selectDepartmentKey(key, label) {
  currentDepartment = key;
  currentFilter     = '';
  currentYearFilter = '';
  if ($('statusFilter'))  $('statusFilter').value  = '';
  if ($('empYearFilter')) $('empYearFilter').value = '';
  $('dashboardTitle').textContent = `${label} ${t('dashboard')}`;
  if (activeMainTab !== 'newOperator' && _switchMainTab) _switchMainTab('newOperator');
  setPage('dashboard');
  loadDashboard();
}

function renderDepartmentButtons() {
  const grid = $('departmentGrid');
  grid.innerHTML = '';
  departments.forEach(dep => {
    const btn = document.createElement('button');
    btn.className = 'department-btn';
    btn.textContent = dep.label;
    btn.onclick = () => selectDepartmentKey(dep.key, dep.label);
    grid.appendChild(btn);
  });
}

// ===== COMPUTE ACTUAL STATUS =====
// Rule priority (earliest match wins):
//   1) Resign Date present  → resigned (by furthest phase reached)
//   2) Transfers Date present → transferred (by furthest phase reached)
//   3) Operation End present → completed (on-time vs overdue by Excel Due date)
//   4) Active training (Op Start → under-operation, Basic Start → under-basic)
//   5) Fallback → under-basic
// Per user spec: Resign and Transfer never appear together on the same record.
function computeActualStatus(emp, calc) {
  function hasData(v) {
    return v !== null && v !== undefined && v !== '' && v !== 0;
  }
  const csaStart   = emp['CSA Start Date'];
  const basicStart = emp['Basic Start'];
  const opStart    = emp['Operation Start'];
  const opEnd      = emp['Operation End'];
  const resignDate = emp['Resign Date'];
  const transferDate = emp['Transfers Date'];
  // Use the SAME Due date that the table displays (raw from Excel),
  // normalized to YYYY-MM-DD so string-compare is reliable.
  const dueDate = normalizeDateForInput(emp['Due date']) || '';

  // 1) Resign takes priority over everything else
  if (hasData(resignDate)) {
    if (hasData(opStart))         return 'resign-operation';
    if (hasData(basicStart))      return 'resign-basic';
    if (hasData(csaStart))        return 'resign-before-basic';
    return 'resign-before-basic';
  }

  // 2) Transfer next
  if (hasData(transferDate)) {
    if (hasData(opStart))         return 'transfer-operation';
    if (hasData(basicStart))      return 'transfer-basic';
    if (hasData(csaStart))        return 'transfer-before-basic';
    return 'transfer-before-basic';
  }

  // 3) Operation End → completed (on-time vs overdue)
  if (hasData(opEnd)) {
    const opEndNorm = normalizeDateForInput(opEnd);
    if (dueDate && opEndNorm && opEndNorm > dueDate) return 'completed-overdue';
    return 'completed';
  }

  // 4) Active training
  if (hasData(opStart))    return 'under-operation';
  if (hasData(basicStart)) return 'under-basic';

  // 5) Fallback
  return 'under-basic';
}

// ===== EMPLOYEE TABLE — VIEW ROW =====
function fmtEff(val) {
  if (val === '' || val === null || val === undefined) return '';
  const n = parseFloat(val);
  if (isNaN(n)) return '';
  // stored as decimal ratio (0–1) → multiply to get percent
  const pct = n <= 1 ? n * 100 : n;
  return pct % 1 === 0 ? pct + '%' : pct.toFixed(1) + '%';
}

function buildRowHTML(emp, calc, actualKey) {
  const nd  = (v) => escapeHtml(normalizeDateForInput(v) || '');
  const esc = escapeHtml;
  const badgeClass = statusBadgeClass(actualKey);
  const statusLabel = t(STATUS_KEY_MAP[actualKey] || actualKey);
  const empId = esc(String(emp['Employee ID'] || ''));

  const leave = parseInt(emp['Employees Leave'], 10) || 0;

  return `
    <td class="td-actions"><button class="btn-row-edit" data-id="${empId}" title="${t('tooltipEdit')}">✏</button></td>
    <td>${esc(emp['Employee ID']   || '')}</td>
    <td>${esc(emp['Employee Name'] || '')}</td>
    <td>${esc(emp['Grade']         || '')}</td>
    <td>${nd(emp['CSA Start Date'])}</td>
    <td>${nd(emp['Due date'])}</td>
    <td>${nd(emp['Basic Start'])}</td>
    <td>${nd(emp['Basic End'])}</td>
    <td>${nd(emp['Operation Start'])}</td>
    <td>${nd(emp['Operation End'])}</td>
    <td>${nd(emp['Resign Date'])}</td>
    <td>${nd(emp['Transfers Date'])}</td>
    <td>${esc(fmtEff(emp['Graduate Eff']))}</td>
    <td><span class="badge ${badgeClass}">${esc(statusLabel)}</span></td>
    <td class="leave-cell">${leave}</td>
  `;
}

// ===== INLINE EDIT — ENTER EDIT MODE =====
function startInlineEdit(tr, emp, calc, actualKey) {
  tr.classList.add('editing');
  const nd    = (v) => normalizeDateForInput(v) || '';
  const esc   = escapeHtml;
  const grade = emp['Grade'] || '';

  const leave = parseInt(emp['Employees Leave'], 10) || 0;

  tr.innerHTML = `
    <td class="td-actions">
      <button class="btn-confirm-inline" title="${t('tooltipConfirm')}">✓</button>
      <button class="btn-cancel-inline"  title="${t('tooltipCancel')}">✗</button>
    </td>
    <td>${esc(emp['Employee ID'] || '')}</td>
    <td><input class="inline-edit" name="Employee Name" value="${esc(emp['Employee Name'] || '')}"></td>
    <td>
      <select class="inline-edit" name="Grade">
        <option value="">--</option>
        <option value="B"${grade === 'B' ? ' selected' : ''}>B</option>
        <option value="C"${grade === 'C' ? ' selected' : ''}>C</option>
        <option value="D"${grade === 'D' ? ' selected' : ''}>D</option>
        <option value="E"${grade === 'E' ? ' selected' : ''}>E</option>
      </select>
    </td>
    <td><input class="inline-edit" type="date" name="CSA Start Date"   value="${nd(emp['CSA Start Date'])}"></td>
    <td>${nd(emp['Due date'])}</td>
    <td><input class="inline-edit" type="date" name="Basic Start"      value="${nd(emp['Basic Start'])}"></td>
    <td><input class="inline-edit" type="date" name="Basic End"        value="${nd(emp['Basic End'])}"></td>
    <td><input class="inline-edit" type="date" name="Operation Start"  value="${nd(emp['Operation Start'])}"></td>
    <td><input class="inline-edit" type="date" name="Operation End"    value="${nd(emp['Operation End'])}"></td>
    <td><input class="inline-edit" type="date" name="Resign Date"      value="${nd(emp['Resign Date'])}"></td>
    <td><input class="inline-edit" type="date" name="Transfers Date"   value="${nd(emp['Transfers Date'])}"></td>
    <td><input class="inline-edit" type="number" name="Graduate Eff"   value="${esc(String(emp['Graduate Eff'] ?? ''))}" min="0" max="100" step="0.01"></td>
    <td><span class="badge ${statusBadgeClass(actualKey)}">${esc(t(STATUS_KEY_MAP[actualKey] || actualKey))}</span></td>
    <td><input class="inline-edit" type="number" name="Employees Leave" value="${leave}" min="0" step="1"></td>
  `;
}

// ===== INLINE EDIT — CANCEL =====
function cancelInlineEdit(tr, emp, calc, actualKey) {
  tr.classList.remove('editing');
  tr.innerHTML = buildRowHTML(emp, calc, actualKey);
}

// ===== INLINE EDIT — CONFIRM & SAVE =====
async function confirmInlineEdit(tr, employeeId) {
  const confirmBtn = tr.querySelector('.btn-confirm-inline');
  if (confirmBtn) confirmBtn.disabled = true;

  const payload = {};
  tr.querySelectorAll('.inline-edit').forEach(input => {
    payload[input.name] = input.value;
  });

  // Preserve Comment from cached data (not shown inline)
  const cachedEmp = lastEmployees.find(e => String(e['Employee ID']) === String(employeeId));
  if (cachedEmp && cachedEmp['Comment'] !== undefined) {
    payload['Comment'] = cachedEmp['Comment'];
  }

  payload._holidays = holidays;

  try {
    const data = await api(
      `/api/${currentDepartment}/employees/${encodeURIComponent(employeeId)}`,
      { method: 'PATCH', body: JSON.stringify(payload) }
    );
    // Update cache
    const idx = lastEmployees.findIndex(e => String(e['Employee ID']) === String(employeeId));
    if (idx >= 0) lastEmployees[idx] = data.employee;
    showMessage(t('updated'));
    renderEmployeeTable(lastEmployees);
  } catch (err) {
    if (confirmBtn) confirmBtn.disabled = false;
    showMessage(err.message, true);
  }
}

// ===== POPULATE EMPLOYEE YEAR FILTER =====
function populateEmpYearFilter(employees) {
  const sel = $('empYearFilter');
  if (!sel) return;
  const prev = sel.value;
  const years = [...new Set(
    employees
      .map(e => normalizeDateForInput(e['CSA Start Date']))
      .filter(Boolean)
      .map(d => d.slice(0, 4))
  )].sort((a, b) => b - a);

  sel.innerHTML = `<option value="" data-i18n="allYears">${t('allYears')}</option>`;
  years.forEach(yr => {
    const opt = document.createElement('option');
    opt.value = yr;
    opt.textContent = yr;
    sel.appendChild(opt);
  });
  if (years.includes(prev)) sel.value = prev;
}

// ===== RENDER EMPLOYEE TABLE =====
function renderEmployeeTable(employees) {
  const body = $('employeeTableBody');
  body.innerHTML = '';

  // #1 stats follow the year filter
  const yearScoped = currentYearFilter
    ? employees.filter(emp => {
        const d = normalizeDateForInput(emp['CSA Start Date']);
        return d && d.slice(0, 4) === currentYearFilter;
      })
    : employees;

  let total = yearScoped.length;
  let completedOnTime = 0, completedOverdue = 0;
  let underOp = 0, underBasic = 0;
  let resignOp = 0, resignBasic = 0, resignBeforeBasic = 0;
  let transferOp = 0, transferBasic = 0, transferBeforeBasic = 0;

  yearScoped.forEach(emp => {
    const calc = emp.calculated || {};
    const actualKey = computeActualStatus(emp, calc);

    if      (actualKey === 'completed')             completedOnTime++;
    else if (actualKey === 'completed-overdue')     completedOverdue++;
    else if (actualKey === 'under-operation')       underOp++;
    else if (actualKey === 'under-basic')           underBasic++;
    else if (actualKey === 'resign-operation')      resignOp++;
    else if (actualKey === 'resign-basic')          resignBasic++;
    else if (actualKey === 'resign-before-basic')   resignBeforeBasic++;
    else if (actualKey === 'transfer-operation')    transferOp++;
    else if (actualKey === 'transfer-basic')        transferBasic++;
    else if (actualKey === 'transfer-before-basic') transferBeforeBasic++;

    if (currentFilter && actualKey !== currentFilter) return;

    const tr = document.createElement('tr');
    tr.className = `actual-${actualKey}`;
    tr.dataset.employeeId = emp['Employee ID'] || '';
    tr.innerHTML = buildRowHTML(emp, calc, actualKey);
    body.appendChild(tr);
  });

  $('totalCount').textContent               = total;
  $('onTrackCount').textContent             = completedOnTime + completedOverdue;
  $('completedOnTimeCount').textContent     = completedOnTime;
  $('completedOverdueCount').textContent    = completedOverdue;
  $('trainingCount').textContent            = underOp + underBasic;
  $('underOpCount').textContent             = underOp;
  $('underBasicCount').textContent          = underBasic;
  $('overdueCount').textContent             = resignOp + resignBasic + resignBeforeBasic;
  $('resignOpCount').textContent            = resignOp;
  $('resignBasicCount').textContent         = resignBasic;
  $('resignBeforeBasicCount').textContent   = resignBeforeBasic;
  $('transferCount').textContent            = transferOp + transferBasic + transferBeforeBasic;
  $('transferOpCount').textContent          = transferOp;
  $('transferBasicCount').textContent       = transferBasic;
  $('transferBeforeBasicCount').textContent = transferBeforeBasic;
}

// ===== DASHBOARD PAGE =====
async function loadDashboard() {
  if (!currentDepartment) return;
  showMessage(t('loading'));
  try {
    const query = getHolidayQuery();
    const data = await api(`/api/${currentDepartment}/employees${query ? '?' + query : ''}`);
    lastEmployees = data.employees || [];
    populateEmpYearFilter(lastEmployees);
    renderEmployeeTable(lastEmployees);
    showMessage(t('loadedCount', { n: lastEmployees.length }));
  } catch (err) {
    if (err.loginRequired) {
      hide($('mainTabBar'));
      show($('loginPanel'));
      startLoginParticles();
      setPage('home');
    } else {
      showMessage(err.message, true);
    }
  }
}

// ===== HOME DASHBOARD =====
async function loadHomeDashboard() {
  const loadingEl    = $('homeDashLoading');
  const cardEl       = $('homeDashCard');
  const gridEl       = $('homeDashGrid');
  const analyticsEl  = $('homeDashAnalytics');
  show(loadingEl);
  hide(cardEl);
  hide(gridEl);
  hide(analyticsEl);

  try {
    const query = getHolidayQuery();
    const results = await Promise.allSettled(
      departments.map(dep =>
        api(`/api/${dep.key}/employees${query ? '?' + query : ''}`)
          .then(data => ({ key: dep.key, employees: data.employees || [] }))
      )
    );

    const allFailedAuth = results.length > 0 &&
      results.every(r => r.status === 'rejected' && r.reason && r.reason.loginRequired);
    if (allFailedAuth) {
      hide(loadingEl);
      hide($('mainTabBar'));
      show($('loginPanel'));
      startLoginParticles();
      setPage('home');
      return;
    }

    results.forEach(r => {
      if (r.status === 'fulfilled') allDeptData[r.value.key] = r.value.employees;
    });

    // Build year options from CSA Start Date across all departments
    const years = new Set();
    Object.values(allDeptData).forEach(emps => {
      emps.forEach(emp => {
        const d = normalizeDateForInput(emp['CSA Start Date']);
        if (d) years.add(d.slice(0, 4));
      });
    });

    const sel = $('homeDashYearFilter');
    const prev = sel.value;
    sel.innerHTML = `<option value="" data-i18n="allYears">${t('allYears')}</option>`;
    [...years].sort().reverse().forEach(yr => {
      const opt = document.createElement('option');
      opt.value = yr;
      opt.textContent = yr;
      if (yr === prev) opt.selected = true;
      sel.appendChild(opt);
    });

    hide(loadingEl);
    show(cardEl);
    show(gridEl);
    renderHomeDashboard(sel.value);
  } catch (err) {
    hide(loadingEl);
    showMessage(err.message, true);
  }
}

// ===== ANALYTICS HELPERS =====
// mode: 'total' = calendar-day diff (b - a)
//       '5d'    = count weekdays (Mon-Fri) in [a..b] inclusive
//       '6d'    = count non-Sundays in [a..b] inclusive
function dateDiffDays(rawA, rawB, mode) {
  const a = normalizeDateForInput(rawA);
  const b = normalizeDateForInput(rawB);
  if (!a || !b) return null;
  const dA = new Date(a);
  const dB = new Date(b);
  if (isNaN(dA) || isNaN(dB) || dB < dA) return null;

  if (!mode || mode === 'total') {
    return Math.round((dB - dA) / 86400000);
  }
  // Inclusive count between dA and dB
  let count = 0;
  const cur = new Date(dA);
  while (cur <= dB) {
    const dow = cur.getDay();  // 0=Sun, 6=Sat
    if (mode === '5d' && dow !== 0 && dow !== 6) count++;
    else if (mode === '6d' && dow !== 0)         count++;
    cur.setDate(cur.getDate() + 1);
  }
  return count;
}

// SVG donut chart. segments = [{value, color, label}]
function donutSVG(segments, size) {
  size = size || 130;
  const total = segments.reduce((s, seg) => s + (seg.value || 0), 0);
  const cx = size / 2, cy = size / 2;
  const r  = size / 2 - 12;
  const sw = 22;
  const C  = 2 * Math.PI * r;

  if (total === 0) {
    return `<svg viewBox="0 0 ${size} ${size}" class="donut-svg">
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="var(--border-light)" stroke-width="${sw}"/>
      <text x="${cx}" y="${cy+4}" text-anchor="middle" font-size="11" fill="var(--text-muted)">${escapeHtml(t('analyticsNoData'))}</text>
    </svg>`;
  }

  let offset = 0;
  const paths = segments.filter(s => s.value > 0).map(seg => {
    const len = (seg.value / total) * C;
    const dash = `${len} ${C - len}`;
    const html = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${seg.color}" stroke-width="${sw}" stroke-dasharray="${dash}" stroke-dashoffset="${-offset}" transform="rotate(-90 ${cx} ${cy})"/>`;
    offset += len;
    return html;
  }).join('');

  return `<svg viewBox="0 0 ${size} ${size}" class="donut-svg">
    ${paths}
    <text x="${cx}" y="${cy-2}" text-anchor="middle" font-size="22" font-weight="800" fill="currentColor">${total}</text>
    <text x="${cx}" y="${cy+14}" text-anchor="middle" font-size="9" fill="var(--text-muted)">${escapeHtml(t('analyticsEmployees'))}</text>
  </svg>`;
}

// Trend data: month-by-month counts of (joined / inTraining / completed / resigned).
// yearFilter '' = aggregate across all years per calendar month (Jan = sum of all Januaries).
// Otherwise restrict to that single year.
//
// "inTraining" event date follows user rule: prefer Operation Start if present,
// otherwise fall back to Basic Start. Each employee contributes to at most one month.
function computeTrendData(yearFilter, deptFilter) {
  const employees = deptFilter
    ? (allDeptData[deptFilter] || [])
    : Object.values(allDeptData).flat();

  const joined     = new Array(12).fill(0);
  const inTraining = new Array(12).fill(0);
  const completed  = new Array(12).fill(0);
  const resigned   = new Array(12).fill(0);

  const addToMonth = (rawDate, arr) => {
    const iso = normalizeDateForInput(rawDate);
    if (!iso) return;
    const parts = iso.split('-');
    if (parts.length < 2) return;
    const y = parts[0];
    const m = parseInt(parts[1], 10);
    if (yearFilter && y !== yearFilter) return;
    if (m < 1 || m > 12) return;
    arr[m - 1]++;
  };

  employees.forEach(emp => {
    addToMonth(emp['CSA Start Date'], joined);
    // In Training: prefer Op Start over Basic Start (per user spec)
    const trainingStartDate = normalizeDateForInput(emp['Operation Start'])
                           || normalizeDateForInput(emp['Basic Start']);
    if (trainingStartDate) addToMonth(trainingStartDate, inTraining);
    addToMonth(emp['Operation End'],  completed);
    addToMonth(emp['Resign Date'],    resigned);
  });

  return { joined, inTraining, completed, resigned };
}

// SVG line chart with area fill + dots. Series toggled by `visibility`.
function trendChartSVG(data, visibility) {
  // Wider viewBox so the chart naturally fills full desktop card width
  // (CSS clamps height to ~380px via max-height for taste).
  const W = 1400, H = 360;
  const padL = 50, padR = 20, padT = 20, padB = 42;
  const chartW = W - padL - padR;
  const chartH = H - padT - padB;

  const series = [
    { key: 'joined',     color: '#f59e0b', label: t('trendJoined'),    values: data.joined     },
    { key: 'inTraining', color: '#3b82f6', label: t('training'),       values: data.inTraining },
    { key: 'completed',  color: '#10b981', label: t('trendCompleted'), values: data.completed  },
    { key: 'resigned',   color: '#ef4444', label: t('trendResigned'),  values: data.resigned   },
  ];

  // Y-axis scale from visible series only
  let maxY = 0;
  series.forEach(s => {
    if (!visibility[s.key]) return;
    s.values.forEach(v => { if (v > maxY) maxY = v; });
  });
  let niceMax = maxY <= 5 ? 5 : Math.ceil(maxY / 5) * 5;

  const xAt = (i) => padL + (i / 11) * chartW;
  const yAt = (v) => padT + chartH - (v / niceMax) * chartH;

  // Horizontal gridlines at 0%, 25%, 50%, 75%, 100%
  const ticks = [0, 0.25, 0.5, 0.75, 1].map(p => {
    const val = Math.round(niceMax * p);
    const y = yAt(val);
    return `<line x1="${padL}" y1="${y}" x2="${W - padR}" y2="${y}"
              stroke="var(--border-light)" stroke-width="0.8"
              stroke-dasharray="${p === 0 ? '0' : '3 4'}"/>
            <text x="${padL - 8}" y="${y + 4}" text-anchor="end"
              font-size="13" fill="var(--text-muted)">${val}</text>`;
  }).join('');

  // X-axis labels: all 12 months
  const xLabels = [...Array(12)].map((_, i) => `
    <text x="${xAt(i)}" y="${H - 16}" text-anchor="middle"
      font-size="14" fill="var(--text-muted)" font-weight="600">${escapeHtml(monthAbbr(i))}</text>`
  ).join('');

  // For each visible series, draw area fill + line + data points
  const seriesGfx = series.filter(s => visibility[s.key]).map(s => {
    const pts = s.values.map((v, i) => `${xAt(i).toFixed(1)},${yAt(v).toFixed(1)}`);
    const baselineY = yAt(0).toFixed(1);
    const areaPath  = `M ${xAt(0).toFixed(1)},${baselineY} `
                    + `L ${pts.join(' L ')} `
                    + `L ${xAt(11).toFixed(1)},${baselineY} Z`;

    const dots = s.values.map((v, i) => `
      <circle cx="${xAt(i).toFixed(1)}" cy="${yAt(v).toFixed(1)}"
        r="5" fill="${s.color}" stroke="var(--surface2)" stroke-width="2">
        <title>${escapeHtml(s.label)} · ${escapeHtml(monthAbbr(i))}: ${v}</title>
      </circle>`).join('');

    return `
      <path d="${areaPath}" fill="${s.color}" opacity="0.13"/>
      <polyline points="${pts.join(' ')}" fill="none"
        stroke="${s.color}" stroke-width="3"
        stroke-linejoin="round" stroke-linecap="round"/>
      ${dots}`;
  }).join('');

  return `<svg viewBox="0 0 ${W} ${H}" class="trend-svg"
            preserveAspectRatio="xMidYMid meet" role="img">
    ${ticks}
    ${xLabels}
    ${seriesGfx}
  </svg>`;
}

// Build a chart card (donut + legend)
function chartCard(title, segments) {
  const total = segments.reduce((s, seg) => s + (seg.value || 0), 0);
  const legend = segments.map(seg => {
    const pct = total > 0 ? (seg.value / total * 100).toFixed(1) : 0;
    return `
      <div class="legend-row">
        <span class="legend-dot" style="background:${seg.color}"></span>
        <span class="legend-label">${escapeHtml(seg.label)}</span>
        <span class="legend-count">${seg.value} <span class="pct-sm">(${pct}%)</span></span>
      </div>`;
  }).join('');

  return `
    <div class="chart-card">
      <div class="chart-title">${escapeHtml(title)}</div>
      <div class="chart-svg-wrap">${donutSVG(segments)}</div>
      <div class="chart-legend">${legend}</div>
    </div>`;
}

function statSummary(values) {
  if (!values.length) return null;
  const avg = values.reduce((s, v) => s + v, 0) / values.length;
  return {
    avg: Math.round(avg * 10) / 10,
    min: Math.min(...values),
    max: Math.max(...values),
    n:   values.length,
  };
}

function computeAnalytics(yearFilter, deptFilter, dayMode) {
  // 1.3 if deptFilter is set, only use that department's data; else aggregate all
  const all = deptFilter
    ? (allDeptData[deptFilter] || [])
    : Object.values(allDeptData).flat();
  const filtered = yearFilter
    ? all.filter(emp => {
        const d = normalizeDateForInput(emp['CSA Start Date']);
        return d && d.slice(0, 4) === yearFilter;
      })
    : all;

  const totalDays = [], basicDays = [], opDays = [], resignDays = [];
  // Dynamic per-grade collectors — accept whatever grade values the Excel actually contains
  const opDaysByGrade      = {};
  const totalDaysByGrade   = {};
  const resignCountByGrade = {};  // count of resignations per grade
  const resignDaysByGrade  = {};  // resign duration (days) per grade — for avg calc
  const totalCountByGrade  = {};  // total employee count per grade — for resign rate %
  const resignDaysByType = { operation: [], basic: [], beforeBasic: [] };
  // Basic → Op proceed rate
  // Formula: (employees with Operation Start) / (employees with Basic Start) × 100
  // Counts are independent — denominator = anyone who started Basic;
  // numerator = anyone who reached Operation Start (regardless of Basic End).
  let basicStartedCount  = 0;   // denominator: people with Basic Start set
  let opStartedCount     = 0;   // numerator:   people with Operation Start set
  // status counts for chart visualization
  const sc = {
    completed: 0, completedOverdue: 0,
    underOp: 0, underBasic: 0,
    resignOp: 0, resignBasic: 0, resignBeforeBasic: 0,
    transferOp: 0, transferBasic: 0, transferBeforeBasic: 0,
  };

  filtered.forEach(emp => {
    const status = computeActualStatus(emp, emp.calculated || {});

    // Status tallies for charts
    if      (status === 'completed')             sc.completed++;
    else if (status === 'completed-overdue')     sc.completedOverdue++;
    else if (status === 'under-operation')       sc.underOp++;
    else if (status === 'under-basic')           sc.underBasic++;
    else if (status === 'resign-operation')      sc.resignOp++;
    else if (status === 'resign-basic')          sc.resignBasic++;
    else if (status === 'resign-before-basic')   sc.resignBeforeBasic++;
    else if (status === 'transfer-operation')    sc.transferOp++;
    else if (status === 'transfer-basic')        sc.transferBasic++;
    else if (status === 'transfer-before-basic') sc.transferBeforeBasic++;

    const empGrade = String(emp['Grade'] || '').toUpperCase().trim();

    // count total employees per grade (all statuses)
    if (empGrade) totalCountByGrade[empGrade] = (totalCountByGrade[empGrade] || 0) + 1;

    // 1.1 Total training: Operation End - CSA Start Date (all + per-grade)
    // View by Grade counts only graduated employees (completed / completed-overdue)
    const d11 = dateDiffDays(emp['CSA Start Date'], emp['Operation End'], dayMode);
    if (d11 !== null) {
      totalDays.push(d11);
      if (empGrade && (status === 'completed' || status === 'completed-overdue')) {
        if (!totalDaysByGrade[empGrade]) totalDaysByGrade[empGrade] = [];
        totalDaysByGrade[empGrade].push(d11);
      }
    }

    // 1.2 Basic training: Basic End - Basic Start
    const d12 = dateDiffDays(emp['Basic Start'], emp['Basic End'], dayMode);
    if (d12 !== null) basicDays.push(d12);

    // 1.2a Basic → Op proceed rate
    // New formula: independent counts — (Op Start count) / (Basic Start count)
    const hasBasicStart = !!normalizeDateForInput(emp['Basic Start']);
    const hasOpStart    = !!normalizeDateForInput(emp['Operation Start']);
    if (hasBasicStart) basicStartedCount++;
    if (hasOpStart)    opStartedCount++;

    // 1.3 Operation training: Operation End - Operation Start (all + per-grade)
    const d13 = dateDiffDays(emp['Operation Start'], emp['Operation End'], dayMode);
    if (d13 !== null) {
      opDays.push(d13);
      if (empGrade) {
        if (!opDaysByGrade[empGrade]) opDaysByGrade[empGrade] = [];
        opDaysByGrade[empGrade].push(d13);
      }
    }

    // 1.4 Resign duration — overall + broken down by resign type + by grade
    if (status === 'resign-operation' || status === 'resign-basic'
        || status === 'resign-before-basic') {
      const d14 = dateDiffDays(emp['CSA Start Date'], emp['Resign Date'], dayMode);
      if (d14 !== null) {
        resignDays.push(d14);
        if      (status === 'resign-operation')    resignDaysByType.operation.push(d14);
        else if (status === 'resign-basic')        resignDaysByType.basic.push(d14);
        else if (status === 'resign-before-basic') resignDaysByType.beforeBasic.push(d14);
        // avg resign duration per grade
        if (empGrade) {
          if (!resignDaysByGrade[empGrade]) resignDaysByGrade[empGrade] = [];
          resignDaysByGrade[empGrade].push(d14);
        }
      }
      // count resignations per grade (regardless of whether duration is available)
      if (empGrade) {
        resignCountByGrade[empGrade] = (resignCountByGrade[empGrade] || 0) + 1;
      }
    }
  });

  // Summarize per-grade dynamically (accepts whatever grades exist in the data)
  const summarizeByGrade = (dict) => {
    const out = {};
    Object.keys(dict).forEach(g => { out[g] = statSummary(dict[g]); });
    return out;
  };

  const result = {
    total:             statSummary(totalDays),
    basic:             statSummary(basicDays),
    operation:         statSummary(opDays),
    totalByGrade:      summarizeByGrade(totalDaysByGrade),
    opByGrade:         summarizeByGrade(opDaysByGrade),
    basicProceed: {
      finished:  basicStartedCount,   // denominator (Basic Start count)
      proceeded: opStartedCount,      // numerator   (Op Start count)
      pct: basicStartedCount > 0 ? (opStartedCount / basicStartedCount * 100) : null,
    },
    resign:            statSummary(resignDays),
    resignByType: {
      operation:   statSummary(resignDaysByType.operation),
      basic:       statSummary(resignDaysByType.basic),
      beforeBasic: statSummary(resignDaysByType.beforeBasic),
    },
    resignCountByGrade,
    resignAvgByGrade:  summarizeByGrade(resignDaysByGrade),
    totalCountByGrade,
    resignOp:          sc.resignOp,
    resignBasic:       sc.resignBasic,
    resignBeforeBasic: sc.resignBeforeBasic,
    resignTotal:       sc.resignOp + sc.resignBasic + sc.resignBeforeBasic,
    statusCounts:      sc,
  };

  return result;
}

function renderAnalytics(yearFilter) {
  const el = $('homeDashAnalytics');
  if (!el) return;
  if (!Object.keys(allDeptData).length) { hide(el); return; }

  const s = computeAnalytics(yearFilter, currentAnalyticsDept, currentDayMode);
  const sc = s.statusCounts;

  // ── Chart palette ──────────────────────────────────────────────────────
  const C = {
    grad:        'rgba(34,197,94,.88)',     // green (graduation)
    gradLight:   'rgba(167,243,208,.95)',   // light green (overdue grad)
    train:       'rgba(59,130,246,.88)',    // blue (training)
    trainLight:  'rgba(147,197,253,.95)',   // light blue (basic)
    resign:      'rgba(220,38,38,.92)',     // red (resign-op, darkest)
    resignMed:   'rgba(248,113,113,.95)',   // medium red (resign-basic)
    resignLight: 'rgba(254,202,202,.95)',   // light red (resign-before-basic)
    transfer:    'rgba(168,85,247,.85)',    // purple (transfer)
  };

  // Build the 4 chart datasets
  const gradTotal     = sc.completed + sc.completedOverdue;
  const trainingTotal = sc.underOp + sc.underBasic;
  const resignTotalC  = sc.resignOp + sc.resignBasic + sc.resignBeforeBasic;
  const transferTotal = sc.transferOp + sc.transferBasic + sc.transferBeforeBasic;

  const chartOverall = chartCard(t('chartOverall'), [
    { value: gradTotal,     color: C.grad,     label: t('congratulations') },
    { value: trainingTotal, color: C.train,    label: t('training') },
    { value: resignTotalC,  color: C.resign,   label: t('resignation') },
    { value: transferTotal, color: C.transfer, label: t('statusTransfer') },
  ]);
  const chartGrad = chartCard(t('chartGradBreakdown'), [
    { value: sc.completed,        color: C.grad,      label: t('statusOnTime') },
    { value: sc.completedOverdue, color: C.gradLight, label: t('statusOverdue') },
  ]);
  const chartTraining = chartCard(t('chartTrainingBreakdown'), [
    { value: sc.underOp,    color: C.train,      label: t('statusUnderOperation') },
    { value: sc.underBasic, color: C.trainLight, label: t('statusUnderBasic') },
  ]);
  const chartResign = chartCard(t('chartResignBreakdown'), [
    { value: sc.resignOp,          color: C.resign,      label: t('statusResignOperation') },
    { value: sc.resignBasic,       color: C.resignMed,   label: t('statusResignBasic') },
    { value: sc.resignBeforeBasic, color: C.resignLight, label: t('statusResignBeforeBasic') },
  ]);

  const fmtStatCard = (stat) => {
    if (!stat) return `<div class="ac-no-data">${t('analyticsNoData')}</div>`;
    const avgFmt = stat.avg % 1 === 0 ? stat.avg : stat.avg.toFixed(1);
    return `
      <div class="ac-avg-label">${t('analyticsAvg')}</div>
      <div class="ac-avg-value">${avgFmt} <span class="ac-unit">${t('analyticsDays')}</span></div>
      <div class="ac-minmax">
        <div class="ac-minmax-item">
          <span class="ac-minmax-label">${t('analyticsMin')}</span>
          <span class="ac-minmax-value">${stat.min} <span class="ac-minmax-unit">${t('analyticsDays')}</span></span>
        </div>
        <div class="ac-minmax-item">
          <span class="ac-minmax-label">${t('analyticsMax')}</span>
          <span class="ac-minmax-value">${stat.max} <span class="ac-minmax-unit">${t('analyticsDays')}</span></span>
        </div>
      </div>`;
  };

  // ── Resign Breakdown card: avg + min/max per grade (mini stat-card per grade) ─
  const buildResignAvgCard = () => {
    const avgByGrade = s.resignAvgByGrade || {};
    const grades = Object.keys(avgByGrade).filter(g => avgByGrade[g]).sort();
    if (!grades.length) return `<div class="ac-no-data">${t('analyticsNoData')}</div>`;
    return `<div class="ac-rga-list">${grades.map(g => {
      const stat   = avgByGrade[g];
      const avgFmt = stat.avg % 1 === 0 ? stat.avg : stat.avg.toFixed(1);
      return `<div class="ac-rga-grade">
        <div class="ac-rga-grade-head">
          <span class="ac-xt-tag" style="background:var(--danger)">${escapeHtml(g)}</span>
          <div class="ac-avg-value ac-rga-avg-value">${avgFmt} <span class="ac-unit">${t('analyticsDays')}</span></div>
        </div>
        <div class="ac-minmax">
          <div class="ac-minmax-item">
            <span class="ac-minmax-label">${t('analyticsMin')}</span>
            <span class="ac-minmax-value">${stat.min} <span class="ac-minmax-unit">${t('analyticsDays')}</span></span>
          </div>
          <div class="ac-minmax-item">
            <span class="ac-minmax-label">${t('analyticsMax')}</span>
            <span class="ac-minmax-value">${stat.max} <span class="ac-minmax-unit">${t('analyticsDays')}</span></span>
          </div>
          <div class="ac-minmax-item">
            <span class="ac-minmax-label">N</span>
            <span class="ac-minmax-value">${stat.n}</span>
          </div>
        </div>
      </div>`;
    }).join('')}</div>`;
  };

  // 1.3 Department filter dropdown
  const deptOptions = [`<option value="">${escapeHtml(t('analyticsAllDept'))}</option>`]
    .concat(departments.map(d =>
      `<option value="${escapeHtml(d.key)}"${d.key === currentAnalyticsDept ? ' selected' : ''}>${escapeHtml(d.label)}</option>`
    )).join('');

  // Day-mode button group
  const dayBtn = (mode, label) =>
    `<button type="button" class="day-mode-btn${currentDayMode === mode ? ' active' : ''}" data-mode="${mode}">${escapeHtml(label)}</button>`;

  // ── Monthly trend card ────────────────────────────────────────────────
  const yearOptions = [...($('homeDashYearFilter').options || [])]
    .map(o => `<option value="${escapeHtml(o.value)}"${o.value === yearFilter ? ' selected' : ''}>${escapeHtml(o.textContent)}</option>`)
    .join('');

  const trendData = computeTrendData(yearFilter, currentAnalyticsDept);
  const trendSeries = [
    { key: 'joined',     color: '#f59e0b', label: t('trendJoined')    },
    { key: 'inTraining', color: '#3b82f6', label: t('training')       },
    { key: 'completed',  color: '#10b981', label: t('trendCompleted') },
    { key: 'resigned',   color: '#ef4444', label: t('trendResigned')  },
  ];
  const trendToggles = trendSeries.map(ts => `
    <button type="button"
      class="trend-toggle${trendVisibility[ts.key] ? ' active' : ''}"
      data-series="${ts.key}">
      <span class="trend-dot" style="background:${ts.color}"></span>
      <span>${escapeHtml(ts.label)}</span>
    </button>`).join('');

  const trendCardHTML = `
    <div class="trend-chart-card">
      <div class="trend-header">
        <div class="trend-header-left">
          <h4>${escapeHtml(t('trendTitle'))}</h4>
          <select id="trendYearFilter" class="year-select trend-filter-sel">
            ${yearOptions}
          </select>
          <select id="trendDeptFilter" class="year-select trend-filter-sel">
            ${deptOptions}
          </select>
        </div>
        <div class="trend-toggle-group" id="trendToggleGroup">
          ${trendToggles}
        </div>
      </div>
      <div class="trend-chart-wrap">
        ${trendChartSVG(trendData, trendVisibility)}
      </div>
    </div>`;

  // ── Number formatter (drop .0 for integers) ───────────────────────────
  const fmtNum = (v) => (v % 1 === 0 ? v : v.toFixed(1));

  // ── Per-grade table rows (used in Total + Op Training expand) ─────────
  // Iterates over whatever grades the data actually contains (sorted) — no
  // hard-coded grade list, so it's resilient to varied Excel input.
  const buildGradeTable = (byGrade, accent) => {
    const grades = Object.keys(byGrade || {}).filter(g => byGrade[g]).sort();
    if (!grades.length) {
      return `<div class="ac-xt-no-data">${t('analyticsNoData')}</div>`;
    }

    // สร้างข้อมูลแต่ละแถว
    const rows = grades.map(g => {
      const stat = byGrade[g];
      return `
        <div class="ac-list-row">
          <div><span class="ac-xt-tag" style="background:${accent}">${escapeHtml(g)}</span></div>
          <div class="ac-xt-avg text-right" style="color:${accent}">
            ${fmtNum(stat.avg)}
          </div>
          <div class="ac-xt-range text-right">${stat.min}–${stat.max}</div>
          <div class="ac-xt-n text-right">${stat.n}</div>
        </div>
      `;
    }).join('');

    // ประกอบโครงสร้าง Header และ Rows
    return `
      <div class="ac-data-list">
        <div class="ac-list-header">
          <div>${t('grade')}</div>
          <div class="text-right">${t('analyticsAvg')}</div>
          <div class="text-right">${t('analyticsMin')}–${t('analyticsMax')}</div>
          <div class="text-right">n</div>
        </div>
        <div class="ac-list-body">
          ${rows}
        </div>
      </div>
    `;
  };

  // 3-step red shades (darkest → lightest): resign-op, resign-basic, resign-before-basic
  const COLOR_OP     = 'rgba(220,38,38,.92)';
  const COLOR_BASIC  = 'rgba(248,113,113,.95)';
  const COLOR_BEFORE = 'rgba(254,202,202,.95)';

  // ── Resign-duration breakdown by type (Resign Duration card expand) ───
  const buildResignDurTable = () => {
    const rows = [
      { color: COLOR_OP,     label: t('analyticsResignOp'),        stat: s.resignByType.operation   },
      { color: COLOR_BASIC,  label: t('analyticsResignBasic'),     stat: s.resignByType.basic       },
      { color: COLOR_BEFORE, label: t('analyticsResignBeforeBasic'),stat: s.resignByType.beforeBasic },
    ].map(r => {
      // กรณีไม่มีข้อมูล (Empty State)
      if (!r.stat) {
        return `
          <div class="ac-list-row ac-list-row-resign ac-xt-empty">
            <div style="display:flex; align-items:center; gap:6px;">
              <span class="ac-xt-dot" style="background:${r.color}"></span>
              <span class="ac-xt-lbl">${escapeHtml(r.label)}</span>
            </div>
            <div class="ac-xt-empty-cell text-right" style="grid-column: span 3;">—</div>
          </div>`;
      }
      // กรณีมีข้อมูลปกติ
      return `
        <div class="ac-list-row ac-list-row-resign">
          <div style="display:flex; align-items:center; gap:6px; min-width: 0;">
            <span class="ac-xt-dot" style="background:${r.color}"></span>
            <span class="ac-xt-lbl">${escapeHtml(r.label)}</span>
          </div>
          <div class="ac-xt-avg text-right" style="color:var(--danger)">
            ${fmtNum(r.stat.avg)}
          </div>
          <div class="ac-xt-range text-right">${r.stat.min}–${r.stat.max}</div>
          <div class="ac-xt-n text-right">${r.stat.n}</div>
        </div>`;
    }).join('');

    return `
      <div class="ac-data-list ac-xt-table-resign">
        <div class="ac-list-header ac-list-row-resign">
          <div></div> <div class="text-right">${t('analyticsAvg')}</div>
          <div class="text-right">${t('analyticsMin')}–${t('analyticsMax')}</div>
          <div class="text-right">N</div>
        </div>
        <div class="ac-list-body">${rows}</div>
      </div>`;
  };

  // ── Basic → Op proceed rate panel (Basic Training card expand) ────────
  const buildBasicProceed = () => {
    const bp = s.basicProceed;
    if (!bp || bp.pct === null) {
      return `<div class="ac-xt-no-data">${t('analyticsNoData')}</div>`;
    }
    const pct    = fmtNum(bp.pct);
    const barPct = Math.min(bp.pct, 100); // clamp bar width ≤ 100% (ตัวเลขยังแสดงค่าจริง)
    const barColor = 'rgba(59,130,246,.85)';
    return `<div class="ac-proceed">
      <div class="ac-proceed-label">${t('analyticsProceedLabel')}</div>
      <div class="ac-proceed-value">${pct}<span class="ac-proceed-unit">%</span></div>
      <div class="ac-proceed-bar"><div class="ac-proceed-fill" style="width:${barPct}%;background:${barColor}"></div></div>
      <div class="ac-proceed-hint">${bp.proceeded} / ${bp.finished} ${t('analyticsProceedHint')}</div>
    </div>`;
  };

  // ── Resign Breakdown → by Grade: resign rate % per grade (resign/total) ─
  const buildResignGradeTable = () => {
    const counts = s.resignCountByGrade || {};
    const totals = s.totalCountByGrade  || {};
    const grades = Object.keys(counts).filter(g => counts[g] > 0).sort();
    if (!grades.length) {
      return `<div class="ac-xt-no-data">${t('analyticsNoData')}</div>`;
    }
    const rows = grades.map(g => {
      const resign = counts[g];
      const total  = totals[g] || 0;
      const rate   = total > 0 ? (resign / total * 100).toFixed(1) : '-';
      return `
        <div class="ac-list-row">
          <div><span class="ac-xt-tag" style="background:var(--danger)">${escapeHtml(g)}</span></div>
          <div class="ac-xt-avg text-right" style="color:var(--danger)">${resign} / ${total}</div>
          <div class="ac-xt-range text-right">${rate}%</div>
          <div class="ac-xt-n text-right"></div>
        </div>`;
    }).join('');
    return `
      <div class="ac-data-list">
        <div class="ac-list-header">
          <div>${t('grade')}</div>
          <div class="text-right">${t('total')}</div>
          <div class="text-right">%</div>
          <div></div>
        </div>
        <div class="ac-list-body">${rows}</div>
      </div>`;
  };

  // ── Expandable card wrapper ───────────────────────────────────────────
  // btnClass: optional extra CSS class on the button (e.g. 'ac-expand-danger' for red)
  const expandShell = (cardKey, toggleLabel, content, btnClass = '') => {
    const open = !!cardExpanded[cardKey];
    const extraClass = btnClass ? ` ${btnClass}` : '';
    return `<button type="button" class="ac-expand-btn${open ? ' open' : ''}${extraClass}" data-card="${cardKey}" aria-expanded="${open}">
      <span class="ac-expand-label">${escapeHtml(toggleLabel)}</span>
      <span class="ac-expand-chev">▾</span>
    </button>
    <div class="ac-expand-content${open ? ' open' : ''}">
      <div class="ac-expand-inner">${content}</div>
    </div>`;
  };

  el.innerHTML = `
    <div class="analytics-section-hdr">
      <h3>${t('analyticsTitle')}</h3>
      <div class="day-mode-btn-group" id="dayModeBtnGroup">
        ${dayBtn('total', t('dayModeTotal'))}
        ${dayBtn('5d',    t('dayMode5d'))}
        ${dayBtn('6d',    t('dayMode6d'))}
      </div>
      <select id="analyticsDeptFilter" class="year-select analytics-dept-select">
        ${deptOptions}
      </select>
    </div>

    <div class="charts-grid">
      ${chartOverall}
      ${chartGrad}
      ${chartTraining}
      ${chartResign}
    </div>

    <div class="analytics-grid">
      <div class="analytic-card">
        <div class="ac-header"><span class="ac-title">${t('analyticsTotalTraining')}</span></div>
        ${fmtStatCard(s.total)}
        ${expandShell('total', t('analyticsExpandGrade'), buildGradeTable(s.totalByGrade, 'rgba(59,130,246,.92)'))}
      </div>
      <div class="analytic-card">
        <div class="ac-header"><span class="ac-title">${t('analyticsBasicTraining')}</span></div>
        ${fmtStatCard(s.basic)}
        ${expandShell('basic', t('analyticsExpandProceed'), buildBasicProceed())}
      </div>
      <div class="analytic-card">
        <div class="ac-header"><span class="ac-title">${t('analyticsOpTraining')}</span></div>
        ${fmtStatCard(s.operation)}
        ${expandShell('op', t('analyticsExpandGrade'), buildGradeTable(s.opByGrade, 'rgba(59,130,246,.92)'))}
      </div>
      <div class="analytic-card ac-danger">
        <div class="ac-header"><span class="ac-title">${t('analyticsResignDur')}</span></div>
        ${fmtStatCard(s.resign)}
        ${expandShell('resign', t('analyticsExpandResignType'), buildResignDurTable())}
      </div>
      <div class="analytic-card">
        <div class="ac-header"><span class="ac-title">${t('analyticsResignRatio')}</span></div>
        <div class="ac-avg-label">${t('analyticsAvg')}</div>
        ${buildResignAvgCard()}
      </div>
    </div>

    <div style="margin-top:24px">${trendCardHTML}</div>`;

  // wire dept-filter change → re-render analytics (table stays as-is)
  const deptSel = $('analyticsDeptFilter');
  if (deptSel) {
    deptSel.onchange = () => {
      currentAnalyticsDept = deptSel.value;
      const trendDept = $('trendDeptFilter');
      if (trendDept) trendDept.value = currentAnalyticsDept;
      renderAnalytics(yearFilter);
    };
  }

  // wire trend card year/dept filters — sync back to top-level controls
  const trendYearSel = $('trendYearFilter');
  if (trendYearSel) {
    trendYearSel.onchange = () => {
      const yr = trendYearSel.value;
      const topYear = $('homeDashYearFilter');
      if (topYear) topYear.value = yr;
      renderHomeDashboard(yr);
    };
  }
  const trendDeptSel = $('trendDeptFilter');
  if (trendDeptSel) {
    trendDeptSel.onchange = () => {
      currentAnalyticsDept = trendDeptSel.value;
      const topDept = $('analyticsDeptFilter');
      if (topDept) topDept.value = currentAnalyticsDept;
      renderAnalytics(yearFilter);
    };
  }

  // wire expand buttons for stat cards
  el.querySelectorAll('.ac-expand-btn').forEach(btn => {
    btn.onclick = () => {
      const key = btn.dataset.card;
      cardExpanded[key] = !cardExpanded[key];
      renderAnalytics(yearFilter);
    };
  });

  // wire day-mode buttons
  const btnGroup = $('dayModeBtnGroup');
  if (btnGroup) {
    btnGroup.querySelectorAll('.day-mode-btn').forEach(btn => {
      btn.onclick = () => {
        currentDayMode = btn.dataset.mode;
        renderAnalytics(yearFilter);
      };
    });
  }

  // wire trend toggle buttons — each toggles its series independently
  const trendGroup = $('trendToggleGroup');
  if (trendGroup) {
    trendGroup.querySelectorAll('.trend-toggle').forEach(btn => {
      btn.onclick = () => {
        const key = btn.dataset.series;
        trendVisibility[key] = !trendVisibility[key];
        renderAnalytics(yearFilter);
      };
    });
  }

  show(el);
}

function buildDashRow(tr, label, total, completed, training, resign, transfer) {
  const pct = (n) => {
    if (total === 0) return '';
    return `<small class="pct">(${Math.round(n / total * 100)}%)</small>`;
  };

  const cPct  = total > 0 ? (completed / total * 100).toFixed(1) : 0;
  const tPct  = total > 0 ? (training  / total * 100).toFixed(1) : 0;
  const rPct  = total > 0 ? (resign    / total * 100).toFixed(1) : 0;
  const xPct  = total > 0 ? (transfer  / total * 100).toFixed(1) : 0;

  const bar = `<div class="ratio-bar">
    <div class="ratio-seg ratio-completed" style="width:${cPct}%" title="${escapeHtml(t('congratulations'))}: ${cPct}%"></div>
    <div class="ratio-seg ratio-training"  style="width:${tPct}%" title="${escapeHtml(t('training'))}: ${tPct}%"></div>
    <div class="ratio-seg ratio-resign"    style="width:${rPct}%" title="${escapeHtml(t('resignation'))}: ${rPct}%"></div>
    <div class="ratio-seg ratio-transfer"  style="width:${xPct}%" title="${escapeHtml(t('transferred'))}: ${xPct}%"></div>
  </div>`;

  [
    { html: escapeHtml(label),                        cls: 'dept-label' },
    { html: `${total}`,                               cls: 'num-cell' },
    { html: `${completed} ${pct(completed)}`,         cls: 'num-cell ok' },
    { html: `${training} ${pct(training)}`,           cls: 'num-cell blue' },
    { html: `${resign} ${pct(resign)}`,               cls: 'num-cell danger' },
    { html: `${transfer} ${pct(transfer)}`,           cls: 'num-cell transfer' },
    { html: bar,                                      cls: 'bar-cell' },
  ].forEach(({ html, cls }) => {
    const td = tr.insertCell();
    td.innerHTML = html;
    if (cls) td.className = cls;
  });
}

function renderHomeDashboard(yearFilter) {
  const gridEl = $('homeDashGrid');
  if (!gridEl) return;
  gridEl.innerHTML = '';

  if (!Object.keys(allDeptData).length) return;

  let grandTotal = 0, grandCompleted = 0, grandTraining = 0, grandResign = 0, grandTransfer = 0;

  const table = document.createElement('table');
  table.className = 'home-dash-table';

  const thead = table.createTHead();
  const hrow  = thead.insertRow();
  [t('department'), t('total'), t('congratulations'), t('training'), t('resignation'), t('transferred'), t('ratio')]
    .forEach(text => {
      const th = document.createElement('th');
      th.textContent = text;
      hrow.appendChild(th);
    });

  const tbody = table.createTBody();

  departments.forEach(dep => {
    const employees = allDeptData[dep.key] || [];
    const filtered  = yearFilter
      ? employees.filter(emp => {
          const d = normalizeDateForInput(emp['CSA Start Date']);
          return d && d.slice(0, 4) === yearFilter;
        })
      : employees;

    let total = filtered.length, completed = 0, training = 0, resign = 0, transfer = 0;

    filtered.forEach(emp => {
      const key = computeActualStatus(emp, emp.calculated || {});
      if (key === 'completed' || key === 'completed-overdue')        completed++;
      else if (key === 'under-operation' || key === 'under-basic')   training++;
      else if (key === 'resign-operation' || key === 'resign-basic'
            || key === 'resign-before-basic')                         resign++;
      else if (key === 'transfer-operation' || key === 'transfer-basic'
            || key === 'transfer-before-basic')                       transfer++;
    });

    grandTotal     += total;
    grandCompleted += completed;
    grandTraining  += training;
    grandResign    += resign;
    grandTransfer  += transfer;

    const tr = tbody.insertRow();
    tr.style.cursor = 'pointer';
    tr.onclick = () => {
      currentDepartment = dep.key;
      currentFilter = '';
      currentYearFilter = '';
      if ($('statusFilter'))  $('statusFilter').value  = '';
      if ($('empYearFilter')) $('empYearFilter').value = '';
      $('dashboardTitle').textContent = `${dep.label} ${t('dashboard')}`;
      setPage('dashboard');
      loadDashboard();
    };

    buildDashRow(tr, dep.label, total, completed, training, resign, transfer);
  });

  // Footer totals row
  const tfoot = table.createTFoot();
  const frow  = tfoot.insertRow();
  frow.className = 'dash-total-row';
  buildDashRow(frow, t('total'), grandTotal, grandCompleted, grandTraining, grandResign, grandTransfer);

  // 1.4 wrap in scrollable container so it doesn't overflow on small screens
  const wrap = document.createElement('div');
  wrap.className = 'home-dash-table-wrap';
  wrap.appendChild(table);
  gridEl.appendChild(wrap);
  renderAnalytics(yearFilter);
}

// ===== OVERALL DASHBOARD EXPORT (PNG / PDF) =====
// Captures `.home-dash-card` (table + analytics) at its current state — filters
// applied appear in the export exactly as on screen. Controls (the export bar
// itself) are skipped via html2canvas's ignoreElements option.
function exportTimestamp() {
  const d = new Date();
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}${p(d.getMonth()+1)}${p(d.getDate())}_${p(d.getHours())}${p(d.getMinutes())}`;
}

async function captureDashboardCanvas() {
  if (typeof html2canvas !== 'function') {
    throw new Error('html2canvas library not loaded');
  }
  const card = document.querySelector('.home-dash-card');
  if (!card) throw new Error('Dashboard card not found');

  // Use the body's computed background so dark/light theme is honored
  const bg = getComputedStyle(document.body).backgroundColor || '#ffffff';

  // Inject a temporary year badge next to the title so the exported image
  // shows which time period the data covers. Removed in `finally`.
  const titleEl = card.querySelector('.home-dash-header h2');
  const yearVal = ($('homeDashYearFilter') || {}).value || '';
  const yearText = yearVal || t('allYears');
  const yearTag = document.createElement('span');
  yearTag.className = 'export-year-tag';
  yearTag.textContent = `${t('yearLabel')}: ${yearText}`;
  if (titleEl) titleEl.appendChild(yearTag);

  try {
    return await html2canvas(card, {
      backgroundColor: bg,
      scale: 2,                 // 2x for retina-sharp output
      useCORS: true,
      logging: false,
      windowWidth: document.documentElement.scrollWidth,
      // Skip the controls row (PNG/PDF/year/refresh) so the export looks clean
      ignoreElements: (el) =>
        !!(el.classList && el.classList.contains('home-dash-controls')),
    });
  } finally {
    if (yearTag.parentNode) yearTag.remove();
  }
}

async function exportDashboardPng() {
  const btn = $('exportPngBtn');
  if (!btn || btn.disabled) return;
  btn.disabled = true;
  try {
    const canvas = await captureDashboardCanvas();
    const link = document.createElement('a');
    link.download = `overall-dashboard_${exportTimestamp()}.png`;
    link.href = canvas.toDataURL('image/png');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (err) {
    console.error('[ExportPNG]', err);
    showMessage(err.message || 'Export PNG failed', true);
  } finally {
    btn.disabled = false;
  }
}

async function exportDashboardPdf() {
  const btn = $('exportPdfBtn');
  if (!btn || btn.disabled) return;
  if (!window.jspdf || !window.jspdf.jsPDF) {
    showMessage('jsPDF library not loaded', true);
    return;
  }
  btn.disabled = true;
  try {
    const canvas = await captureDashboardCanvas();
    const { jsPDF } = window.jspdf;

    // Single page sized to fit the content exactly (px unit, with px_scaling hotfix)
    const w = canvas.width;
    const h = canvas.height;
    const pdf = new jsPDF({
      orientation: w > h ? 'landscape' : 'portrait',
      unit: 'px',
      format: [w, h],
      hotfixes: ['px_scaling'],
      compress: true,
    });
    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, w, h);
    pdf.save(`overall-dashboard_${exportTimestamp()}.pdf`);
  } catch (err) {
    console.error('[ExportPDF]', err);
    showMessage(err.message || 'Export PDF failed', true);
  } finally {
    btn.disabled = false;
  }
}

// ===== OPEN EDIT MODAL (search) =====
async function openEditModal(employeeId) {
  currentEmployeeId = employeeId;
  try {
    const query = getHolidayQuery();
    const emp = await api(
      `/api/${currentDepartment}/employees/${encodeURIComponent(employeeId)}${query ? '?' + query : ''}`
    );
    fillEditForm(emp);
    show($('editModal'));
  } catch (err) {
    showMessage(err.message, true);
  }
}

// ===== CREATE EMPLOYEE =====
async function createNewEmployee() {
  const payload = {
    'Employee ID':    $('newEmployeeId').value.trim(),
    'Employee Name':  $('newEmployeeName').value.trim(),
    'CSA Start Date': $('newCsaStartDate').value,
  };
  if (!payload['Employee ID']) {
    showMessage(t('pleaseEnterEmployeeId'), true);
    return;
  }
  try {
    await api(`/api/${currentDepartment}/employees`, { method: 'POST', body: JSON.stringify(payload) });
    $('newEmployeeId').value   = '';
    $('newEmployeeName').value = '';
    $('newCsaStartDate').value = '';
    closeRegisterModal();
    showMessage(t('created'));
    loadDashboard();
  } catch (err) {
    showMessage(err.message, true);
  }
}

// ===== SEARCH EMPLOYEE =====
async function searchEmployee() {
  const empId = $('searchEmployeeId').value.trim();
  if (!empId) return showMessage(t('pleaseEnterEmployeeId'), true);
  await openEditModal(empId);
}

// ===== EDIT FORM (modal) =====
function fillEditForm(emp) {
  const form   = $('editForm');
  const fields = [
    'Employee ID', 'Employee Name', 'Grade',
    'CSA Start Date', 'Basic Start', 'Basic End',
    'Operation Start', 'Operation End', 'Resign Date',
    'Transfers Date', 'Graduate Eff', 'Comment',
  ];
  fields.forEach(name => {
    const input = form.elements[name];
    if (!input) return;
    input.value = input.type === 'date' ? normalizeDateForInput(emp[name]) : (emp[name] || '');
  });

  const calc = emp.calculated || {};
  lastCalc = calc;
  $('statusBadge').textContent   = t(STATUS_KEY_MAP[computeActualStatus(emp, calc)] || '');
  $('statusBadge').className     = `badge ${statusBadgeClass(computeActualStatus(emp, calc))}`;
  $('remainingDays').textContent = calc.remaining_days ?? '-';
  $('progressBar').style.width   = `${calc.progress || 0}%`;
  $('dueDateText').textContent   = `${t('dueDate')}: ${normalizeDateForInput(emp['Due date']) || calc.due_date || '-'}`;
}

async function saveEditForm(event) {
  event.preventDefault();
  const form     = $('editForm');
  const formData = new FormData(form);
  const payload  = {};
  for (const [key, value] of formData.entries()) payload[key] = value;
  payload._holidays = holidays;

  try {
    const data = await api(
      `/api/${currentDepartment}/employees/${encodeURIComponent(currentEmployeeId)}`,
      { method: 'PATCH', body: JSON.stringify(payload) }
    );
    fillEditForm(data.employee);
    // Update cache
    const idx = lastEmployees.findIndex(e => String(e['Employee ID']) === String(currentEmployeeId));
    if (idx >= 0) lastEmployees[idx] = data.employee;
    showMessage(t('updated'));
    renderEmployeeTable(lastEmployees);
  } catch (err) {
    showMessage(err.message, true);
  }
}

// ===== TAB BAR =====
let activeMainTab = 'newOperator';

let _adminBtnAllowedByRole = false;

// Role badge label — fixed per door/mode, not run through t() since it's the
// same in every language (it identifies which door+mode the session came from).
function _roleBadgeText(role) {
  switch (role) {
    case 'csa_view': return 'CSA (View Mode)';
    case 'csa_user': return 'CSA (Edit Mode)';
    case 'qe_view':  return 'QE (View Mode)';
    case 'qe_user':  return 'QE (Edit Mode)';
    case 'admin':    return 'Admin Mode';
    case 'manager':  return 'CSA (View Mode)'; // legacy role name
    default:         return '';
  }
}

function initTabBar() {
  const TAB_IDS = ['newOperator', 'jumper', 'trainer', 'sewingOperator', 'gica'];
  const btnGroup = document.getElementById('mainTabBar');
  if (!btnGroup) return;

  const switchTab = (tabKey) => {
    activeMainTab = tabKey;
    // update button states
    btnGroup.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabKey);
    });
    // show/hide content panels
    TAB_IDS.forEach(id => {
      const el = document.getElementById('tabContent-' + id);
      if (el) el.classList.toggle('hidden', id !== tabKey);
    });
    // Admin Settings (Special Holidays) is a New Operator feature — never show
    // it while on the GICA tab, even for admin/csa_user sessions that can write.
    $('adminBtn')?.classList.toggle('hidden', tabKey === 'gica' || !_adminBtnAllowedByRole);
    if (tabKey === 'gica') requestAnimationFrame(syncGicaSubtabTop);
    // update placeholder text if i18n already loaded
    TAB_IDS.forEach(id => {
      const ph = document.getElementById('tabPlaceholder-' + id);
      if (ph) ph.textContent = t('tabComingSoon');
    });
  };

  // expose for use by selectDepartmentKey / renderTabSubMenu
  _switchMainTab = switchTab;

  btnGroup.querySelectorAll('.tab-btn').forEach(btn => {
    btn.onclick = () => {
      switchTab(btn.dataset.tab);
      if (btn.dataset.tab === 'jumper')  initJumperTab();
      if (btn.dataset.tab === 'trainer') initTrainerTab();
      if (btn.dataset.tab === 'gica')    initGicaTab();
    };
  });

  // sync button labels with current language
  btnGroup.querySelectorAll('.tab-btn[data-i18n]').forEach(btn => {
    btn.textContent = t(btn.dataset.i18n);
  });
}

// Populate BU hover sub-menu under the New Operator tab button
function renderTabSubMenu() {
  const container = document.getElementById('tabSubMenu-newOperator');
  if (!container) return;
  container.innerHTML = '';
  departments.forEach(dep => {
    const btn = document.createElement('button');
    btn.type        = 'button';
    btn.className   = 'tab-submenu-btn';
    btn.textContent = dep.label;
    btn.onclick = (e) => {
      e.stopPropagation();
      selectDepartmentKey(dep.key, dep.label);
    };
    container.appendChild(btn);
  });
}

// ===== INIT =====
function syncTabBarTop() {
  const topbarEl = document.querySelector('.topbar');
  const tabBarEl = document.getElementById('mainTabBar');
  if (topbarEl && tabBarEl) tabBarEl.style.top = topbarEl.offsetHeight + 'px';
}

// .gica-subtab-bar is a third stacked sticky bar — it must sit below both the
// topbar (sticky top:0) and #mainTabBar (sticky top:<topbar height>), otherwise
// it tries to stick at the same y=0 region and gets hidden under them.
function syncGicaSubtabTop() {
  const topbarEl = document.querySelector('.topbar');
  const tabBarEl = document.getElementById('mainTabBar');
  const subtabEl = document.querySelector('.gica-subtab-bar');
  if (topbarEl && tabBarEl && subtabEl) {
    subtabEl.style.top = (topbarEl.offsetHeight + tabBarEl.offsetHeight) + 'px';
  }
}

// ===== LOGIN PARTICLE ANIMATION =====
let _loginRafId = null;

function startLoginParticles() {
  if (_loginRafId) return;
  const canvas = document.getElementById('loginParticles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function initParticles() {
    particles = Array.from({ length: 70 }, () => ({
      x:  Math.random() * W,
      y:  Math.random() * H,
      r:  Math.random() * 1.8 + 0.6,
      dx: (Math.random() - 0.5) * 0.45,
      dy: (Math.random() - 0.5) * 0.45,
      o:  Math.random() * 0.35 + 0.08,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${p.o})`;
      ctx.fill();
      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0 || p.x > W) p.dx *= -1;
      if (p.y < 0 || p.y > H) p.dy *= -1;
    });
    _loginRafId = requestAnimationFrame(draw);
  }

  resize();
  initParticles();
  draw();
  window.addEventListener('resize', () => { resize(); initParticles(); });
}

// ===== LOGIN DOORS (CSA / QE / Admin) + Admin wrong-attempt lockout =====
const ADMIN_FAIL_KEY   = 'adminFailCount';
const ADMIN_LOCK_LIMIT = 3;
const ADMIN_LOCK_SECS  = 60;

function _showLoginDoor(door) {
  $('loginDoors').classList.add('hidden');
  ['csa', 'qe', 'admin'].forEach(d => {
    const panel = $('loginDoor-' + d);
    if (panel) panel.classList.toggle('hidden', d !== door);
  });
}
function _showLoginDoorPicker() {
  $('loginDoors').classList.remove('hidden');
  ['csa', 'qe', 'admin'].forEach(d => $('loginDoor-' + d)?.classList.add('hidden'));
}

async function _openViewOnlySession(route, btn, errEl) {
  btn.disabled = true;
  if (errEl) { errEl.textContent = ''; errEl.classList.add('hidden'); }
  try {
    await api(route, { method: 'POST' });
    window.location.reload();
  } catch (err) {
    btn.disabled = false;
    const msg = err.message || t('managerLoginFailed');
    if (errEl) { errEl.textContent = msg; errEl.classList.remove('hidden'); }
    else showMessage(msg, true);
  }
}

function _startLockoutCountdown() {
  show($('adminLockoutScreen'));
  hide($('loginPanel'));
  const el = $('lockoutCountdown');
  let remaining = ADMIN_LOCK_SECS;
  if (el) el.textContent = remaining;
  const tick = setInterval(() => {
    remaining--;
    if (el) el.textContent = Math.max(remaining, 0);
    if (remaining <= 0) {
      clearInterval(tick);
      sessionStorage.removeItem(ADMIN_FAIL_KEY);
      hide($('adminLockoutScreen'));
      show($('loginPanel'));
      _showLoginDoorPicker();
    }
  }, 1000);
}

function _handleAdminLoginError() {
  const count = Number(sessionStorage.getItem(ADMIN_FAIL_KEY) || 0) + 1;
  sessionStorage.setItem(ADMIN_FAIL_KEY, String(count));
  if (count >= ADMIN_LOCK_LIMIT) {
    _startLockoutCountdown();
    return;
  }
  show($('loginPanel'));
  startLoginParticles();
  _showLoginDoor('admin');
  const warnEl = $('adminLoginWarning');
  if (warnEl) {
    warnEl.textContent = `บัญชีนี้ไม่ใช่ Admin — ระบบจะล็อกหากใส่ผิดครบ ${ADMIN_LOCK_LIMIT} ครั้ง (ผิดไปแล้ว ${count} ครั้ง)`;
    warnEl.classList.remove('hidden');
  }
}

let _doorPasswordPending = '';

function _showDoorPasswordPanel(door) {
  _doorPasswordPending = door;
  $('loginCard').classList.add('hidden');
  $('doorPasswordPanel').classList.remove('hidden');
  $('doorPasswordInput').value = '';
  $('doorPasswordError').classList.add('hidden');
  $('doorPasswordInput').focus();
}
function _hideDoorPasswordPanel() {
  $('doorPasswordPanel').classList.add('hidden');
  $('loginCard').classList.remove('hidden');
}

async function _submitDoorPassword() {
  const door     = _doorPasswordPending;
  const password = $('doorPasswordInput').value;
  const errEl    = $('doorPasswordError');
  if (!password) {
    errEl.textContent = 'กรุณากรอกรหัสผ่าน';
    errEl.classList.remove('hidden');
    return;
  }
  try {
    await api('/api/door-unlock', { method: 'POST', body: JSON.stringify({ door, password }) });
    window.location.href = `/login?door=${door}`;
  } catch (err) {
    errEl.textContent = err.message || 'รหัสผ่านไม่ถูกต้อง';
    errEl.classList.remove('hidden');
  }
}

function initLoginDoors() {
  $('loginDoors')?.querySelectorAll('.login-door-btn[data-door]').forEach(btn => {
    btn.onclick = () => _showLoginDoor(btn.dataset.door);
  });
  document.querySelectorAll('.login-door-back[data-back]').forEach(btn => {
    btn.onclick = _showLoginDoorPicker;
  });
  $('csaViewBtn')?.addEventListener('click', () => _openViewOnlySession('/manager-login', $('csaViewBtn'), $('csaViewError')));
  $('qeViewBtn')?.addEventListener('click', () => _openViewOnlySession('/qe-view-login', $('qeViewBtn'), $('qeViewError')));

  // QE / Admin "Sign in with Microsoft" — must pass the door password first.
  document.querySelectorAll('.login-btn[data-door]').forEach(btn => {
    btn.addEventListener('click', () => _showDoorPasswordPanel(btn.dataset.door));
  });
  $('doorPasswordBack')?.addEventListener('click', _hideDoorPasswordPanel);
  $('doorPasswordSubmit')?.addEventListener('click', _submitDoorPassword);
  $('doorPasswordInput')?.addEventListener('keydown', e => { if (e.key === 'Enter') _submitDoorPassword(); });

  // If we just bounced back from a failed Admin Sign In (?adminError=1), strip the
  // query param and run the warning/lockout flow before anything else renders.
  if (new URLSearchParams(window.location.search).get('adminError') === '1') {
    window.history.replaceState({}, '', window.location.pathname);
    _handleAdminLoginError();
  }
  // /login redirected back here because the door password hadn't been verified
  // yet (e.g. URL navigated to directly) — send them to the password prompt.
  if (new URLSearchParams(window.location.search).get('doorLocked') === '1') {
    window.history.replaceState({}, '', window.location.pathname);
  }
}

async function init() {
  initTheme();
  initLang();
  initTabBar();
  syncTabBarTop();
  syncGicaSubtabTop();
  window.addEventListener('resize', syncTabBarTop);
  window.addEventListener('resize', syncGicaSubtabTop);
  initAdmin();
  initRegisterModal();
  initEditModal();

  // Status filter
  $('statusFilter').onchange = () => {
    currentFilter = $('statusFilter').value;
    renderEmployeeTable(lastEmployees);
  };

  // Employee year filter
  $('empYearFilter').onchange = () => {
    currentYearFilter = $('empYearFilter').value;
    renderEmployeeTable(lastEmployees);
  };

  // Home dashboard year filter + refresh
  $('homeDashYearFilter').onchange = () => {
    renderHomeDashboard($('homeDashYearFilter').value);
  };
  $('homeDashRefreshBtn').onclick = () => {
    allDeptData = {};
    loadHomeDashboard();
  };

  // Overall Dashboard export buttons
  $('exportPngBtn').onclick = exportDashboardPng;
  $('exportPdfBtn').onclick = exportDashboardPdf;

  // Holiday add button
  $('addHolidayBtn').onclick = () => {
    const value = $('holidayInput').value;
    if (value && !holidays.includes(value)) {
      holidays.push(value);
      holidays.sort();
      localStorage.setItem('specialHolidays', JSON.stringify(holidays));
      $('holidayInput').value = '';
      renderHolidays();
      if (currentDepartment) loadDashboard();
    }
  };

  // Navigation buttons
  $('backHomeBtn').onclick = () => setPage('home');
  $('refreshBtn').onclick  = loadDashboard;
  $('searchBtn').onclick   = searchEmployee;

  // Table event delegation: edit, confirm, cancel
  $('employeeTableBody').addEventListener('click', async (e) => {
    // Inline edit — start
    const editBtn = e.target.closest('.btn-row-edit');
    if (editBtn) {
      const empId = editBtn.dataset.id;
      const tr    = editBtn.closest('tr');
      const emp   = lastEmployees.find(em => String(em['Employee ID']) === String(empId));
      if (emp && tr) {
        const calc = emp.calculated || {};
        startInlineEdit(tr, emp, calc, computeActualStatus(emp, calc));
      }
      return;
    }

    // Inline edit — confirm
    const confirmBtn = e.target.closest('.btn-confirm-inline');
    if (confirmBtn) {
      const tr = confirmBtn.closest('tr');
      await confirmInlineEdit(tr, tr.dataset.employeeId);
      return;
    }

    // Inline edit — cancel
    const cancelBtn = e.target.closest('.btn-cancel-inline');
    if (cancelBtn) {
      const tr    = cancelBtn.closest('tr');
      const empId = tr.dataset.employeeId;
      const emp   = lastEmployees.find(em => String(em['Employee ID']) === String(empId));
      if (emp && tr) {
        const calc = emp.calculated || {};
        cancelInlineEdit(tr, emp, calc, computeActualStatus(emp, calc));
      }
      return;
    }
  });

  initLoginDoors();

  // Check auth
  const me = await api('/api/me');
  if (!me.authenticated) {
    // Don't re-show the login doors over an active Admin lockout countdown.
    if ($('adminLockoutScreen').classList.contains('hidden')) {
      show($('loginPanel'));
      startLoginParticles();
    }
    return;
  }

  currentUser = me.user;
  currentRole = me.role || 'user';

  const VIEW_ONLY_ROLES = ['manager', 'csa_view', 'qe_view'];
  const QE_ROLES        = ['qe_view', 'qe_user'];
  const CSA_ROLES       = ['csa_view', 'csa_user', 'manager'];
  const isViewOnly = VIEW_ONLY_ROLES.includes(currentRole);

  // Apply view-only mode — hides all write controls
  if (isViewOnly) document.body.classList.add('view-only');

  // Role badge — fixed labels per door/mode (not translated, same in every language).
  const badgeText = _roleBadgeText(currentRole);
  const badge = $('roleBadge');
  if (badge && badgeText) {
    badge.textContent = badgeText;
    badge.classList.remove('hidden');
  }

  $('authBox').innerHTML = `${t('signedIn')} · <a href="/logout">${t('logout')}</a>`;
  show($('mainTabBar'));
  // Admin panel is a write surface (holidays) — hide it for any view-only session,
  // and switchTab() additionally hides it while on the GICA tab (see initTabBar).
  _adminBtnAllowedByRole = !isViewOnly;
  if (_adminBtnAllowedByRole) show($('adminBtn'));

  // Role-based tab visibility: CSA roles never see GICA; QE roles see ONLY GICA;
  // admin sees everything (no filtering needed).
  if (currentRole === 'admin') {
    // no-op — all tabs already visible by default
  } else if (QE_ROLES.includes(currentRole)) {
    ['newOperator', 'jumper', 'trainer', 'sewingOperator'].forEach(id => {
      $('tabItem-' + id)?.classList.add('hidden');
      document.querySelector(`.tab-btn[data-tab="${id}"]`)?.classList.add('hidden');
    });
    if (_switchMainTab) _switchMainTab('gica');
    initGicaTab();
    return;
  } else if (CSA_ROLES.includes(currentRole)) {
    document.querySelector('.tab-btn[data-tab="gica"]')?.classList.add('hidden');
  }

  departments = await api('/api/departments');
  if (!Array.isArray(departments)) departments = [];
  renderDepartmentButtons();
  renderTabSubMenu();
  renderHolidays();
  setPage('home');

  // Load home dashboard in background
  loadHomeDashboard();
}

// =============================================================================
// JUMPER SKILL TAB
// Data comes from /api/jumper-data (Flask → OneDrive via MANAGER_REFRESH_TOKEN).
// Mirrors the "Jumper Skill" view in the local NiSE Jumper Dashboard.
// =============================================================================

const JUMPER_POSITIONS = [
  'Jumper Sewing Center',
  'Jumper Sewing Inline',
  'Jumper Sewing Machine Operation',
];
const JUMPER_COLORS = ['#2563eb', '#16a34a', '#f59e0b', '#dc2626', '#7c3aed', '#0891b2', '#db2777'];
const BU_ORDER = ['G1', 'G3', 'G2', 'G4', 'TRM', 'EA'];
function sortBus(arr) {
  return [...arr].sort((a, b) => {
    const ai = BU_ORDER.indexOf(a), bi = BU_ORDER.indexOf(b);
    if (ai === -1 && bi === -1) return a.localeCompare(b);
    return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
  });
}
const TRAINER_PT_COLORS = [
  '#2563eb', '#16a34a', '#f59e0b', '#dc2626', '#7c3aed', '#0891b2', '#db2777',
  '#ea580c', '#65a30d', '#0d9488', '#9333ea', '#0284c7', '#be123c', '#854d0e',
  '#166534', '#1e40af', '#86198f', '#0f766e', '#b91c1c', '#4338ca',
];

// BU name aliases: raw key from NiSE → display name shown in the dashboard
// (NiSE stores "NYV"; we show "EA" to match the rest of the app)
const JUMPER_BU_ALIASES = { NYV: 'EA' };

// Re-key an object using BU aliases  { NYV: [...] } → { EA: [...] }
function applyBuAliases(obj) {
  const out = {};
  for (const [k, v] of Object.entries(obj || {})) {
    out[JUMPER_BU_ALIASES[k] ?? k] = v;
  }
  return out;
}

// ── module state ──────────────────────────────────────────────────────────────
let _jumperByBu   = {};   // raw jumper data keyed by BU
let _jumperSewOp  = {};   // raw sewingOperator data keyed by BU
let _jumperRows   = [];   // normalized flat rows
let _jumperCharts = {};   // Chart.js instances { canvasId: Chart }
let _jumperInsideMode = 'positionCount';   // 'avgSkill' | 'positionCount'
let _jumperLoaded = false;
const _jumperTableState = {
  page: 1, pageSize: 10, sortKey: 'bu', sortDir: 1,
  filters: { bu: '', expired: '', search: '' },
};

// ── helpers ───────────────────────────────────────────────────────────────────

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function normalizeJumperRows(byBu) {
  const rows = [];
  for (const [rawBu, emps] of Object.entries(byBu || {})) {
    const bu = JUMPER_BU_ALIASES[rawBu] ?? rawBu;  // NYV → EA (or keep as-is)
    for (const e of emps) {
      rows.push({
        bu,
        empid:          e.empid            || '',
        firstname:      e.firstname        || '',
        deptname:       e.deptname         || '',
        position:       e.positionnameeng  || '',
        skill:          Number(e.skill_count)   || 0,
        expired:        Number(e.expired_count) || 0,
        trainingStatus: String(e.training_status || '').trim().toUpperCase(),
      });
    }
  }
  return rows;
}

// ── JT_PROD: Jumper Training Progress tracker ─────────────────────────────────
// trained count comes from Excel column "Training Status" (Y = trained, N = not trained)
const JT_PROD = {
  _bus: [], _rows: [],

  _data(bu, pos) {
    const posRows = this._rows.filter(r =>
      r.bu === bu && r.position === JUMPER_POSITIONS[pos === 'c' ? 0 : 1]
    );
    const total   = posRows.length;
    const trained = posRows.filter(r => r.trainingStatus === 'Y').length;
    return { trained, total };
  },

  _svg(trained, total) {
    if (total === 0) {
      return `<div style="height:72px;display:flex;align-items:center;justify-content:center;font-size:0.65rem;color:#d1d5db;">—</div>`;
    }
    const ratio = Math.min(Math.max(trained / total, 0), 1);
    const R = 14;
    const C = 2 * Math.PI * R;
    const dash  = (ratio * C).toFixed(2);
    const space = (C - ratio * C).toFixed(2);
    const col   = ratio >= 1 ? '#16a34a' : '#dc2626';
    return `<svg viewBox="0 0 36 36" width="72" height="72">
      <circle cx="18" cy="18" r="${R}" fill="none" stroke="var(--badge-danger-bg)" stroke-width="6"/>
      <circle cx="18" cy="18" r="${R}" fill="none" stroke="${col}" stroke-width="6"
        stroke-dasharray="${dash} ${space}" stroke-dashoffset="0"
        style="transition:stroke-dasharray .4s ease;transform:rotate(-90deg);transform-origin:18px 18px;"/>
      <text x="18" y="15.5" text-anchor="middle" font-size="6.5" style="fill:var(--text)" font-weight="700">${trained}</text>
      <text x="18" y="22"   text-anchor="middle" font-size="3.5" style="fill:var(--text-muted)">/ ${total}</text>
    </svg>`;
  },

  _block(bu, pos, label) {
    const d   = this._data(bu, pos);
    const pct = d.total > 0 ? Math.round(d.trained / d.total * 100) : 0;
    return `<div style="text-align:center;">
      ${this._svg(d.trained, d.total)}
      <div style="font-size:0.65rem;color:var(--text-muted);margin-top:2px;">${label}</div>
      <div style="font-size:0.65rem;font-weight:700;color:${pct >= 100 ? 'var(--ok)' : 'var(--text)'};">${pct}%</div>
    </div>`;
  },

  render() {
    const wrap = document.getElementById('jtp-row3');
    if (!wrap) return;
    wrap.innerHTML = this._bus.map((bu) => `
      <div class="card" style="padding:14px;display:flex;flex-direction:column;">
        <div style="text-align:center;margin-bottom:10px;">
          <span style="font-size:0.6rem;color:var(--text-muted);background:var(--surface2);padding:1px 5px;border-radius:10px;">Training Status</span>
        </div>
        <div style="display:flex;justify-content:space-around;align-items:center;flex:1;gap:4px;">
          ${this._block(bu, 'c', 'Center')}
          ${this._block(bu, 'i', 'Inline')}
        </div>
      </div>`).join('');
  },

  init(bus, rows) { this._bus = bus; this._rows = rows; this.render(); },
};
window._JTP = JT_PROD;

// ── Chart.js wrappers ─────────────────────────────────────────────────────────

function _makeJumperBarChart(canvasId, label, labels, data) {
  if (!document.getElementById(canvasId)) return;
  if (typeof Chart === 'undefined') return;
  const existing = _jumperCharts[canvasId];
  if (existing) { existing.destroy(); }
  _jumperCharts[canvasId] = new Chart(document.getElementById(canvasId), {
    type: 'bar',
    data: { labels, datasets: [{ label, data, backgroundColor: JUMPER_COLORS }] },
    options: {
      responsive: true, maintainAspectRatio: false,
      animation: { duration: 400, easing: 'easeOutQuart' },
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true, grace: '10%' } },
    },
  });
}

function _makeJumperPositionChart(canvasId, bus, cA, iA, sewCounts) {
  if (!document.getElementById(canvasId)) return;
  if (typeof Chart === 'undefined') return;
  const existing = _jumperCharts[canvasId];
  if (existing) { existing.destroy(); }

  const cTgt = sewCounts.map(n => Math.round(n * 0.025));
  const iTgt = sewCounts.map(n => Math.round(n * 0.05));
  const cGap = cA.map((a, i) => Math.max(0, cTgt[i] - a));
  const iGap = iA.map((a, i) => Math.max(0, iTgt[i] - a));

  // Flatten: [Center_BU0, Inline_BU0, Center_BU1, Inline_BU1, ...]
  const labels     = bus.flatMap(() => ['Center', 'Inline']);
  const actualData = bus.flatMap((_, i) => [cA[i], iA[i]]);
  const gapData    = bus.flatMap((_, i) => [cGap[i], iGap[i]]);
  const targetData = bus.flatMap((_, i) => [cTgt[i], iTgt[i]]);

  // Center=full opacity, Inline=slightly muted to distinguish visually
  const actualColors = bus.flatMap((_, i) => [
    hexToRgba(JUMPER_COLORS[i % JUMPER_COLORS.length], 1.0),
    hexToRgba(JUMPER_COLORS[i % JUMPER_COLORS.length], 0.65),
  ]);
  const gapColors = bus.flatMap((_, i) => [
    hexToRgba(JUMPER_COLORS[i % JUMPER_COLORS.length], 0.28),
    hexToRgba(JUMPER_COLORS[i % JUMPER_COLORS.length], 0.22),
  ]);

  _jumperCharts[canvasId] = new Chart(document.getElementById(canvasId), {
    type: 'bar',
    data: {
      labels,
      datasets: [
        {
          label: 'Actual',
          data: actualData,
          backgroundColor: actualColors,
          stack: 'stack',
        },
        {
          label: 'Gap to target',
          data: gapData,
          backgroundColor: gapColors,
          stack: 'stack',
          _targetData: targetData,
          _actualData: actualData,
        },
      ],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      animation: { duration: 400, easing: 'easeOutQuart' },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            title(items) {
              const raw = items[0].label;
              return Array.isArray(raw) ? raw.join(' — ') : String(raw);
            },
            label(ctx) {
              const ds = ctx.dataset;
              const idx = ctx.dataIndex;
              if (ds._targetData) {
                const tgt = ds._targetData[idx];
                const act = ds._actualData[idx];
                if (ctx.raw === 0) return `เป้า: ${tgt} คน ✓ ถึงเป้าแล้ว`;
                return `เป้า: ${tgt} คน  (จริง ${act} / ขาด ${ctx.raw})`;
              }
              return `จริง: ${ctx.raw} คน`;
            },
          },
        },
      },
      scales: {
        x: { stacked: true },
        y: { beginAtZero: true, grace: '10%', stacked: true },
      },
    },
  });

  const legendEl = document.getElementById('jtp-positionLegend');
  if (legendEl) {
    const buSwatches = bus.map((bu, i) =>
      `<span style="display:inline-flex;align-items:center;gap:4px;">
        <span style="display:inline-block;width:11px;height:11px;border-radius:2px;background:${JUMPER_COLORS[i % JUMPER_COLORS.length]};flex-shrink:0;"></span>
        <span style="font-size:0.75rem;">${escapeHtml(bu)}</span>
      </span>`
    ).join('');
    legendEl.innerHTML = `
      <div style="display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin-top:10px;padding-top:8px;border-top:1px solid var(--border);">
        ${buSwatches}
        <span style="margin-left:auto;font-size:0.72rem;color:var(--text-muted);white-space:nowrap;">■ = Actual &nbsp; ░ = Gap to Target</span>
      </div>`;
  }
}

// ── Summary cards (3 rows) ────────────────────────────────────────────────────

function _computeJumperSummary(rows, busKeys, sewOpByBu) {
  const bus       = sortBus(busKeys);
  const totalAll  = rows.length;
  const centerAll = rows.filter(r => r.position === JUMPER_POSITIONS[0]).length;
  const inlineAll = rows.filter(r => r.position === JUMPER_POSITIONS[1]).length;
  const avgSkillAll = totalAll ? (rows.reduce((s, r) => s + r.skill, 0) / totalAll).toFixed(1) : '0';
  const expiredAll  = rows.filter(r => r.expired > 0).length;

  let centerTarget = 0, inlineTarget = 0;
  bus.forEach(bu => {
    centerTarget += Math.round((sewOpByBu[bu] || []).length * 0.025);
    inlineTarget += Math.round((sewOpByBu[bu] || []).length * 0.05);
  });
  const centerFilled = centerTarget > 0 ? Math.min(100, Math.round(centerAll / centerTarget * 100)) : 0;
  const inlineFilled = inlineTarget  > 0 ? Math.min(100, Math.round(inlineAll / inlineTarget  * 100)) : 0;

  const buStats = bus.map((bu, i) => {
    const bRows      = rows.filter(r => r.bu === bu);
    const bCenter    = bRows.filter(r => r.position === JUMPER_POSITIONS[0]).length;
    const bInline    = bRows.filter(r => r.position === JUMPER_POSITIONS[1]).length;
    const bSewCnt    = (sewOpByBu[bu] || []).length;
    const bCenterTgt = Math.round(bSewCnt * 0.025);
    const bInlineTgt = Math.round(bSewCnt * 0.05);
    return {
      bu, total: bRows.length,
      center: bCenter, centerTgt: bCenterTgt,
      centerPct: bCenterTgt > 0 ? Math.min(100, Math.round(bCenter / bCenterTgt * 100)) : 0,
      inline: bInline, inlineTgt: bInlineTgt,
      inlinePct: bInlineTgt > 0 ? Math.min(100, Math.round(bInline / bInlineTgt * 100)) : 0,
      avgSkill: bRows.length ? (bRows.reduce((s, r) => s + r.skill, 0) / bRows.length).toFixed(1) : '0',
      expired: bRows.filter(r => r.expired > 0).length,
      color: JUMPER_COLORS[i % JUMPER_COLORS.length],
    };
  });

  return { bus, totalAll, centerAll, inlineAll, avgSkillAll, expiredAll, centerTarget, inlineTarget, centerFilled, inlineFilled, buStats };
}

function _jumperSummaryHtml(vm) {
  const pBar = (pct, color) => `
    <div class="pbar pbar--6">
      <div class="pbar__fill" style="background:${pct >= 100 ? '#16a34a' : color};width:${pct}%;"></div>
    </div>`;
  const tip = (html) => `<div class="crd-tip"><span class="crd-tip-i">ℹ</span><div class="crd-tip-box">${html}</div></div>`;

  return `
    <!-- Row 1: 5 overview cards -->
    <div class="jtp-row1">
      <div class="stat-card" style="min-height:100px;">
        <div class="u-between kpi-head">
          <div class="stat-card__label">Jumper ทั้งหมด</div>
          ${tip('จำนวน Jumper ทั้งหมดในทุก BU<br><span style="color:var(--text-muted)">นับทุก record ใน Jumper table</span>')}
        </div>
        <div class="stat-card__value">${vm.totalAll}</div>
      </div>
      <div class="stat-card" style="min-height:100px;">
        <div class="u-between kpi-head kpi-head--6">
          <div class="stat-card__label">Jumper Center</div>
          ${tip('Jumper ตำแหน่ง Center<br><span style="color:var(--text-muted)">Target: 2.5% × จำนวน Sewing Operator ต่อ BU</span>')}
        </div>
        <div class="stat-card__value--md">${vm.centerAll}</div>
        ${vm.centerTarget > 0 ? `<div class="u-mt-auto">
          ${pBar(vm.centerFilled, '#2563eb')}
          <div class="u-between u-muted stat-foot">
            <span>${vm.centerFilled}%</span><span>Target: ${vm.centerTarget}</span>
          </div>
        </div>` : ''}
      </div>
      <div class="stat-card" style="min-height:100px;">
        <div class="u-between kpi-head kpi-head--6">
          <div class="stat-card__label">Jumper Inline</div>
          ${tip('Jumper ตำแหน่ง Inline<br><span style="color:var(--text-muted)">Target: 5.0% × จำนวน Sewing Operator ต่อ BU</span>')}
        </div>
        <div class="stat-card__value--md">${vm.inlineAll}</div>
        ${vm.inlineTarget > 0 ? `<div class="u-mt-auto">
          ${pBar(vm.inlineFilled, '#16a34a')}
          <div class="u-between u-muted stat-foot">
            <span>${vm.inlineFilled}%</span><span>Target: ${vm.inlineTarget}</span>
          </div>
        </div>` : ''}
      </div>
      <div class="stat-card" style="min-height:100px;">
        <div class="u-between kpi-head">
          <div class="stat-card__label">Avg. Skill Score / Person</div>
          ${tip('ค่าเฉลี่ย Skill Count ต่อ 1 คน<br><span style="color:var(--text-muted)">avg ของ Skill Count ของทุก Jumper</span>')}
        </div>
        <div class="stat-card__value">${vm.avgSkillAll}</div>
      </div>
      <div class="stat-card" style="min-height:100px;">
        <div class="u-between kpi-head">
          <div class="stat-card__label">Skill Expired</div>
          ${tip('จำนวน Jumper ที่มี Skill หมดอายุ อย่างน้อย 1 รายการ<br><span style="color:var(--text-muted)">นับ Jumper ที่ Expired Count > 0</span>')}
        </div>
        <div class="stat-card__value"${vm.expiredAll > 0 ? ' style="color:#dc2626;"' : ''}>${vm.expiredAll}</div>
      </div>
    </div>

    <!-- Row 2 + Row 3: BU mini-cards + Training Progress donuts (combined section) -->
    <div class="stat-section">
    <div class="jtp-row2">
      ${vm.buStats.map(s => `
      <div class="stat-card" style="min-width:0;">
        <div class="bu-head">
          <span class="bu-name" style="color:${s.color};">${escapeHtml(s.bu)}</span>
          <span class="u-muted bu-count">${s.total} คน</span>
        </div>
        <div style="margin-bottom:5px;">
          <div class="u-between u-muted" style="font-size:0.7rem;margin-bottom:2px;">
            <span>Center</span>
            <span class="u-text" style="font-weight:600;">${s.centerTgt > 0 ? `${s.center}/${s.centerTgt}` : s.center}</span>
          </div>
          ${s.centerTgt > 0 ? pBar(s.centerPct, s.color) : ''}
        </div>
        <div style="margin-bottom:8px;">
          <div class="u-between u-muted" style="font-size:0.7rem;margin-bottom:2px;">
            <span>Inline</span>
            <span class="u-text" style="font-weight:600;">${s.inlineTgt > 0 ? `${s.inline}/${s.inlineTgt}` : s.inline}</span>
          </div>
          ${s.inlineTgt > 0 ? pBar(s.inlinePct, hexToRgba(s.color, 0.6)) : ''}
        </div>
        <div class="u-muted stat-card__footer">
          <div class="u-between" style="margin-bottom:2px;">
            <span>Skill avg</span><strong class="u-text">${s.avgSkill}</strong>
          </div>
          <div class="u-between">
            <span>Expired</span><strong style="${s.expired > 0 ? 'color:#dc2626;' : 'color:var(--text);'}">${s.expired}</strong>
          </div>
        </div>
      </div>`).join('')}
    </div>

    <!-- Row 3: Training Progress donuts — filled by JT_PROD.init() -->
    <div id="jtp-row3" class="jtp-row3"></div>
    </div>`;
}

function _mountJumperSummary(html, bus, rows) {
  const container = document.getElementById('jtp-summary');
  if (!container) return;
  container.innerHTML = html;
  JT_PROD.init(bus, rows);  // must run after innerHTML (#jtp-row3 is created above)
}

function renderJumperSummaryCards() {
  const rows      = _jumperRows;
  const busKeys   = Object.keys(_jumperByBu);
  const sewOpByBu = _jumperSewOp || {};
  const vm = _computeJumperSummary(rows, busKeys, sewOpByBu);
  _mountJumperSummary(_jumperSummaryHtml(vm), vm.bus, rows);
}

// ── Charts ────────────────────────────────────────────────────────────────────

function renderJumperCharts() {
  const bus       = sortBus(Object.keys(_jumperByBu));
  const sewOpByBu = _jumperSewOp || {};

  const empCounts = bus.map(bu => _jumperRows.filter(r => r.bu === bu).length);
  const avgSkills = bus.map(bu => {
    const emps = _jumperRows.filter(r => r.bu === bu);
    return emps.length ? +(emps.reduce((s, e) => s + e.skill, 0) / emps.length).toFixed(1) : 0;
  });

  _makeJumperBarChart('jtp-empPerBuChart', 'จำนวนคน', bus, empCounts);
  _makeJumperBarChart('jtp-avgSkillChart', 'Skill เฉลี่ย/คน', bus, avgSkills);

  const sewCounts = bus.map(bu => (sewOpByBu[bu] || []).length);
  const cA = bus.map(bu => _jumperRows.filter(r => r.bu === bu && r.position === JUMPER_POSITIONS[0]).length);
  const iA = bus.map(bu => _jumperRows.filter(r => r.bu === bu && r.position === JUMPER_POSITIONS[1]).length);
  _makeJumperPositionChart('jtp-positionCountChart', bus, cA, iA, sewCounts);
}

// ── Data table ────────────────────────────────────────────────────────────────

function _getJumperFiltered() {
  const { bu, expired, search } = _jumperTableState.filters;
  const term = search.trim().toLowerCase();
  return _jumperRows.filter(r => {
    if (bu      && r.bu !== bu)                              return false;
    if (expired === 'expired' && r.expired <= 0)             return false;
    if (expired === 'ok'      && r.expired >  0)             return false;
    if (term && !`${r.empid} ${r.firstname}`.toLowerCase().includes(term)) return false;
    return true;
  });
}

function renderJumperTable() {
  const wrap = document.getElementById('jtp-tableWrap');
  if (!wrap) return;

  const filtered = _getJumperFiltered();
  const { sortKey, sortDir, pageSize } = _jumperTableState;
  const sorted = filtered.slice().sort((a, b) => {
    const va = a[sortKey], vb = b[sortKey];
    if (typeof va === 'number') return (va - vb) * sortDir;
    return String(va).localeCompare(String(vb), 'th') * sortDir;
  });

  const total     = sorted.length;
  const pageCount = Math.max(1, Math.ceil(total / pageSize));
  if (_jumperTableState.page > pageCount) _jumperTableState.page = pageCount;
  const start    = total ? (_jumperTableState.page - 1) * pageSize : 0;
  const pageRows = sorted.slice(start, start + pageSize);

  const cols = [
    { key: 'bu',        label: 'BU' },
    { key: 'empid',     label: 'รหัสพนักงาน' },
    { key: 'firstname', label: 'ชื่อ-สกุล' },
    { key: 'deptname',  label: 'แผนก' },
    { key: 'position',  label: 'ตำแหน่ง' },
    { key: 'skill',     label: 'Skill' },
    { key: 'expired',   label: 'หมดอายุ' },
  ];

  if (!pageRows.length) {
    wrap.innerHTML = '<div style="color:var(--text-muted);padding:16px;text-align:center;">ไม่พบข้อมูล</div>';
  } else {
    const head = cols.map(c => {
      const arrow = sortKey === c.key ? (sortDir === 1 ? ' ▲' : ' ▼') : '';
      return `<th data-key="${c.key}" style="cursor:pointer;user-select:none;">${c.label}${arrow}</th>`;
    }).join('');
    const body = pageRows.map(r => `<tr>${cols.map(c => {
      if (c.key === 'expired') {
        const cls = r.expired > 0 ? 'warn' : 'ok';
        const lbl = r.expired > 0 ? `${r.expired} หมดอายุ` : 'ปกติ';
        return `<td><span class="badge ${cls}">${lbl}</span></td>`;
      }
      return `<td>${escapeHtml(String(r[c.key] ?? ''))}</td>`;
    }).join('')}</tr>`).join('');
    wrap.innerHTML = `<div style="overflow-x:auto"><table><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table></div>`;
    wrap.querySelectorAll('th[data-key]').forEach(th => {
      th.onclick = () => {
        const k = th.dataset.key;
        _jumperTableState.sortDir  = _jumperTableState.sortKey === k ? -_jumperTableState.sortDir : 1;
        _jumperTableState.sortKey  = k;
        _jumperTableState.page     = 1;
        renderJumperTable();
      };
    });
  }

  // pagination controls
  const rs = total ? start + 1 : 0;
  const re = Math.min(start + pageSize, total);
  const rl = document.getElementById('jtp-rangeLabel');
  const pl = document.getElementById('jtp-pageLabel');
  const pp = document.getElementById('jtp-prevPage');
  const np = document.getElementById('jtp-nextPage');
  if (rl) rl.textContent = `แสดง ${rs}-${re} จาก ${total} รายการ`;
  if (pl) pl.textContent = `หน้า ${_jumperTableState.page} / ${pageCount}`;
  if (pp) pp.disabled    = _jumperTableState.page <= 1;
  if (np) np.disabled    = _jumperTableState.page >= pageCount;
}

// ── Wire controls (called once after dashboard HTML is in the DOM) ────────────

function _wireJumperControls() {
  // Inside-data slide toggle
  const toggleWrap = document.getElementById('jtp-insideDataToggle');
  if (toggleWrap) {
    toggleWrap.querySelectorAll('.toggle-btn').forEach(btn => {
      btn.onclick = () => {
        _jumperInsideMode = btn.dataset.mode;
        toggleWrap.querySelectorAll('.toggle-btn').forEach(b =>
          b.classList.toggle('active', b.dataset.mode === _jumperInsideMode));
        const track = document.getElementById('jtp-chartTrack');
        if (track) track.style.transform = _jumperInsideMode === 'positionCount' ? 'translateX(-100%)' : 'translateX(0)';
        const posLegend = document.getElementById('jtp-positionLegend');
        if (posLegend) posLegend.style.display = _jumperInsideMode === 'positionCount' ? '' : 'none';
      };
    });
    // Apply initial position based on default mode
    const track = document.getElementById('jtp-chartTrack');
    if (track) track.style.transform = _jumperInsideMode === 'positionCount' ? 'translateX(-100%)' : 'translateX(0)';
    const posLegend = document.getElementById('jtp-positionLegend');
    if (posLegend) posLegend.style.display = _jumperInsideMode === 'positionCount' ? '' : 'none';
  }

  // Table filters
  const buSel     = document.getElementById('jtp-filterBu');
  const expSel    = document.getElementById('jtp-filterExpired');
  const searchInp = document.getElementById('jtp-filterSearch');
  const prevBtn   = document.getElementById('jtp-prevPage');
  const nextBtn   = document.getElementById('jtp-nextPage');
  const pageSel   = document.getElementById('jtp-pageSize');

  if (buSel) {
    const bus = sortBus([...new Set(_jumperRows.map(r => r.bu))]);
    buSel.innerHTML = '<option value="">ทุก BU</option>' +
      bus.map(b => `<option value="${escapeHtml(b)}">${escapeHtml(b)}</option>`).join('');
    buSel.onchange = () => {
      _jumperTableState.filters.bu = buSel.value;
      _jumperTableState.page = 1;
      renderJumperTable();
    };
  }
  if (expSel) expSel.onchange = () => {
    _jumperTableState.filters.expired = expSel.value;
    _jumperTableState.page = 1;
    renderJumperTable();
  };
  if (searchInp) {
    let debounce;
    searchInp.oninput = () => {
      _jumperTableState.filters.search = searchInp.value;
      clearTimeout(debounce);
      debounce = setTimeout(() => { _jumperTableState.page = 1; renderJumperTable(); }, 250);
    };
  }
  if (prevBtn) prevBtn.onclick = () => { if (_jumperTableState.page > 1) { _jumperTableState.page--; renderJumperTable(); } };
  if (nextBtn) nextBtn.onclick = () => { _jumperTableState.page++; renderJumperTable(); };
  if (pageSel) pageSel.onchange = () => {
    _jumperTableState.pageSize = Number(pageSel.value);
    _jumperTableState.page     = 1;
    renderJumperTable();
  };
}

// ── Public entry point ────────────────────────────────────────────────────────

async function initJumperTab() {
  if (_jumperLoaded) return;   // lazy-load once per session

  const loadingEl = document.getElementById('jumper-loading');
  const errorEl   = document.getElementById('jumper-error');
  const dashEl    = document.getElementById('jumper-dashboard');

  if (loadingEl) loadingEl.classList.remove('hidden');
  if (errorEl)   errorEl.classList.add('hidden');
  if (dashEl)    dashEl.classList.add('hidden');

  try {
    const data = await api('/api/jumper-excel');
    _jumperByBu  = applyBuAliases(data.jumper        || {});
    _jumperSewOp = applyBuAliases(data.sewingOperator || {});
    _jumperRows  = normalizeJumperRows(_jumperByBu);
    _jumperLoaded = true;

    if (loadingEl) loadingEl.classList.add('hidden');
    if (dashEl)    dashEl.classList.remove('hidden');

    renderJumperSummaryCards();
    renderJumperCharts();
    renderJumperTable();
    _wireJumperControls();
  } catch (err) {
    if (loadingEl) loadingEl.classList.add('hidden');
    if (errorEl) {
      errorEl.innerHTML = `<p style="color:var(--danger);font-weight:600;">${escapeHtml(err.message)}</p>
        <button onclick="initJumperTab()" style="margin-top:8px;">ลองใหม่</button>`;
      errorEl.classList.remove('hidden');
    }
  }
}

// =============================================================================
// TRAINER TAB
// =============================================================================

let _trainerData        = null;
let _trainerCharts      = {};
let _trainerLoaded      = false;
let _trainerBuMode      = 'status';   // 'headcount' | 'status'
let _trainerInsideMode  = 'ttt';      // 'ttt' | 'status' | 'machine' | 'product' | 'individual'
let _trainerIndividualBu = '';
let _trainerTttBu        = '';
let _trainerTableMode   = 'person';   // 'person' | 'skilltype'
let _trainerTableVisible = true;
const _trainerTableState = {
  page: 1, pageSize: 10,
  filters: { bu: '', productType: '', style: '', status: '', search: '' },
};

// ── Coverage helpers ──────────────────────────────────────────────────────────

function _trainerCoverageData(data) {
  const bus          = sortBus([...new Set(data.trainers.map(t => t.bu))]);
  const productTypes = [...new Set(data.setup.map(s => s.productType))].sort();
  const coverage     = {};
  for (const bu of bus) {
    coverage[bu] = {};
    const trainersInBu = data.trainers.filter(t => t.bu === bu && t.status !== 'Master Trainer');
    for (const pt of productTypes) {
      const setupRows = data.setup.filter(s => s.bu === bu && s.productType === pt);
      if (!setupRows.length || !trainersInBu.length) { coverage[bu][pt] = null; continue; }
      const totalSteps = setupRows.reduce((s, r) => s + r.totalSteps, 0);
      if (!totalSteps) { coverage[bu][pt] = null; continue; }
      let stepsDone = 0;
      for (const t of trainersInBu)
        stepsDone += (data.skills[t.empid] || []).filter(s => s.productType === pt && (s.eff || 0) >= 75).length;
      coverage[bu][pt] = Math.min(100, Math.round(stepsDone / (trainersInBu.length * totalSteps) * 100));
    }
  }
  return { bus, productTypes, coverage };
}

// ── Summary cards (Rows 1–3) ─────────────────────────────────────────────────

function _computeTrainerSummary(data) {
  const { bus, productTypes, coverage } = _trainerCoverageData(data);
  const ptColorMap = {};
  productTypes.forEach((pt, i) => { ptColorMap[pt] = TRAINER_PT_COLORS[i % TRAINER_PT_COLORS.length]; });

  const totalTr      = data.trainers.length;
  const masterCount  = data.trainers.filter(t => t.status === 'Master Trainer').length;
  const certCount    = data.trainers.filter(t => t.status === 'Certified').length;
  const masterTarget = data.trainers.filter(t => t.position === 'Master Trainer').length;
  const certTarget   = totalTr;
  const masterFilled = masterTarget > 0 ? Math.min(100, Math.round(masterCount / masterTarget * 100)) : 0;
  const certFilled   = certTarget   > 0 ? Math.min(100, Math.round(certCount   / certTarget   * 100)) : 0;

  const trainerRates = data.trainers.map(t => {
    const sk = (data.skills[t.empid] || []);
    return sk.length ? sk.filter(r => (r.eff || 0) >= 75).length / sk.length * 100 : null;
  }).filter(v => v !== null);
  const avgSkill = trainerRates.length
    ? (trainerRates.reduce((s, v) => s + v, 0) / trainerRates.length).toFixed(1) : '0.0';
  const avgPct = Math.min(100, parseFloat(avgSkill) || 0);

  const expiredAll  = data.trainers.filter(t => (data.skills[t.empid] || []).some(r => (r.eff || 0) > 0 && Number(r.expired) === 1)).length;
  const expiredByBu = {};
  data.trainers.forEach(t => {
    if ((data.skills[t.empid] || []).some(r => (r.eff || 0) > 0 && Number(r.expired) === 1))
      expiredByBu[t.bu] = (expiredByBu[t.bu] || 0) + 1;
  });

  const buStats = bus.map((bu, i) => {
    const trs     = data.trainers.filter(t => t.bu === bu);
    const buRates = trs.map(t => {
      const sk = (data.skills[t.empid] || []);
      return sk.length ? sk.filter(r => (r.eff || 0) >= 75).length / sk.length * 100 : null;
    }).filter(v => v !== null);
    const bAvg = buRates.length
      ? (buRates.reduce((s, v) => s + v, 0) / buRates.length).toFixed(1) : '0.0';
    const bExp = trs.filter(t => (data.skills[t.empid] || []).some(r => (r.eff || 0) > 0 && Number(r.expired) === 1)).length;

    const trExcMaster = trs.filter(t => t.status !== 'Master Trainer');
    const top3Items = (data.top3 || []).filter(t => t.bu === bu).map(t => {
      const done = trExcMaster.reduce((acc, tr) =>
        acc + (data.skills[tr.empid] || []).filter(sk =>
          sk.productType === t.productType && sk.style === t.style && (sk.eff || 0) >= 75
        ).length, 0);
      const denom = t.totalSteps * trExcMaster.length;
      const pct = denom > 0 ? Math.min(100, Math.round(done / denom * 100)) : null;
      return { label: `${t.productType} / ${t.style}`, pct, productType: t.productType };
    });

    return {
      bu, color: JUMPER_COLORS[i % JUMPER_COLORS.length],
      total:      trs.length,
      master:     trs.filter(t => t.status === 'Master Trainer').length,
      certified:  trs.filter(t => t.status === 'Certified').length,
      onProgress: trs.filter(t => t.status === 'On-Progress').length,
      avgSkill: bAvg, expired: bExp, top3Items,
    };
  });

  return { bus, totalTr, masterCount, certCount, masterTarget, certTarget, masterFilled, certFilled, avgSkill, avgPct, expiredAll, expiredByBu, buStats, ptColorMap };
}

function _trainerSummaryHtml(vm) {
  const pBar = (pct, color) => `
    <div class="pbar pbar--5">
      <div class="pbar__fill" style="background:${color};width:${pct}%;"></div>
    </div>`;
  const ptColor = pct => pct >= 80 ? '#16a34a' : pct >= 60 ? '#22d3ee' : pct >= 30 ? '#f59e0b' : '#ef4444';
  const tip = (html) => `<div class="crd-tip"><span class="crd-tip-i">ℹ</span><div class="crd-tip-box">${html}</div></div>`;
  const RSUB = (entries, color) => {
    if (!Object.keys(entries).length) return '';
    const rows = Object.entries(entries).map(([bu, n]) =>
      `<div class="u-between" style="gap:8px;white-space:nowrap;"><span>${escapeHtml(bu)}</span><strong style="color:${color};">${n}</strong></div>`
    ).join('');
    return `<div class="u-muted rsub">${rows}</div>`;
  };

  return `
    <div class="stat-grid stat-grid--5">
      <div class="stat-card">
        <div class="u-between kpi-head">
          <div class="stat-card__label">Total Trainer</div>
          ${tip('จำนวน Trainer ทั้งหมดในทีม<br><span style="color:var(--text-muted)">นับทุก record ใน TrainerListAll</span>')}
        </div>
        <div class="stat-card__value">${vm.totalTr}</div>
      </div>
      <div class="stat-card" style="min-height:100px;">
        <div class="u-between kpi-head kpi-head--6">
          <div class="stat-card__label">Master Trainer</div>
          ${tip('Trainer ที่ได้รับการรับรองระดับสูงสุด<br><span style="color:var(--text-muted)">ปัจจุบัน: Column <strong>Status</strong> = "Master Trainer"<br>Target: Column <strong>Position</strong> = "Master Trainer"</span>')}
        </div>
        <div style="flex:1;">
          <div class="stat-card__value--md" style="color:var(--purple);">${vm.masterCount}</div>
          ${vm.masterTarget > 0 ? `<div>
            ${pBar(vm.masterFilled, 'var(--purple)')}
            <div class="u-between u-muted stat-foot">
              <span>${vm.masterFilled}%</span><span>Target: ${vm.masterTarget}</span>
            </div>
          </div>` : ''}
        </div>
      </div>
      <div class="stat-card" style="min-height:100px;">
        <div class="u-between kpi-head kpi-head--6">
          <div class="stat-card__label">Certified</div>
          ${tip('Trainer ที่ได้รับการรับรองระดับ Certified<br><span style="color:var(--text-muted)">ปัจจุบัน: Column <strong>Status</strong> = "Certified"<br>Target: จำนวน Trainer ทั้งหมด</span>')}
        </div>
        <div class="stat-card__value--md" style="color:var(--ok);">${vm.certCount}</div>
        ${vm.certTarget > 0 ? `<div class="u-mt-auto">
          ${pBar(vm.certFilled, 'var(--ok)')}
          <div class="u-between u-muted stat-foot">
            <span>${vm.certFilled}%</span><span>Target: ${vm.certTarget}</span>
          </div>
        </div>` : ''}
      </div>
      <div class="stat-card" style="min-height:100px;">
        <div class="u-between kpi-head kpi-head--6">
          <div class="stat-card__label">Avg. Efficiency Pass Rate / Person</div>
          ${tip('ค่าเฉลี่ยอัตราการผ่านมาตรฐาน Efficiency ของ Trainer แต่ละคน<br><span style="color:var(--text-muted)">สูตร: (Skill ที่ eff ≥ 75) / (Skill ทั้งหมดของคนนั้น) × 100 → avg ทุกคน<br>Target: 100%</span>')}
        </div>
        <div class="stat-card__value--md" style="color:#0891b2;">${vm.avgSkill}%</div>
        <div class="u-mt-auto">
          ${pBar(vm.avgPct, '#0891b2')}
          <div class="u-muted u-end stat-foot">
            <span>Target: 100%</span>
          </div>
        </div>
      </div>
      <div class="stat-card">
        <div class="u-between kpi-head">
          <div class="stat-card__label">Skill Expired</div>
          ${tip('จำนวน Trainer ที่มี Skill หมดอายุ อย่างน้อย 1 รายการ<br><span style="color:var(--text-muted)">นับ Trainer ที่มี expired = 1 และ eff > 0</span>')}
        </div>
        <div class="u-between" style="align-items:center;gap:8px;flex:1;">
          <div class="stat-card__value stat-card__value--flush"${vm.expiredAll > 0 ? ' style="color:var(--danger);"' : ''}>${vm.expiredAll}</div>
          ${RSUB(vm.expiredByBu, 'var(--danger)')}
        </div>
      </div>
    </div>
    <!-- Row 2 + Row 3: BU mini-cards + Top 3 Priority (combined section) -->
    <div class="stat-section">
    <div class="stat-grid" style="grid-template-columns:repeat(${vm.bus.length || 1},1fr);">
      ${vm.buStats.map(s => `
      <div class="stat-card">
        <div class="bu-head">
          <span class="bu-name" style="color:${s.color};">${escapeHtml(s.bu)}</span>
          <span class="u-muted bu-count">${s.total} คน</span>
        </div>
        <div class="u-muted stat-status-list">
          <div class="u-between"><span>★ Master Trainer</span><strong style="color:var(--purple);">${s.master}</strong></div>
          <div class="u-between"><span>✓ Certified</span><strong style="color:var(--ok);">${s.certified}</strong></div>
          <div class="u-between"><span>○ On-Progress</span><strong style="color:var(--warn);">${s.onProgress}</strong></div>
        </div>
        <div class="u-muted stat-card__footer">
          <div class="u-between" style="margin-bottom:2px;"><span>Avg. Eff Pass Rate</span><strong class="u-text">${s.avgSkill}%</strong></div>
          <div class="u-between"><span>Expired (คน)</span><strong style="${s.expired > 0 ? 'color:var(--danger);' : 'color:var(--text);'}">${s.expired}</strong></div>
        </div>
      </div>`).join('')}
    </div>
    <div class="stat-grid" style="grid-template-columns:repeat(${vm.bus.length || 1},1fr);">
      ${vm.buStats.map(s => `
      <div class="stat-card" style="min-height:80px;">
        <div style="text-align:center;margin-bottom:10px;">
          <span class="u-muted" style="font-size:0.6rem;background:var(--surface2);padding:1px 5px;border-radius:10px;">🎯 Top 3 Priority</span>
        </div>
        ${s.top3Items.length === 0
          ? `<div class="u-muted" style="font-size:0.7rem;text-align:center;padding:8px 0;">ไม่มีข้อมูล top_3</div>`
          : s.top3Items.map(x => `
            <div style="margin-bottom:6px;">
              <div class="u-between u-muted" style="font-size:0.68rem;margin-bottom:2px;">
                <span>${escapeHtml(x.label)}</span>
                <span class="u-text" style="font-weight:600;">${x.pct === null ? '—' : x.pct + '%'}</span>
              </div>
              ${x.pct !== null ? pBar(x.pct, vm.ptColorMap[x.productType] || ptColor(x.pct)) : ''}
            </div>`).join('')}
      </div>`).join('')}
    </div>
    </div>`;
}

function _mountTrainerSummary(html) {
  const container = document.getElementById('trainer-summary');
  if (!container) return;
  container.innerHTML = html;
}

function renderTrainerSummaryCards(data) {
  const vm = _computeTrainerSummary(data);
  _mountTrainerSummary(_trainerSummaryHtml(vm));
}

// ── Charts ────────────────────────────────────────────────────────────────────

function renderTrainerCharts(data) {
  _makeTrainerBuChart(data, _trainerBuMode);
  _makeTrainerInsideChart(data, _trainerInsideMode);
}

function _makeTrainerBuChart(data, mode) {
  const id = 'trainer-buChart';
  if (!document.getElementById(id) || typeof Chart === 'undefined') return;
  if (_trainerCharts[id]) _trainerCharts[id].destroy();
  const bus = sortBus([...new Set(data.trainers.map(t => t.bu))]);
  if (mode === 'status') {
    const statuses = ['Master Trainer', 'Certified', 'On-Progress', 'No-Certified'];
    const colors   = ['#2563eb', '#16a34a', '#f59e0b', '#f97316'];
    _trainerCharts[id] = new Chart(document.getElementById(id), {
      type: 'bar',
      data: {
        labels: bus,
        datasets: statuses.map((s, i) => ({
          label: s,
          data: bus.map(bu => data.trainers.filter(t => t.bu === bu && t.status === s).length),
          backgroundColor: colors[i], borderRadius: 3,
        })),
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        animation: { duration: 400, easing: 'easeOutQuart' },
        plugins: { legend: { position: 'bottom', labels: { boxWidth: 12, font: { size: 11 } } } },
        scales: { x: { stacked: true }, y: { stacked: true, beginAtZero: true, grace: '10%', ticks: { stepSize: 1 } } },
      },
    });
  } else {
    const sorted = bus.map(bu => ({ bu, n: data.trainers.filter(t => t.bu === bu).length }))
      .sort((a, b) => b.n - a.n);
    _trainerCharts[id] = new Chart(document.getElementById(id), {
      type: 'bar',
      data: {
        labels: sorted.map(x => x.bu),
        datasets: [{ label: 'จำนวน Trainer', data: sorted.map(x => x.n),
          backgroundColor: sorted.map((_, i) => JUMPER_COLORS[i % JUMPER_COLORS.length]), borderRadius: 4 }],
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        animation: { duration: 400, easing: 'easeOutQuart' },
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true, grace: '10%', ticks: { stepSize: 1 } } },
      },
    });
  }
}

function _makeTrainerInsideChart(data, mode) {
  const id = 'trainer-insideChart';
  const canvas = document.getElementById(id);
  if (!canvas || typeof Chart === 'undefined') return;
  if (_trainerCharts[id]) { _trainerCharts[id].destroy(); _trainerCharts[id] = null; }

  const hint  = document.getElementById('trainer-insideChartHint');

  const bus       = sortBus([...new Set(data.trainers.map(t => t.bu))]);
  const allSkills = Object.values(data.skills).flat();
  const qualified = allSkills.filter(s => (s.eff || 0) >= 75);

  // Hide hint by default (only shown in individual mode w/o BU)
  if (hint) hint.classList.add('hidden');
  canvas.style.display = '';

  const baseOpts = {
    responsive: true, maintainAspectRatio: false,
    animation: { duration: 400, easing: 'easeOutQuart' },
    plugins: { legend: { position: 'bottom', labels: { boxWidth: 12, font: { size: 11 } } } },
  };

  if (mode === 'status') {
    // Stacked bar: Qualified / In-Progress / To-Train per BU
    const rows = bus.map(bu => {
      const ids = data.trainers.filter(t => t.bu === bu).map(t => t.empid);
      const sks = allSkills.filter(s => ids.includes(s.empid));
      return {
        qual: sks.filter(s => (s.eff || 0) >= 75).length,
        prog: sks.filter(s => (s.eff || 0) > 0 && (s.eff || 0) < 75).length,
        todo: sks.filter(s => (s.eff || 0) === 0).length,
      };
    });
    _trainerCharts[id] = new Chart(canvas, {
      type: 'bar',
      data: {
        labels: bus,
        datasets: [
          { label: 'Qualified (≥75)', data: rows.map(r => r.qual), backgroundColor: '#16a34a', borderRadius: 3 },
          { label: 'In-Progress',     data: rows.map(r => r.prog), backgroundColor: '#f59e0b', borderRadius: 3 },
          { label: 'To-Train',        data: rows.map(r => r.todo), backgroundColor: '#94a3b8', borderRadius: 3 },
        ],
      },
      options: { ...baseOpts, scales: { x: { stacked: true }, y: { stacked: true, beginAtZero: true, grace: '10%' } } },
    });

  } else if (mode === 'machine' || mode === 'product') {
    // Horizontal stacked bar: Y = Machine / Product Type, X = qualified count, stacks = BU
    const field = mode === 'machine' ? 'machineType' : 'productType';
    const empBu = {};
    for (const t of data.trainers) empBu[t.empid] = t.bu;
    const totals = {};
    for (const s of qualified) {
      const k = s[field]; if (!k) continue;
      totals[k] = (totals[k] || 0) + 1;
    }
    const TOP_N = mode === 'machine' ? 10 : 12;
    const topItems = Object.entries(totals).sort((a, b) => b[1] - a[1]).slice(0, TOP_N).map(x => x[0]);
    const datasets = bus.map((bu, i) => ({
      label: bu,
      data: topItems.map(it => qualified.filter(s => s[field] === it && empBu[s.empid] === bu).length),
      backgroundColor: JUMPER_COLORS[i % JUMPER_COLORS.length],
      borderRadius: 3,
    }));
    _trainerCharts[id] = new Chart(canvas, {
      type: 'bar',
      data: { labels: topItems, datasets },
      options: { ...baseOpts, indexAxis: 'y',
        scales: { x: { stacked: true, beginAtZero: true, grace: '10%' }, y: { stacked: true } } },
    });

  } else if (mode === 'individual') {
    const selBu = _trainerIndividualBu;
    if (!selBu) {
      // No BU selected — show hint, hide canvas
      canvas.style.display = 'none';
      if (hint) { hint.classList.remove('hidden'); hint.textContent = 'กรุณาเลือก BU เพื่อดูทักษะของครูฝึกรายบุคคล'; }
      return;
    }
    const trsInBu = data.trainers.filter(t => t.bu === selBu).sort((a, b) => a.name.localeCompare(b.name));
    const ids = trsInBu.map(t => t.empid);
    const buQual = qualified.filter(s => ids.includes(s.empid));
    const pts = [...new Set(buQual.map(s => s.productType).filter(Boolean))].sort();
    if (!trsInBu.length || !pts.length) {
      canvas.style.display = 'none';
      if (hint) { hint.classList.remove('hidden'); hint.textContent = 'ไม่มีทักษะ qualified ใน BU นี้'; }
      return;
    }
    // Build consistent color map from ALL product types (all BUs) so same PT always gets same color
    const allPts = [...new Set(qualified.map(s => s.productType).filter(Boolean))].sort();
    const ptColorMap = {};
    allPts.forEach((pt, i) => { ptColorMap[pt] = TRAINER_PT_COLORS[i % TRAINER_PT_COLORS.length]; });
    const datasets = pts.map(pt => ({
      label: pt,
      data: trsInBu.map(t => buQual.filter(s => s.empid === t.empid && s.productType === pt).length),
      backgroundColor: ptColorMap[pt] ?? JUMPER_COLORS[0],
      borderRadius: 3,
    }));
    _trainerCharts[id] = new Chart(canvas, {
      type: 'bar',
      data: { labels: trsInBu.map(t => t.name), datasets },
      options: { ...baseOpts,
        scales: {
          x: { stacked: true, ticks: { font: { size: 10 }, maxRotation: 0, minRotation: 0,
            callback(value) {
              const lbl = this.getLabelForValue(value);
              return lbl.length > 8 ? lbl.slice(0, 8) + '…' : lbl;
            } } },
          y: { stacked: true, beginAtZero: true, grace: '10%', title: { display: true, text: 'จำนวนทักษะ (Qualified)' } },
        } },
    });

  } else if (mode === 'ttt') {
    const passLine = 70;
    const trainersWithScore = data.trainers;
    const buList = sortBus([...new Set(trainersWithScore.map(t => t.bu))]);
    const buColorMap = {};
    buList.forEach((bu, i) => { buColorMap[bu] = JUMPER_COLORS[i % JUMPER_COLORS.length]; });

    const annotationOpts = {
      annotations: {
        passLine: {
          type: 'line', yMin: passLine, yMax: passLine,
          borderColor: '#dc2626', borderWidth: 2, borderDash: [6, 4],
        },
      },
    };
    const passLegend = `<span style="display:inline-block;width:22px;border-bottom:2px dashed #dc2626;vertical-align:middle;margin-right:5px;"></span><span>เกณฑ์ผ่าน ${passLine}%</span>`;

    if (!_trainerTttBu) {
      // ── BU Overview ──
      const avgScores = buList.map(bu => {
        const inBu = trainersWithScore.filter(t => t.bu === bu);
        return inBu.length ? +(inBu.reduce((s, t) => s + (t.score ?? 0), 0) / inBu.length).toFixed(1) : 0;
      });

      _trainerCharts[id] = new Chart(canvas, {
        type: 'bar',
        data: {
          labels: buList,
          datasets: [{
            label: 'ค่าเฉลี่ย (%)',
            data: avgScores,
            backgroundColor: buList.map(bu => buColorMap[bu]),
            borderRadius: 4,
            barPercentage: 0.6,
          }],
        },
        options: {
          ...baseOpts,
          onClick(evt, elems) {
            if (!elems.length) return;
            const idx = elems[0].index;
            _trainerTttBu = buList[idx];
            _makeTrainerInsideChart(data, 'ttt');
          },
          plugins: {
            legend: { display: false },
            annotation: annotationOpts,
            tooltip: { callbacks: { label: ctx => `${ctx.label}: ${ctx.raw.toFixed(1)}%` } },
          },
          scales: {
            x: { ticks: { font: { size: 12 }, maxRotation: 0, minRotation: 0 } },
            y: { beginAtZero: true, max: 100,
              title: { display: true, text: 'คะแนนเฉลี่ย (%)' },
              ticks: { callback: v => v + '%' } },
          },
        },
      });
      if (hint) { hint.classList.remove('hidden'); hint.innerHTML = `${passLegend}<span style="color:var(--border-light);">|</span><span>คลิกที่แท่ง BU เพื่อดูรายบุคคล</span>`; }

    } else {
      // ── Individual drill-down for selected BU ──
      const selBu = _trainerTttBu;
      const inBu = trainersWithScore.filter(t => t.bu === selBu).sort((a, b) => (b.score ?? 0) - (a.score ?? 0));
      if (!inBu.length) {
        canvas.style.display = 'none';
        if (hint) { hint.classList.remove('hidden'); hint.textContent = 'ไม่มีข้อมูลคะแนนใน BU นี้'; }
        return;
      }
      const labels = inBu.map(t => {
        const n = t.name;
        return n.length > 8 ? n.slice(0, 8) + '…' : n;
      });
      const scores = inBu.map(t => t.score ?? 0);
      const colors = scores.map(v => v >= passLine ? '#16a34a' : '#ef4444');

      _trainerCharts[id] = new Chart(canvas, {
        type: 'bar',
        data: {
          labels,
          datasets: [{
            label: 'คะแนน (%)',
            data: scores,
            backgroundColor: colors,
            borderRadius: 4,
            barPercentage: 0.6,
          }],
        },
        options: {
          ...baseOpts,
          plugins: {
            legend: { position: 'bottom', labels: { boxWidth: 12, font: { size: 11 },
              generateLabels() {
                return [
                  { text: 'Pass (≥70%)', fillStyle: '#16a34a', strokeStyle: '#16a34a', lineWidth: 0 },
                  { text: 'Fail (<70%)', fillStyle: '#ef4444', strokeStyle: '#ef4444', lineWidth: 0 },
                ];
              },
            } },
            annotation: annotationOpts,
            tooltip: {
              callbacks: {
                title: ctx => inBu[ctx[0].dataIndex]?.name || '',
                label: ctx => `${ctx.raw.toFixed(1)}%`,
              },
            },
          },
          scales: {
            x: { ticks: { font: { size: 11 }, maxRotation: 0, minRotation: 0,
              callback(value) {
                const lbl = this.getLabelForValue(value);
                return lbl.length > 8 ? lbl.slice(0, 8) + '…' : lbl;
              } } },
            y: { beginAtZero: true, max: 100,
              title: { display: true, text: 'คะแนน (%)' },
              ticks: { callback: v => v + '%' } },
          },
        },
      });
      if (hint) {
        hint.classList.remove('hidden');
        hint.innerHTML = `${passLegend}` +
          `<span style="color:var(--border-light);">|</span>` +
          `<button onclick="_trainerTttBu='';_makeTrainerInsideChart(window._tttData,'ttt');" style="background:none;border:1px solid var(--border);border-radius:6px;padding:4px 10px;cursor:pointer;color:var(--text);font-size:0.82rem;">← ภาพรวม BU</button>` +
          `<span style="font-size:0.82rem;">${escapeHtml(selBu)} — รายบุคคล</span>`;
      }
    }
    window._tttData = data;
  }
}

// ── Coverage Matrix ───────────────────────────────────────────────────────────

function renderTrainerCoverageMatrix(data) {
  const wrap = document.getElementById('trainer-coverageMatrix');
  if (!wrap) return;
  const { bus, productTypes, coverage } = _trainerCoverageData(data);
  if (!productTypes.length) {
    wrap.innerHTML = '<p style="color:var(--text-muted);font-size:0.85rem;text-align:center;padding:20px;">ยังไม่มีข้อมูล BUSetup — กรุณาสร้างตาราง BUSetup ในไฟล์ Excel</p>';
    return;
  }
  const cellCls = pct => {
    if (pct === null) return '';
    if (pct >= 80) return 'cov-high';
    if (pct >= 60) return 'cov-good';
    if (pct >= 30) return 'cov-warn';
    return 'cov-low';
  };
  const colAvg = productTypes.map(pt => {
    const v = bus.map(bu => coverage[bu][pt]).filter(x => x !== null);
    return v.length ? Math.round(v.reduce((s, x) => s + x, 0) / v.length) : null;
  });
  const rowAvg = bus.map(bu => {
    const v = productTypes.map(pt => coverage[bu][pt]).filter(x => x !== null);
    return v.length ? Math.round(v.reduce((s, x) => s + x, 0) / v.length) : null;
  });
  const allV = bus.flatMap(bu => productTypes.map(pt => coverage[bu][pt])).filter(x => x !== null);
  const grandAvg = allV.length ? Math.round(allV.reduce((s, x) => s + x, 0) / allV.length) : null;

  const TH = 'padding:7px 10px;font-size:0.75rem;font-weight:600;background:var(--surface2);color:var(--text);text-align:center;white-space:nowrap;border:1px solid var(--border-light);';
  const TD = 'padding:6px 10px;font-size:0.75rem;text-align:center;border:1px solid var(--border-light);color:var(--text);';
  const ptColW = `${(80 / productTypes.length).toFixed(3)}%`;  // PT columns share 80% equally
  wrap.innerHTML = `
    <table style="border-collapse:collapse;width:100%;min-width:500px;table-layout:fixed;">
      <colgroup>
        <col style="width:12%;">
        ${productTypes.map(() => `<col style="width:${ptColW};">`).join('')}
        <col style="width:8%;">
      </colgroup>
      <thead><tr>
        <th style="${TH}text-align:left;">BU</th>
        ${productTypes.map(pt => `<th style="${TH}word-break:break-word;white-space:normal;">${escapeHtml(pt)}</th>`).join('')}
        <th style="${TH}">x̄</th>
      </tr></thead>
      <tbody>
        ${bus.map((bu, i) => `
        <tr>
          <td style="${TD}text-align:left;font-weight:600;">${escapeHtml(bu)}</td>
          ${productTypes.map(pt => {
            const p = coverage[bu][pt];
            const cls = cellCls(p);
            return `<td class="${cls}" style="${TD}">${p === null ? '—' : p + '%'}</td>`;
          }).join('')}
          <td style="${TD}font-weight:700;">${rowAvg[i] === null ? '—' : rowAvg[i] + '%'}</td>
        </tr>`).join('')}
        <tr style="border-top:2px solid var(--border);">
          <td style="${TD}text-align:left;font-weight:700;">x̄</td>
          ${colAvg.map(v => `<td style="${TD}font-weight:700;">${v === null ? '—' : v + '%'}</td>`).join('')}
          <td style="${TD}font-weight:700;">${grandAvg === null ? '—' : grandAvg + '%'}</td>
        </tr>
      </tbody>
    </table>`;
}

// ── Person list ───────────────────────────────────────────────────────────────

function renderTrainerTable(data) {
  const wrap = document.getElementById('trainer-table');
  if (!wrap) return;
  const { bu, productType, style, status, search } = _trainerTableState.filters;
  const q = search.toLowerCase();

  if (_trainerTableMode === 'person') {
    let rows = [];
    for (const t of data.trainers) {
      if (bu && t.bu !== bu) continue;
      if (status && t.status !== status) continue;
      if (q && !t.name.toLowerCase().includes(q) && !t.empid.toLowerCase().includes(q)) continue;
      const trSkills = (data.skills[t.empid] || []).filter(s =>
        (s.eff || 0) > 0 &&
        (!productType || s.productType === productType) &&
        (!style || s.style === style)
      );
      for (const sk of trSkills) {
        rows.push({
          empid: t.empid, name: t.name, bu: t.bu, status: t.status,
          processNo: sk.processNo, processName: sk.processName,
          machineType: sk.machineType, grade: sk.grade,
          smv: sk.smv, amv: sk.amv, eff: sk.eff,
          productType: sk.productType, style: sk.style,
          expired: sk.expired,
        });
      }
    }

    const total = rows.length;
    const { page, pageSize } = _trainerTableState;
    const pageCount = Math.ceil(total / pageSize) || 1;
    const start     = (page - 1) * pageSize;
    const pageRows  = rows.slice(start, start + pageSize);
    const effColor  = eff => {
      if (eff == null || isNaN(eff)) return 'var(--text-muted)';
      if (eff >= 75) return 'var(--ok)';
      const hue = Math.round((eff / 75) * 120);
      return `hsl(${hue}, 80%, 38%)`;
    };

    if (!pageRows.length) {
      wrap.innerHTML = '<div style="color:var(--text-muted);padding:16px;text-align:center;">ไม่พบข้อมูล</div>';
    } else {
      wrap.innerHTML = `<div style="overflow-x:auto"><table>
        <thead><tr>
          <th>BU</th><th>รหัสพนักงาน</th><th>ชื่อ-สกุล</th>
          <th>Process No</th><th>Process Name</th><th>Machine</th>
          <th>SMV</th><th>AMV</th><th>Eff%</th>
          <th>Product Type</th><th>Style</th><th>หมดอายุ</th>
        </tr></thead>
        <tbody>${pageRows.map(r => `
          <tr>
            <td>${escapeHtml(r.bu)}</td>
            <td>${escapeHtml(r.empid)}</td>
            <td>${escapeHtml(r.name)}</td>
            <td>${escapeHtml(r.processNo || '—')}</td>
            <td>${escapeHtml(r.processName || '—')}</td>
            <td>${escapeHtml(r.machineType || '—')}</td>
            <td style="text-align:right;">${r.smv ? r.smv.toFixed(2) : '—'}</td>
            <td style="text-align:right;">${r.amv ? r.amv.toFixed(2) : '—'}</td>
            <td style="text-align:right;font-weight:700;color:${effColor(r.eff)};">${r.eff ? r.eff.toFixed(1) + '%' : '—'}</td>
            <td>${escapeHtml(r.productType || '—')}</td>
            <td>${escapeHtml(r.style || '—')}</td>
            <td><span class="badge ${Number(r.expired) === 1 ? 'warn' : 'ok'}">${Number(r.expired) === 1 ? 'หมดอายุ' : 'ปกติ'}</span></td>
          </tr>`).join('')}
        </tbody>
      </table></div>`;
    }

    const rl = document.getElementById('trainer-rangeLabel');
    const pl = document.getElementById('trainer-pageLabel');
    const pv = document.getElementById('trainer-prevPage');
    const nv = document.getElementById('trainer-nextPage');
    if (rl) rl.textContent = total > 0 ? `${start+1}–${Math.min(start+pageSize,total)} จาก ${total}` : '0 รายการ';
    if (pl) pl.textContent = `${page} / ${pageCount}`;
    if (pv) pv.disabled = page <= 1;
    if (nv) nv.disabled = page >= pageCount;

  } else {
    // By Skill Type — pivot: rows = trainers, columns = product types, cell = qualified skill count (eff >= 75)
    const allPts = [...new Set(
      Object.values(data.skills).flat().map(s => s.productType).filter(Boolean)
    )].sort().filter(pt => !productType || pt === productType);

    const filteredTrainers = data.trainers.filter(t => {
      if (bu && t.bu !== bu) return false;
      if (status && t.status !== status) return false;
      if (q && !t.name.toLowerCase().includes(q) && !t.empid.toLowerCase().includes(q)) return false;
      return true;
    }).sort((a, b) => a.bu.localeCompare(b.bu) || a.name.localeCompare(b.name));

    // pivot[empid][pt] = count of qualified skills (eff >= 75) in that product type
    const pivot = {};
    for (const t of filteredTrainers) {
      pivot[t.empid] = {};
      for (const pt of allPts) {
        pivot[t.empid][pt] = (data.skills[t.empid] || []).filter(s =>
          s.productType === pt && (s.eff || 0) >= 75 && (!style || s.style === style)
        ).length;
      }
    }

    const total = filteredTrainers.length;
    const { page, pageSize } = _trainerTableState;
    const pageCount = Math.ceil(total / pageSize) || 1;
    const start     = (page - 1) * pageSize;
    const pageRows  = filteredTrainers.slice(start, start + pageSize);

    if (!total) {
      wrap.innerHTML = '<div style="color:var(--text-muted);padding:16px;text-align:center;">ไม่พบข้อมูล</div>';
    } else {
      wrap.innerHTML = `<div style="overflow-x:auto"><table>
        <thead><tr>
          <th>BU</th><th>ชื่อ-สกุล</th>
          ${allPts.map(pt => `<th style="text-align:center;">${escapeHtml(pt)}</th>`).join('')}
        </tr></thead>
        <tbody>${pageRows.map(t => `
          <tr>
            <td>${escapeHtml(t.bu)}</td>
            <td>${escapeHtml(t.name)}</td>
            ${allPts.map(pt => {
              const cnt = pivot[t.empid][pt];
              return `<td style="text-align:center;">${cnt > 0 ? `<strong>${cnt}</strong>` : '<span style="color:var(--text-muted);">—</span>'}</td>`;
            }).join('')}
          </tr>`).join('')}
        </tbody>
      </table></div>`;
    }

    const rl = document.getElementById('trainer-rangeLabel');
    const pl = document.getElementById('trainer-pageLabel');
    const pv = document.getElementById('trainer-prevPage');
    const nv = document.getElementById('trainer-nextPage');
    if (rl) rl.textContent = total > 0 ? `${start+1}–${Math.min(start+pageSize,total)} จาก ${total}` : '0 รายการ';
    if (pl) pl.textContent = `${page} / ${pageCount}`;
    if (pv) pv.disabled = page <= 1;
    if (nv) nv.disabled = page >= pageCount;
  }
}

// ── Wire controls ─────────────────────────────────────────────────────────────

function _wireTrainerControls(data) {
  const wire = (id, modeRef, setter, renderFn) => {
    const wrap = document.getElementById(id);
    if (!wrap) return;
    wrap.querySelectorAll('.toggle-btn').forEach(btn => {
      btn.onclick = () => {
        setter(btn.dataset.mode);
        wrap.querySelectorAll('.toggle-btn').forEach(b =>
          b.classList.toggle('active', b.dataset.mode === btn.dataset.mode));
        renderFn(data, btn.dataset.mode);
      };
    });
  };
  wire('trainer-buChartToggle',      _trainerBuMode,     m => { _trainerBuMode = m; },     _makeTrainerBuChart);
  wire('trainer-insideDataToggle',   _trainerInsideMode,  m => {
    _trainerInsideMode = m;
    if (m !== 'ttt') _trainerTttBu = '';
    if (m !== 'individual') {
      _trainerIndividualBu = '';
      const ib = document.getElementById('trainer-individualBtn');
      if (ib) ib.textContent = 'Individual';
      const im = document.getElementById('trainer-individualMenu');
      if (im) im.classList.add('hidden');
    }
  },  _makeTrainerInsideChart);

  // Individual mode — floating BU sub-menu under the Individual button
  const indBtn  = document.getElementById('trainer-individualBtn');
  const indMenu = document.getElementById('trainer-individualMenu');
  if (indBtn && indMenu) {
    const bus = [...new Set(data.trainers.map(t => t.bu))].sort();
    indMenu.innerHTML = bus.map(b =>
      `<button type="button" class="individual-menu-item${b === _trainerIndividualBu ? ' active' : ''}" data-bu="${escapeHtml(b)}">${escapeHtml(b)}</button>`
    ).join('');

    // Override the generic toggle handler: activate mode AND open/close the menu
    indBtn.onclick = (e) => {
      e.stopPropagation();
      _trainerInsideMode = 'individual';
      document.querySelectorAll('#trainer-insideDataToggle .toggle-btn').forEach(b =>
        b.classList.toggle('active', b.dataset.mode === 'individual'));
      _makeTrainerInsideChart(data, 'individual');
      indMenu.classList.toggle('hidden');
    };

    indMenu.querySelectorAll('.individual-menu-item').forEach(item => {
      item.onclick = (e) => {
        e.stopPropagation();
        _trainerIndividualBu = item.dataset.bu;
        indMenu.querySelectorAll('.individual-menu-item').forEach(i =>
          i.classList.toggle('active', i.dataset.bu === _trainerIndividualBu));
        indBtn.textContent = `Individual: ${_trainerIndividualBu} ▾`;
        indMenu.classList.add('hidden');
        _makeTrainerInsideChart(data, 'individual');
      };
    });

    // Close the menu when clicking anywhere else (incl. other toggle buttons)
    if (!window._trainerIndMenuCloser) {
      window._trainerIndMenuCloser = true;
      document.addEventListener('click', (e) => {
        const menu = document.getElementById('trainer-individualMenu');
        if (menu && !menu.classList.contains('hidden') && !menu.contains(e.target)) {
          menu.classList.add('hidden');
        }
      });
    }
  }

  const tableToggle = document.getElementById('trainer-tableToggle');
  if (tableToggle) {
    tableToggle.querySelectorAll('.toggle-btn').forEach(btn => {
      btn.onclick = () => {
        _trainerTableMode = btn.dataset.mode;
        tableToggle.querySelectorAll('.toggle-btn').forEach(b =>
          b.classList.toggle('active', b.dataset.mode === _trainerTableMode));
        _trainerTableState.page = 1;
        renderTrainerTable(data);
      };
    });
  }

  const hideBtn = document.getElementById('trainer-tableHideBtn');
  if (hideBtn) {
    hideBtn.onclick = () => {
      _trainerTableVisible = !_trainerTableVisible;
      const body = document.getElementById('trainer-tableBody');
      if (body) body.style.display = _trainerTableVisible ? '' : 'none';
      hideBtn.textContent = _trainerTableVisible ? 'ซ่อน ▲' : 'แสดง ▼';
    };
  }

  const buSel     = document.getElementById('trainer-filterBu');
  const ptSel     = document.getElementById('trainer-filterProductType');
  const styleSel  = document.getElementById('trainer-filterStyle');
  const statusSel = document.getElementById('trainer-filterStatus');
  const searchInp = document.getElementById('trainer-filterSearch');
  const prevBtn   = document.getElementById('trainer-prevPage');
  const nextBtn   = document.getElementById('trainer-nextPage');
  const pageSel   = document.getElementById('trainer-pageSize');

  if (buSel) {
    const bus = [...new Set(data.trainers.map(t => t.bu))].sort();
    buSel.innerHTML = '<option value="">ทุก BU</option>' +
      bus.map(b => `<option value="${escapeHtml(b)}">${escapeHtml(b)}</option>`).join('');
    buSel.onchange = () => { _trainerTableState.filters.bu = buSel.value; _trainerTableState.page = 1; renderTrainerTable(data); };
  }
  const populateStyles = (forPt) => {
    if (!styleSel) return;
    const styles = [...new Set(
      Object.values(data.skills).flat()
        .filter(s => !forPt || s.productType === forPt)
        .map(s => s.style)
        .filter(Boolean)
    )].sort();
    styleSel.innerHTML = '<option value="">ทุก Style</option>' +
      styles.map(s => `<option value="${escapeHtml(s)}">${escapeHtml(s)}</option>`).join('');
  };

  if (ptSel) {
    const pts = [...new Set(Object.values(data.skills).flat().map(s => s.productType).filter(Boolean))].sort();
    ptSel.innerHTML = '<option value="">ทุก Product Type</option>' +
      pts.map(p => `<option value="${escapeHtml(p)}">${escapeHtml(p)}</option>`).join('');
    ptSel.onchange = () => {
      _trainerTableState.filters.productType = ptSel.value;
      _trainerTableState.filters.style = '';
      populateStyles(ptSel.value);
      _trainerTableState.page = 1;
      renderTrainerTable(data);
    };
  }
  if (styleSel) {
    populateStyles('');
    styleSel.onchange = () => { _trainerTableState.filters.style = styleSel.value; _trainerTableState.page = 1; renderTrainerTable(data); };
  }
  if (statusSel) {
    ['Master Trainer','Certified','On-Progress','No-Certified'].forEach(s => {
      const opt = document.createElement('option');
      opt.value = s; opt.textContent = s;
      statusSel.appendChild(opt);
    });
    statusSel.onchange = () => { _trainerTableState.filters.status = statusSel.value; _trainerTableState.page = 1; renderTrainerTable(data); };
  }
  if (searchInp) {
    let db;
    searchInp.oninput = () => {
      clearTimeout(db);
      db = setTimeout(() => { _trainerTableState.filters.search = searchInp.value; _trainerTableState.page = 1; renderTrainerTable(data); }, 250);
    };
  }
  if (prevBtn) prevBtn.onclick = () => { _trainerTableState.page--; renderTrainerTable(data); };
  if (nextBtn) nextBtn.onclick = () => { _trainerTableState.page++; renderTrainerTable(data); };
  if (pageSel) pageSel.onchange = () => { _trainerTableState.pageSize = +pageSel.value; _trainerTableState.page = 1; renderTrainerTable(data); };
}

// ── Main init ─────────────────────────────────────────────────────────────────

async function initTrainerTab() {
  if (_trainerLoaded) return;
  const loadingEl = document.getElementById('trainer-loading');
  const errorEl   = document.getElementById('trainer-error');
  const dashEl    = document.getElementById('trainer-dashboard');
  try {
    const res = await fetch('/api/trainer-excel');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    _trainerData = await res.json();
    if (_trainerData.error) throw new Error(_trainerData.error);
    _trainerLoaded = true;
    if (loadingEl) loadingEl.classList.add('hidden');
    if (dashEl)    dashEl.classList.remove('hidden');
    renderTrainerSummaryCards(_trainerData);
    renderTrainerCharts(_trainerData);
    renderTrainerCoverageMatrix(_trainerData);
    renderTrainerTable(_trainerData);
    _wireTrainerControls(_trainerData);
  } catch (err) {
    if (loadingEl) loadingEl.classList.add('hidden');
    if (errorEl) {
      errorEl.innerHTML = `<p style="color:var(--danger);font-weight:600;">${escapeHtml(err.message)}</p>
        <button onclick="initTrainerTab()" style="margin-top:8px;">ลองใหม่</button>`;
      errorEl.classList.remove('hidden');
    }
  }
}

// =============================================================================
// GICA ASSESSMENT TAB
// Data from /api/gica-excel (Flask → OneDrive via MANAGER_REFRESH_TOKEN).
// Each employee's CURRENT status = their latest non-empty test slot (#15 → #1).
// Grades: A ≥ 85% · B ≥ 65% · C ≥ 50% · D < 50%.
// Next test: A → Review (+30 working days) · B/C/D → Retest (+7 working days).
// =============================================================================

const GICA_GRADES        = ['A', 'B', 'C', 'D'];
const GICA_GRADE_RANK    = { A: 4, B: 3, C: 2, D: 1 };
const GICA_GRADE_COLORS  = { A: '#16a34a', B: '#2563eb', C: '#f59e0b', D: '#dc2626' };
const GICA_GRADE_BG      = { A: '#dcfce7', B: '#dbeafe', C: '#fef3c7', D: '#fee2e2' };
const GICA_LEVEL_ORDER   = ['QEDM','AQEDM','DVM','ADVM','DPM','ADPM','Department Head','Supervisor*','Supervisor','Officer','Worker'];
const GICA_QUAD_GROUPS = [
  { id: 'g-qdm',  label: 'QEDM / AQEDM / DVM / ADVM', levels: ['QEDM','AQEDM','DVM','ADVM'], expM: 'B', expI: 'C' },
  { id: 'g-dpm',  label: 'DPM / ADPM',                 levels: ['DPM','ADPM'],                 expM: 'B', expI: 'B' },
  { id: 'g-sups', label: 'Supervisor*',                 levels: ['Supervisor*'],                expM: 'A', expI: 'B' },
  { id: 'g-sup',  label: 'Supervisor',                  levels: ['Supervisor'],                 expM: 'A', expI: 'A' },
  { id: 'g-off',  label: 'Officer',                     levels: ['Officer'],                    expM: 'A', expI: 'A' },
  { id: 'g-wkr',  label: 'Worker',                      levels: ['Worker'],                     expM: 'A', expI: 'A' },
];
const GICA_GRADE_THRESH = { A: 0.85, B: 0.65, C: 0.50, D: 0.00 };
const GICA_GRADE_TEXT    = { A: '#15803d', B: '#1d4ed8', C: '#b45309', D: '#b91c1c' };

let _gicaData         = null;
let _gicaLoaded       = false;
let _gicaCharts       = {};
let _gicaTrendCharts  = {};
let _gicaSchedMode  = 'all';
let _gicaSchedDate  = '';
let _gicaSchedBu    = '';
let _gicaDrillEscHandler = null;
// { [level]: { all: pct, [bu]: pct } } — "all" is the generic fallback (KPI Setup
// modal's "All BU" tab); per-BU keys are seeded from kpi_g1/kpi_g2/... on load and
// can be adjusted in-session per BU for "what if" simulation (not persisted).
let _gicaKpiTargets = {};
let _gicaKpiActiveBu = 'all';
const _gicaTableState = {
  page: 1, pageSize: 25, sortKey: 'nextDate', sortDir: 1,
  filters: { bu: '', grade: '', dept: '', level: '', type: '', search: '' },
};

// ── Date / format helpers ─────────────────────────────────────────────────────
function _gicaToday() { const d = new Date(); d.setHours(0, 0, 0, 0); return d; }
function _gicaParseDate(iso) {
  if (!iso) return null;
  const d = new Date(iso + 'T00:00:00');
  return isNaN(d.getTime()) ? null : d;
}
function _gicaDaysUntil(iso) {
  const d = _gicaParseDate(iso);
  return d ? Math.round((d - _gicaToday()) / 86400000) : null;
}
function _gicaFmtDate(iso) {
  const d = _gicaParseDate(iso);
  if (!d) return '—';
  const m = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${d.getDate()} ${m[d.getMonth()]} ${d.getFullYear()}`;
}
function _gicaScoreToGrade(s) {
  if (s == null) return '';
  if (s >= 0.85) return 'A';
  if (s >= 0.65) return 'B';
  if (s >= 0.50) return 'C';
  return 'D';
}
function _gicaGradeBadge(g) {
  if (!g) return '—';
  return `<span style="display:inline-block;font-size:0.7rem;font-weight:700;padding:2px 8px;border-radius:10px;background:${GICA_GRADE_BG[g] || '#eee'};color:${GICA_GRADE_TEXT[g] || '#333'};">${g}</span>`;
}
function _gicaTypeBadge(t) {
  if (!t) return '—';
  const bg  = t === 'Review' ? '#dbeafe' : '#fee2e2';
  const col = t === 'Review' ? '#1d4ed8' : '#b91c1c';
  return `<span style="font-size:0.68rem;font-weight:600;padding:2px 7px;border-radius:10px;background:${bg};color:${col};">${t}</span>`;
}
function _gicaDaysBadge(iso) {
  const d = _gicaDaysUntil(iso);
  if (d == null) return '';
  let bg, col, txt;
  if (d < 0)       { bg = '#fee2e2'; col = '#b91c1c'; txt = `เลย ${Math.abs(d)} วัน`; }
  else if (d <= 3) { bg = '#fee2e2'; col = '#b91c1c'; txt = `${d} วัน`; }
  else if (d <= 7) { bg = '#fef3c7'; col = '#b45309'; txt = `${d} วัน`; }
  else             { bg = '#dbeafe'; col = '#1d4ed8'; txt = `${d} วัน`; }
  return `<span style="font-size:0.68rem;font-weight:600;padding:2px 7px;border-radius:10px;background:${bg};color:${col};">${txt}</span>`;
}
function _gicaPBar(pct, color) {
  const p = Math.max(0, Math.min(100, pct));
  return `<div style="height:7px;background:var(--border-light);border-radius:4px;overflow:hidden;">
    <div style="height:100%;width:${p}%;background:${color};border-radius:4px;"></div></div>`;
}
function _gicaExpBadge(g) {
  return g && GICA_GRADE_COLORS[g]
    ? `<span class="exp-badge exp-badge--${g}">${g}</span>`
    : `<span class="exp-badge exp-badge--expect">—</span>`;
}

// KPI Setup modal slider list for one tab ('all' or a BU code) — reads the live
// _gicaKpiTargets global so it can be re-rendered standalone on tab switch.
function _gicaKpiListHtml(bu) {
  return GICA_LEVEL_ORDER.filter(l => l !== 'Department Head').map(lv => {
    const t = _gicaKpiTargets[lv] || { all: 80 };
    const val = (bu === 'all' ? t.all : (t[bu] ?? t.all)) ?? 80;
    return `
      <div class="gica-kpi-row" data-level="${escapeHtml(lv)}">
        <span class="gica-kpi-row__label">${escapeHtml(lv)}</span>
        <input type="range" class="gica-kpi-slider" min="0" max="100" step="5"
          value="${val}" data-level="${escapeHtml(lv)}">
        <span class="gica-kpi-row__val">${val}%</span>
      </div>`;
  }).join('');
}

// ── Entry point ───────────────────────────────────────────────────────────────
async function initGicaTab() {
  if (_gicaLoaded) return;
  const loadingEl = $('gica-loading');
  const errorEl   = $('gica-error');
  const dashEl    = $('gica-dashboard');
  if (loadingEl) loadingEl.classList.remove('hidden');
  if (errorEl)   errorEl.classList.add('hidden');
  if (dashEl)    dashEl.classList.add('hidden');
  try {
    const res = await fetch('/api/gica-excel');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    _gicaData = await res.json();
    if (_gicaData.error) throw new Error(_gicaData.error);
    _gicaLoaded = true;

    // Seed KPI targets from kpi_g1/kpi_g2/... (per-BU defaults from Excel) — the
    // generic "all" fallback stays at 80 unless a level has no BU-specific value.
    GICA_LEVEL_ORDER.forEach(lv => { _gicaKpiTargets[lv] = { all: 80 }; });
    Object.entries(_gicaData.kpiDefaults || {}).forEach(([bu, levels]) => {
      Object.entries(levels || {}).forEach(([lv, pct]) => {
        if (!_gicaKpiTargets[lv]) _gicaKpiTargets[lv] = { all: 80 };
        _gicaKpiTargets[lv][bu] = pct;
      });
    });

    if (loadingEl) loadingEl.classList.add('hidden');
    if (dashEl)    dashEl.classList.remove('hidden');
    requestAnimationFrame(syncGicaSubtabTop);
    // Wire sub-tabs (Performance / Assessment Schedule / Employee List)
    dashEl.querySelectorAll('.gica-subtab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        dashEl.querySelectorAll('.gica-subtab-btn').forEach(b => b.classList.toggle('gica-subtab-btn--active', b === btn));
        const subtab     = btn.dataset.subtab;
        const perfPanel  = $('gica-perf-panel');
        const schedPanel = $('gica-sched-panel');
        const empPanel   = $('gica-emplist-panel');
        if (perfPanel)  perfPanel.classList.toggle('hidden',  subtab !== 'performance');
        if (schedPanel) schedPanel.classList.toggle('hidden', subtab !== 'assessment-schedule');
        if (empPanel)   empPanel.classList.toggle('hidden',   subtab !== 'employee-list');
        if (subtab === 'assessment-schedule') {
          // Schedule canvas needs DOM visibility for Chart.js to size correctly.
          if (!_gicaScheduleRendered) { renderGicaSchedule(); _gicaScheduleRendered = true; }
          else if (_gicaSchedTimelineChart) _gicaSchedTimelineChart.resize();
        } else if (subtab === 'employee-list') {
          if (!_gicaEmpListRendered) { renderGicaTable(); _wireGicaControls(); _gicaEmpListRendered = true; }
        }
      });
    });

    // Month-dots → attempt-history modal: shared across every table that uses
    // _gicaEmpTableHtml (Employee List, BU cohort, Calendar drill, Schedule drill),
    // so wire it once via delegation instead of per-table.
    dashEl.addEventListener('click', e => {
      const dotsEl = e.target.closest('.gica-month-dots[data-empid]');
      if (dotsEl) _gicaShowAttemptDotsModal(dotsEl.dataset.empid);
    });
    const attemptDotsModal = $('gica-attempt-dots-modal');
    const closeAttemptDotsModal = () => attemptDotsModal && attemptDotsModal.classList.add('hidden');
    $('gica-attempt-dots-close')?.addEventListener('click', closeAttemptDotsModal);
    $('gica-attempt-dots-backdrop')?.addEventListener('click', closeAttemptDotsModal);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeAttemptDotsModal(); });

    // QE/Admin-only write UI on Employee List
    if (['qe_user', 'admin'].includes(currentRole)) {
      _wireGicaResultModal();
      _wireGicaCreateModal();
      $('gica-create-operator-btn')?.classList.remove('hidden');
    }

    renderGicaSummary();
  } catch (err) {
    if (loadingEl) loadingEl.classList.add('hidden');
    if (errorEl) {
      errorEl.innerHTML = `<p style="color:var(--danger);font-weight:600;">${escapeHtml(err.message)}</p>
        <button onclick="initGicaTab()" style="margin-top:8px;">ลองใหม่</button>`;
      errorEl.classList.remove('hidden');
    }
  }
}

// ── Summary: KPI cards + BU breakdown ─────────────────────────────────────────
// Functional core / imperative shell:
//   _computeGicaSummary → viewModel   (pure: data in → plain object out)
//   _gicaSummaryHtml    → html string (pure: viewModel in → string out; no DOM, no globals)
//   _mountGicaSummary   → DOM         (imperative shell: the only DOM touch)
//   renderGicaSummary   → orchestrator that wires the three together
function _computeGicaQuadrant(emps, groupId, buSet, deptSet) {
  const grp = GICA_QUAD_GROUPS.find(g => g.id === groupId) || GICA_QUAD_GROUPS[0];
  const xT  = grp.expM ? GICA_GRADE_THRESH[grp.expM] : null;
  const yT  = grp.expI ? GICA_GRADE_THRESH[grp.expI] : null;

  const jitter = (i, axis) => {
    const h = Math.sin(i * 127.1 + axis * 311.7) * 43758.5453;
    return (h - Math.floor(h) - 0.5) * 0.03;
  };

  const points = [];
  emps.forEach((e, i) => {
    if (!e.score1 && !e.score2) return;
    if (buSet.size   > 0 && !buSet.has(e.bu))         return;
    if (deptSet.size > 0 && !deptSet.has(e.deptname)) return;
    if (grp.levels && !grp.levels.includes(e.level)) return;
    const rx = e.score1 || 0, ry = e.score2 || 0;
    // Jitter is for plot position ONLY (so overlapping dots are visible) — pass/fail
    // quadrant must be decided from the raw, unjittered score or borderline scores
    // (e.g. right at the B/B threshold) can randomly land on the wrong side of the line.
    const x  = Math.max(0.0, Math.min(1.0, rx + jitter(i, 0)));
    const y  = Math.max(0.0, Math.min(1.0, ry + jitter(i, 1)));
    const quad = xT !== null
      ? (rx >= xT && ry >= yT ? 'I' : rx < xT && ry >= yT ? 'II' : rx >= xT ? 'III' : 'IV')
      : (e.passed === true ? 'pass' : e.passed === false ? 'fail' : 'na');
    points.push({ x, y, raw1: rx, raw2: ry, quad,
      name: e.name, bu: e.bu, level: e.level, grade1: e.grade1, grade2: e.grade2 });
  });

  const counts = {};
  points.forEach(p => { counts[p.quad] = (counts[p.quad] || 0) + 1; });
  return { points, xT, yT, counts, grp, total: points.length };
}

function _computeGicaSummary(emps, busRaw, kpiTargets = {}, freqTable = []) {
  const total = emps.length;
  const byGrade = { A: 0, B: 0, C: 0, D: 0 };
  // Grade distribution split by sub-test: Measurement = grade{i}-1, Inspection = grade{i}-2
  const byGradeMeasure = { A: 0, B: 0, C: 0, D: 0 };
  const byGradeInspect = { A: 0, B: 0, C: 0, D: 0 };
  emps.forEach(e => {
    if (byGrade[e.grade] != null) byGrade[e.grade]++;
    if (byGradeMeasure[e.grade1] != null) byGradeMeasure[e.grade1]++;
    if (byGradeInspect[e.grade2] != null) byGradeInspect[e.grade2]++;
  });
  const _sum = o => o.A + o.B + o.C + o.D;

  const totMeasure = _sum(byGradeMeasure), totInspect = _sum(byGradeInspect);
  const avgScore   = total ? emps.reduce((s, e) => s + (e.score  || 0), 0) / total : 0;
  const avgMeasure = total ? emps.reduce((s, e) => s + (e.score1 || 0), 0) / total : 0;
  const avgInspect = total ? emps.reduce((s, e) => s + (e.score2 || 0), 0) / total : 0;

  const bus = sortBus(busRaw);
  const retestBuRows = bus.map(bu => ({
    bu,
    n: emps.filter(e => e.bu === bu && e.passed === false).length,
  }));

  const buCards = BU_ORDER.map(bu => {
    const inBu = emps.filter(e => e.bu === bu);
    if (!inBu.length) return { bu, empty: true };
    const cnt         = { A: 0, B: 0, C: 0, D: 0 };
    const cntMeasure  = { A: 0, B: 0, C: 0, D: 0 };
    const cntInspect  = { A: 0, B: 0, C: 0, D: 0 };
    inBu.forEach(e => {
      if (cnt[e.grade]         != null) cnt[e.grade]++;
      if (cntMeasure[e.grade1] != null) cntMeasure[e.grade1]++;
      if (cntInspect[e.grade2] != null) cntInspect[e.grade2]++;
    });
    const avg        = inBu.reduce((s, e) => s + (e.score  || 0), 0) / inBu.length;
    const avgMeasure = inBu.reduce((s, e) => s + (e.score1 || 0), 0) / inBu.length;
    const avgInspect = inBu.reduce((s, e) => s + (e.score2 || 0), 0) / inBu.length;
    const totM = _sum(cntMeasure), totI = _sum(cntInspect);
    const deptMap = {}, levelMap = {};
    inBu.forEach(e => {
      if (e.deptname) deptMap[e.deptname] = (deptMap[e.deptname] || 0) + 1;
      if (e.level)    levelMap[e.level]    = (levelMap[e.level]    || 0) + 1;
    });
    const deptRows  = Object.entries(deptMap).sort((a, b) => a[0].localeCompare(b[0]));
    const levelRows = Object.entries(levelMap).sort((a, b) => {
      const ia = GICA_LEVEL_ORDER.indexOf(a[0]), ib = GICA_LEVEL_ORDER.indexOf(b[0]);
      if (ia !== -1 && ib !== -1) return ia - ib;
      if (ia !== -1) return -1;
      if (ib !== -1) return  1;
      return a[0].localeCompare(b[0]);
    });
    const passN = inBu.filter(e => e.passed === true).length;
    const failN = inBu.filter(e => e.passed === false).length;
    const untestedN = inBu.length - passN - failN;
    return {
      bu, empty: false, count: inBu.length, cnt,
      passN, failN, untestedN,
      avgPct: Math.round(avg * 100), avgGrade: _gicaScoreToGrade(avg),
      aTargetPct: Math.min(100, Math.round(cnt.A / (inBu.length * 0.8) * 100)),
      cntMeasure, totMeasureBu: totM,
      avgMeasurePct: Math.round(avgMeasure * 100), avgMeasureGrade: _gicaScoreToGrade(avgMeasure),
      aMeasureBuPct: totM ? Math.round(cntMeasure.A / totM * 100) : 0,
      cntInspect, totInspectBu: totI,
      avgInspectPct: Math.round(avgInspect * 100), avgInspectGrade: _gicaScoreToGrade(avgInspect),
      aInspectBuPct: totI ? Math.round(cntInspect.A / totI * 100) : 0,
      deptRows, levelRows,
    };
  });

  // Expectation matrix: BU × Level — cell aggregates pass% + avg grade vs expectation
  const _avgGrade = arr => {
    if (!arr.length) return null;
    const ranks = arr.map(g => GICA_GRADE_RANK[g] || 0).filter(r => r > 0);
    if (!ranks.length) return null;
    const avg = ranks.reduce((s, r) => s + r, 0) / ranks.length;
    return Object.keys(GICA_GRADE_RANK).reduce((best, g) =>
      Math.abs(GICA_GRADE_RANK[g] - avg) < Math.abs(GICA_GRADE_RANK[best] - avg) ? g : best, 'D');
  };
  const _mode = arr => {
    const cnt = {};
    arr.forEach(v => { if (v) cnt[v] = (cnt[v] || 0) + 1; });
    let best = '', max = 0;
    Object.entries(cnt).forEach(([k, v]) => { if (v > max) { best = k; max = v; } });
    return best;
  };
  const expMatrix = GICA_LEVEL_ORDER
    .filter(lv => emps.some(e => e.level === lv))
    .map(lv => {
      const atLevel = emps.filter(e => e.level === lv);
      const expM = _mode(atLevel.map(e => e.exp1));
      const expI = _mode(atLevel.map(e => e.exp2));
      const cells = {};
      BU_ORDER.forEach(bu => {
        const cell = atLevel.filter(e => e.bu === bu);
        if (!cell.length) { cells[bu] = { empty: true }; return; }
        const passBoth = cell.filter(e => e.passed === true).length;
        const passMcnt = cell.filter(e =>
          e.exp1 && e.grade1 && (GICA_GRADE_RANK[e.grade1] || 0) >= (GICA_GRADE_RANK[e.exp1] || 0)).length;
        const passIcnt = cell.filter(e =>
          e.exp2 && e.grade2 && (GICA_GRADE_RANK[e.grade2] || 0) >= (GICA_GRADE_RANK[e.exp2] || 0)).length;
        const avgM = _avgGrade(cell.map(e => e.grade1));
        const avgI = _avgGrade(cell.map(e => e.grade2));
        cells[bu] = {
          empty: false, count: cell.length,
          avgM, avgI,
          passBothCount: passBoth,
          passBothPct: Math.round(passBoth / cell.length * 100),
          passMPct: Math.round(passMcnt / cell.length * 100),
          passIPct: Math.round(passIcnt / cell.length * 100),
          passOkM: avgM && expM && (GICA_GRADE_RANK[avgM] || 0) >= (GICA_GRADE_RANK[expM] || 0),
          passOkI: avgI && expI && (GICA_GRADE_RANK[avgI] || 0) >= (GICA_GRADE_RANK[expI] || 0),
        };
      });
      return { level: lv, expM, expI, cells };
    });

  const _cellForGroup = (group, expM, expI) => {
    const cells = {};
    BU_ORDER.forEach(bu => {
      const cell = group.filter(e => e.bu === bu);
      if (!cell.length) { cells[bu] = { empty: true }; return; }
      const passBoth = cell.filter(e => e.passed === true).length;
      const passMcnt = cell.filter(e =>
        e.exp1 && e.grade1 && (GICA_GRADE_RANK[e.grade1] || 0) >= (GICA_GRADE_RANK[e.exp1] || 0)).length;
      const passIcnt = cell.filter(e =>
        e.exp2 && e.grade2 && (GICA_GRADE_RANK[e.grade2] || 0) >= (GICA_GRADE_RANK[e.exp2] || 0)).length;
      const avgM = _avgGrade(cell.map(e => e.grade1));
      const avgI = _avgGrade(cell.map(e => e.grade2));
      cells[bu] = {
        empty: false, count: cell.length,
        avgM, avgI,
        passBothCount: passBoth,
        passBothPct: Math.round(passBoth / cell.length * 100),
        passMPct: Math.round(passMcnt / cell.length * 100),
        passIPct: Math.round(passIcnt / cell.length * 100),
        passOkM: avgM && expM && (GICA_GRADE_RANK[avgM] || 0) >= (GICA_GRADE_RANK[expM] || 0),
        passOkI: avgI && expI && (GICA_GRADE_RANK[avgI] || 0) >= (GICA_GRADE_RANK[expI] || 0),
      };
    });
    return cells;
  };
  const _aggForGroup = group => {
    const cells = {};
    BU_ORDER.forEach(bu => {
      const cell = group.filter(e => e.bu === bu);
      if (!cell.length) { cells[bu] = { empty: true }; return; }
      const passBoth = cell.filter(e => e.passed === true).length;
      cells[bu] = { empty: false, count: cell.length, passBothCount: passBoth,
        passBothPct: Math.round(passBoth / cell.length * 100) };
    });
    return cells;
  };

  const depts = [...new Set(emps.map(e => e.deptname).filter(Boolean))].sort();
  const expMatrixDept = depts.map(dept => {
    const atDept = emps.filter(e => e.deptname === dept);
    const levelRows = GICA_LEVEL_ORDER
      .filter(lv => atDept.some(e => e.level === lv))
      .map(lv => {
        const atLevel = atDept.filter(e => e.level === lv);
        const expM = _mode(atLevel.map(e => e.exp1));
        const expI = _mode(atLevel.map(e => e.exp2));
        return { level: lv, expM, expI, cells: _cellForGroup(atLevel, expM, expI) };
      });
    return { dept, deptAgg: _aggForGroup(atDept), levelRows };
  });

  const GICA_TREND_MAX = 12;
  const trendByBu = {};
  BU_ORDER.forEach(bu => {
    const inBu = emps.filter(e => e.bu === bu);
    if (!inBu.length) { trendByBu[bu] = null; return; }
    const measAcc = Array.from({length: GICA_TREND_MAX}, () => ({ s: 0, n: 0 }));
    const inspAcc = Array.from({length: GICA_TREND_MAX}, () => ({ s: 0, n: 0 }));
    let testedCount = 0;
    // Carry-forward only goes as far as the BU's actual highest attempt count — if
    // nobody in the BU has tested past attempt 3, slots 4-12 must stay null (no data)
    // rather than flat-lining everyone's attempt-3 score out to slot 12.
    const maxLen = Math.min(GICA_TREND_MAX, inBu.reduce((m, e) => Math.max(m, (e.history || []).length), 0));
    inBu.forEach(e => {
      const hist = e.history || [];
      if (!hist.length) return; // never tested — no "latest" score to carry forward
      testedCount++;
      // Carry-forward: every attempt slot (up to maxLen) uses this person's LATEST
      // recorded score as of that point (their actual attempt k if they've taken it,
      // otherwise their most recent prior attempt) — same "always everyone's latest
      // data" philosophy as the row-2 front-face cards, instead of leaving slots blank
      // for people who simply haven't been re-tested yet.
      for (let k = 0; k < maxLen; k++) {
        const h = hist[Math.min(k, hist.length - 1)];
        if (h.score1 != null) { measAcc[k].s += h.score1; measAcc[k].n++; }
        if (h.score2 != null) { inspAcc[k].s += h.score2; inspAcc[k].n++; }
      }
    });
    // Divide by the count of people who have ever tested at least once — not the BU's
    // full headcount (people with zero attempts have no "latest" score to contribute).
    trendByBu[bu] = {
      meas: measAcc.map(x => x.n ? Math.round(x.s / testedCount * 100) : null),
      insp: inspAcc.map(x => x.n ? Math.round(x.s / testedCount * 100) : null),
    };
  });

  return {
    total, byGrade,
    byGradeMeasure, byGradeInspect, totMeasure, totInspect,
    aMeasure: byGradeMeasure.A,
    aInspect: byGradeInspect.A,
    aMeasurePct: totMeasure ? Math.round(byGradeMeasure.A / totMeasure * 100) : 0,
    aInspectPct: totInspect ? Math.round(byGradeInspect.A / totInspect * 100) : 0,
    avgPct:        Math.round(avgScore * 100),
    avgGrade:      _gicaScoreToGrade(avgScore),
    avgMeasurePct: Math.round(avgMeasure * 100),
    avgInspectPct: Math.round(avgInspect * 100),
    totalPass:     emps.filter(e => e.passed === true).length,
    totalFail:     emps.filter(e => e.passed === false).length,
    totalAwaiting: emps.filter(e => e.passed !== true && e.passed !== false).length,
    retestBuRows, buCards,
    expMatrix, expMatrixDept,
    expMatrixBus:   BU_ORDER,
    expMatrixDepts: [...new Set(emps.map(e => e.deptname).filter(Boolean))].sort(),
    kpiTargets,
    trendByBu,
    freqTable,
  };
}

function _gicaSummaryHtml(vm) {
  const avgCounts     = Object.fromEntries(GICA_GRADES.map(g => [g, Math.round((vm.byGradeMeasure[g] + vm.byGradeInspect[g]) / 2)]));
  const avgTot        = Math.round((vm.totMeasure + vm.totInspect) / 2);
  const avgOverallPct = Math.round(((vm.avgMeasurePct || 0) + (vm.avgInspectPct || 0)) / 2);
  const miniBar = rows => {
    const mx = Math.max(...rows.map(r => r.n), 1);
    return rows.map(r => `
      <div class="mini-bar__row">
        <span class="mini-bar__bu">${escapeHtml(r.bu)}</span>
        <div class="mini-bar__track">
          <div class="mini-bar__fill" style="width:${Math.round(r.n / mx * 100)}%;background:${GICA_BU_COLORS[r.bu] || '#6b7280'};"></div>
        </div>
        <span class="mini-bar__count">${r.n}</span>
      </div>`).join('');
  };
  // Grade-distribution donut (SVG, theme-aware via CSS vars — no Chart.js lifecycle)
  const donut = (counts, tot) => {
    const R = 40, sw = 20, CIRC = 2 * Math.PI * R, gap = tot ? 1.5 : 0;
    let acc = 0;
    const ring = GICA_GRADES.map(g => {
      const v = counts[g] || 0;
      if (!v || !tot) return '';
      const len  = v / tot * CIRC;
      const dash = Math.max(len - gap, 0.5);
      const seg  = `<circle cx="50" cy="50" r="${R}" fill="none" stroke="${GICA_GRADE_COLORS[g]}" stroke-width="${sw}" stroke-dasharray="${dash.toFixed(2)} ${(CIRC - dash).toFixed(2)}" stroke-dashoffset="${(-acc).toFixed(2)}" transform="rotate(-90 50 50)"></circle>`;
      acc += len;
      return seg;
    }).join('');
    return `
      <div class="donut-wrap">
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="${R}" fill="none" stroke="var(--border-light)" stroke-width="${sw}"></circle>
          ${ring}
        </svg>
      </div>`;
  };
  // Donut with callout leader lines — grade count + pct labeled outside the ring + avg gauge
  const donutLabeled = (counts, tot, avgPct) => {
    const CX = 145, CY = 102, R = 50, sw = 20; 
    const CIRC = 2 * Math.PI * R, outerR = R + sw / 2;
    const gap = tot ? 1.2 : 0;
    let acc = 0;
    const segs = [], lines = [];
    GICA_GRADES.forEach(g => {
      const v = counts[g] || 0;
      if (!tot || !v) return;
      const len  = v / tot * CIRC;
      const dash = Math.max(len - gap, 0.5);
      segs.push(`<circle cx="${CX}" cy="${CY}" r="${R}" fill="none" stroke="${GICA_GRADE_COLORS[g]}" stroke-width="${sw}" stroke-dasharray="${dash.toFixed(2)} ${(CIRC - dash).toFixed(2)}" stroke-dashoffset="${(-acc).toFixed(2)}" transform="rotate(-90 ${CX} ${CY})"></circle>`);
      const mid = -Math.PI / 2 + (acc + len / 2) / CIRC * 2 * Math.PI;
      const mx = CX + outerR * Math.cos(mid),        my = CY + outerR * Math.sin(mid);
      const ex = CX + (outerR + 12) * Math.cos(mid), ey = CY + (outerR + 12) * Math.sin(mid);
      const isRight = ex >= CX;
      const hx = ex + (isRight ? 18 : -18), hy = ey;
      const tx = hx + (isRight ? 2 : -2), anchor = isRight ? 'start' : 'end';
      const pct = Math.round(v / tot * 100);
      lines.push(`
        <line x1="${mx.toFixed(1)}" y1="${my.toFixed(1)}" x2="${ex.toFixed(1)}" y2="${ey.toFixed(1)}" stroke="${GICA_GRADE_COLORS[g]}" stroke-width="1.2" stroke-linecap="round"></line>
        <line x1="${ex.toFixed(1)}" y1="${ey.toFixed(1)}" x2="${hx.toFixed(1)}" y2="${hy.toFixed(1)}" stroke="${GICA_GRADE_COLORS[g]}" stroke-width="1.2" stroke-linecap="round"></line>
        <circle cx="${hx.toFixed(1)}" cy="${hy.toFixed(1)}" r="1.5" fill="${GICA_GRADE_COLORS[g]}"></circle>
        <text x="${tx.toFixed(1)}" y="${(hy + 1).toFixed(1)}" text-anchor="${anchor}" font-size="9.5" font-weight="600" fill="var(--text)">Grade ${g}: ${v}</text>
        <text x="${tx.toFixed(1)}" y="${(hy + 9.5).toFixed(1)}" text-anchor="${anchor}" font-size="8.5" fill="var(--text-muted)">(${pct}%)</text>`);
      acc += len;
    });
    const ap = avgPct || 0;
    const gc = GICA_GRADE_COLORS[_gicaScoreToGrade(ap / 100)] || '#6b7280';
    return `
      <svg viewBox="0 0 300 205" width="100%">
        <circle cx="${CX}" cy="${CY}" r="${R}" fill="none" stroke="var(--border-light)" stroke-width="${sw}"></circle>
        ${segs.join('')}
        ${lines.join('')}
        <text x="${CX}" y="${CY + 8}" text-anchor="middle" font-size="22" font-weight="800" fill="${gc}">${ap}%</text>
        <text x="${CX}" y="${CY + 20}" text-anchor="middle" font-size="8.5" fill="var(--text-muted)" letter-spacing="0.5">Avg. Score</text>
      </svg>`;
  };
  const legend = cnt => `
    <div class="donut-legend">
      ${GICA_GRADES.map(g => `
        <div class="donut-legend__row">
          <span class="donut-legend__dot" style="background:${GICA_GRADE_COLORS[g]};"></span>
          <span class="u-muted donut-legend__grade">Grade ${g}</span>
          <span class="donut-legend__count">${cnt[g]}</span>
        </div>`).join('')}
    </div>`;

  const donutLabeledSm = (counts, tot, avgPct) => {
    const CX = 125, CY = 88, R = 43, sw = 20;
    const CIRC = 2 * Math.PI * R, outerR = R + sw / 2;
    const gap = tot ? 1.0 : 0;
    let acc = 0;
    const segs = [], lines = [];
    GICA_GRADES.forEach(g => {
      const v = counts[g] || 0;
      if (!tot || !v) return;
      const len  = v / tot * CIRC;
      const dash = Math.max(len - gap, 0.5);
      segs.push(`<circle cx="${CX}" cy="${CY}" r="${R}" fill="none" stroke="${GICA_GRADE_COLORS[g]}" stroke-width="${sw}" stroke-dasharray="${dash.toFixed(2)} ${(CIRC - dash).toFixed(2)}" stroke-dashoffset="${(-acc).toFixed(2)}" transform="rotate(-90 ${CX} ${CY})"></circle>`);
      const mid = -Math.PI / 2 + (acc + len / 2) / CIRC * 2 * Math.PI;
      const mx = CX + outerR * Math.cos(mid),       my = CY + outerR * Math.sin(mid);
      const ex = CX + (outerR + 7.5) * Math.cos(mid), ey = CY + (outerR + 7.5) * Math.sin(mid);
      const isRight = ex >= CX;
      const hx = ex + (isRight ? 13 : -13), hy = ey;
      const tx = hx + (isRight ? 2 : -2), anchor = isRight ? 'start' : 'end';
      const pct = Math.round(v / tot * 100);
      lines.push(`
        <line x1="${mx.toFixed(1)}" y1="${my.toFixed(1)}" x2="${ex.toFixed(1)}" y2="${ey.toFixed(1)}" stroke="${GICA_GRADE_COLORS[g]}" stroke-width="1.2" stroke-linecap="round"></line>
        <line x1="${ex.toFixed(1)}" y1="${ey.toFixed(1)}" x2="${hx.toFixed(1)}" y2="${hy.toFixed(1)}" stroke="${GICA_GRADE_COLORS[g]}" stroke-width="1.2" stroke-linecap="round"></line>
        <circle cx="${hx.toFixed(1)}" cy="${hy.toFixed(1)}" r="1.5" fill="${GICA_GRADE_COLORS[g]}"></circle>
        <text x="${tx.toFixed(1)}" y="${(hy + 1).toFixed(1)}" text-anchor="${anchor}" font-size="9" font-weight="600" fill="var(--text)">Grade ${g}: ${v}</text>
        <text x="${tx.toFixed(1)}" y="${(hy + 12).toFixed(1)}" text-anchor="${anchor}" font-size="8.5" fill="var(--text-muted)">(${pct}%)</text>`);
      acc += len;
    });
    const ap = avgPct || 0;
    const gc = GICA_GRADE_COLORS[_gicaScoreToGrade(ap / 100)] || '#6b7280';
    return `
      <svg viewBox="0 0 255 172" width="100%">
        <circle cx="${CX}" cy="${CY}" r="${R}" fill="none" stroke="var(--border-light)" stroke-width="${sw}"></circle>
        ${segs.join('')}
        ${lines.join('')}
        <text x="${CX}" y="${CY + 6}" text-anchor="middle" font-size="20" font-weight="800" fill="${gc}">${ap}%</text>
        <text x="${CX}" y="${CY + 20}" text-anchor="middle" font-size="9" fill="var(--text-muted)" letter-spacing="0.5">Avg. Score</text>
      </svg>`;
  };

  const buBarChart = buCards => {
    if (!buCards.length) return '';
    const active = buCards.filter(c => !c.empty);
    const maxN = Math.max(...active.map(c => c.count), 1);
    const W = 220, CH = 70, PAD = 8, LH = 16, TPAD = 14;
    const n = buCards.length;
    const slot = (W - PAD * 2) / n;
    const bw = Math.round(slot * 0.62);
    const bo = (slot - bw) / 2;
    const bars = buCards.map((c, i) => {
      const x  = Math.round(PAD + i * slot + bo);
      const cx = Math.round(x + bw / 2);
      if (c.empty) {
        return `<text x="${cx}" y="${TPAD + CH - 4}" text-anchor="middle" font-size="6.5" fill="var(--text-muted)">no data</text>
        <text x="${cx}" y="${TPAD + CH + LH - 2}" text-anchor="middle" font-size="7.5" style="fill:var(--text-muted);">${escapeHtml(c.bu)}</text>`;
      }
      const totalH = Math.max(Math.round(c.count / maxN * CH), 3);
      const scale  = c.count ? totalH / c.count : 0;
      const passH  = c.passN > 0 ? Math.max(Math.round(c.passN * scale), 2) : 0;
      const failH  = c.failN > 0 ? Math.max(Math.round(c.failN * scale), 2) : 0;
      const untestedH = Math.max(totalH - passH - failH, 0);
      const color = GICA_BU_COLORS[c.bu] || '#6b7280';
      const topY = TPAD + CH - totalH;
      const passY      = TPAD + CH - passH;
      const failY      = passY - failH;
      const untestedY  = failY - untestedH;
      const clipId = `gica-bu-bar-clip-${c.bu}`;
      return `<g>
        <title>${escapeHtml(c.bu)} — Pass: ${c.passN}, Fail: ${c.failN}, Not tested: ${c.untestedN} (Total ${c.count})</title>
        <defs><clipPath id="${clipId}"><rect x="${x}" y="${topY}" width="${bw}" height="${totalH}" rx="3"></rect></clipPath></defs>
        <g clip-path="url(#${clipId})">
          ${untestedH > 0 ? `<rect x="${x}" y="${untestedY}" width="${bw}" height="${untestedH}" fill="var(--border-light)"></rect>` : ''}
          ${failH > 0 ? `<rect x="${x}" y="${failY}" width="${bw}" height="${failH}" fill="${color}" opacity="0.25"></rect>` : ''}
          ${passH > 0 ? `<rect x="${x}" y="${passY}" width="${bw}" height="${passH}" fill="${color}"></rect>` : ''}
        </g>
        <text x="${cx}" y="${topY - 4}" text-anchor="middle" font-size="8" font-weight="700" fill="${color}">${c.count}</text>
        <text x="${cx}" y="${TPAD + CH + LH - 2}" text-anchor="middle" font-size="7.5" style="fill:var(--text-muted);">${escapeHtml(c.bu)}</text>
      </g>`;
    }).join('');
    return `<svg viewBox="0 0 ${W} ${TPAD + CH + LH}" width="100%" style="display:block;margin-top:10px;overflow:visible;">
      <line x1="${PAD}" y1="${TPAD + CH}" x2="${W - PAD}" y2="${TPAD + CH}" stroke="var(--border-light)" stroke-width="1"></line>
      ${bars}
    </svg>`;
  };

  const kpi = `
    <div class="stat-grid stat-grid--4">

      <!-- Total employees + Need retest -->
      <div class="stat-card">
        <div class="u-between">
          <div>
            <div class="stat-card__label">Total employees</div>
            <div class="stat-card__value">${vm.total}</div>
          </div>
          <div style="text-align:right;">
            
            <div class="u-between" style="width:96px;margin-left:auto;font-size:0.74rem;">
              <span class="u-muted">Pass</span><strong style="color:#16a34a;">${vm.totalPass}</strong>
            </div>
            <div class="u-between" style="width:96px;margin-left:auto;font-size:0.74rem;">
              <span class="u-muted">Fail</span><strong style="color:#dc2626;">${vm.totalFail}</strong>
            </div>
            <div class="u-between" style="width:96px;margin-left:auto;font-size:0.74rem;">
              <span class="u-muted">Pending</span><strong class="u-muted">${vm.totalAwaiting}</strong>
            </div>
          </div>
        </div>
        ${buBarChart(vm.buCards)}
      </div>

      <!-- Overall Score (Measurement) -->
      <div class="stat-card">
        <div class="stat-card__label">Overall Score (Measurement)</div>
        ${donutLabeled(vm.byGradeMeasure, vm.totMeasure, vm.avgMeasurePct)}
      </div>

      <!-- Overall Score (Inspection) -->
      <div class="stat-card">
        <div class="stat-card__label">Overall Score (Inspection)</div>
        ${donutLabeled(vm.byGradeInspect, vm.totInspect, vm.avgInspectPct)}
      </div>

      <!-- Avg Score (flip: front = donut, back = criteria) -->
      <div class="flip-card-wrap" id="gica-avg-flip">
        <div class="flip-card-inner">
          <div class="flip-card-front stat-card">
            <div class="u-between">
              <div class="stat-card__label">Overall Average Score</div>
              <div class="flip-indicator" style="margin-top:0;">↩ Grading criteria</div>
            </div>
            ${donutLabeled(avgCounts, avgTot, avgOverallPct)}
          </div>
          <div class="flip-card-back stat-card">
            <div class="stat-card__label">Criteria</div>
            <div class="criteria-list">
              <span class="u-muted criteria-list__head">Grading Criteria</span>
              ${[{g:'A',r:'85 – 100%'},{g:'B',r:'65 – 84%'},{g:'C',r:'50 – 64%'},{g:'D',r:'≤ 49%'}]
                .map(c => `<div class="criteria-list__row">
                  <span class="donut-legend__dot" style="background:${GICA_GRADE_COLORS[c.g]};"></span>
                  <span class="u-muted">Grade ${c.g}</span>
                  <span class="criteria-list__range">${c.r}</span>
                </div>`).join('')}
            </div>
            <div class="flip-indicator">↩ Back</div>
          </div>
        </div>
      </div>

    </div>`;

  const faceHalfHtml = (label, tot, visualHtml) => `
    <div class="flip-card-half">
      <div class="u-between">
        <div class="flip-card-type">${label}</div>
        ${tot != null ? `<span class="u-muted" style="font-size:0.7rem;font-weight:600;">${tot} People</span>` : ''}
      </div>
      ${visualHtml}
    </div>`;

  const dualFaceHtml = (isFront, c, buColor, topHtml, bottomHtml) => `
    <div class="${isFront ? 'flip-card-front' : 'flip-card-back'} stat-card flip-card-face--dual" style="min-width:0;">
      <div class="bu-head">
        <span class="bu-name" style="color:${buColor};">${escapeHtml(c.bu)}</span>
      </div>
      ${faceHalfHtml('Score (Measurement)', isFront ? c.totMeasureBu : null, topHtml)}
      <div class="flip-card-divider"></div>
      ${faceHalfHtml('Score (Inspection)', null, bottomHtml)}
    </div>`;

  const renderFlipCard = c => {
    if (c.empty) return `<div class="stat-card stat-card--empty" style="min-width:0;">
      <div class="bu-name u-muted">${escapeHtml(c.bu)}</div>
      <div class="u-muted" style="font-size:0.75rem;margin-top:12px;">— no data —</div>
    </div>`;
    const buColor = GICA_BU_COLORS[c.bu] || 'var(--text)';
    const t = vm.trendByBu && vm.trendByBu[c.bu];
    const hasTrend = !!t;
    const trendWrap = id => hasTrend
      ? `<div class="gica-trend-canvas-wrap"><canvas id="${id}"></canvas></div>`
      : `<div class="u-muted" style="font-size:0.72rem;text-align:center;padding:30px 0;">ไม่มีข้อมูล trend</div>`;
    return `<div class="flip-card-wrap" data-bu="${escapeHtml(c.bu)}">
      <div class="flip-card-inner">
        ${dualFaceHtml(true,  c, buColor, donutLabeledSm(c.cntMeasure, c.totMeasureBu, c.avgMeasurePct), donutLabeledSm(c.cntInspect, c.totInspectBu, c.avgInspectPct))}
        ${dualFaceHtml(false, c, buColor, trendWrap(`gica-trend-meas-${escapeHtml(c.bu)}`), trendWrap(`gica-trend-insp-${escapeHtml(c.bu)}`))}
      </div>
    </div>`;
  };

  const buFlipCards = vm.buCards.map(renderFlipCard).join('');

  const passClass = (pct, kpiPct) =>
    kpiPct != null ? (pct >= kpiPct ? 'ok' : 'bad')
                   : (pct >= 80 ? 'ok' : pct >= 60 ? 'mid' : 'bad');
  const expBadge = _gicaExpBadge;

  const _mkExpCell = (c, rowAttr, kpiPct) => {
    if (!c || c.empty) return `<td class="exp-cell exp-cell--empty">—</td>`;
    const cls = passClass(c.passBothPct, kpiPct);
    return `<td class="exp-cell" ${rowAttr} title="คลิกดูรายชื่อ">
      <div class="exp-cell__top">
        <span class="exp-cell__count">${c.passBothCount}/${c.count} คน</span>
        <span class="exp-cell__pct pass-pct--${cls}">${c.passBothPct}%</span>
      </div>
      <div class="pbar pbar--6${kpiPct != null ? ' pbar--kpi' : ''}" style="margin:2px 0 0;">
        <div class="pbar__fill exp-pbar--${cls}" style="width:${c.passBothPct}%;"></div>
        ${kpiPct != null ? `<div class="pbar__kpi-marker" style="left:${kpiPct}%;"></div>` : ''}
      </div>
    </td>`;
  };

  const buThs = vm.expMatrixBus.map(bu =>
    `<th class="exp-th exp-th--bu" style="color:${GICA_BU_COLORS[bu] || 'var(--text)'};">${escapeHtml(bu)}</th>`).join('');

  const kpiPctFor = (level, bu) => {
    const t = vm.kpiTargets[level];
    return t ? (t[bu] ?? t.all ?? null) : null;
  };

  const matrixRows = vm.expMatrix.map(row => {
    const cells = vm.expMatrixBus.map(bu =>
      _mkExpCell(row.cells[bu], `data-level="${escapeHtml(row.level)}" data-bu="${escapeHtml(bu)}"`, kpiPctFor(row.level, bu))
    ).join('');
    return `<tr>
      <td class="exp-row__head"><div class="exp-row__level">${escapeHtml(row.level)}</div></td>
      <td class="exp-td--expect">${expBadge(row.expM)}</td>
      <td class="exp-td--expect exp-td--expect-last">${expBadge(row.expI)}</td>
      ${cells}
    </tr>`;
  }).join('');

  const matrixDeptRows = vm.expMatrixDept.map(({ dept, deptAgg, levelRows }, idx) => {
    const aggCells = vm.expMatrixBus.map(bu => {
      const c = deptAgg[bu];
      if (!c || c.empty) return `<td class="exp-cell exp-cell--empty exp-cell--dept-agg">—</td>`;
      const cls = passClass(c.passBothPct);
      return `<td class="exp-cell exp-cell--dept-agg" data-dept="${escapeHtml(dept)}" data-bu="${escapeHtml(bu)}" title="คลิกดูรายชื่อทั้งแผนก">
        <div class="exp-cell__top">
          <span class="exp-cell__count">${c.passBothCount}/${c.count} คน</span>
          <span class="exp-cell__pct pass-pct--${cls}">${c.passBothPct}%</span>
        </div>
        <div class="pbar pbar--6" style="margin:2px 0 0;">
          <div class="pbar__fill exp-pbar--${cls}" style="width:${c.passBothPct}%;"></div>
        </div>
      </td>`;
    }).join('');

    const subRows = levelRows.map(row => {
      const cells = vm.expMatrixBus.map(bu =>
        _mkExpCell(row.cells[bu], `data-dept="${escapeHtml(dept)}" data-level="${escapeHtml(row.level)}" data-bu="${escapeHtml(bu)}"`, kpiPctFor(row.level, bu))
      ).join('');
      return `<tr class="exp-level-sub-row">
        <td class="exp-row__head exp-row__sub"><div class="exp-row__level">${escapeHtml(row.level)}</div></td>
        <td class="exp-td--expect">${expBadge(row.expM)}</td>
        <td class="exp-td--expect exp-td--expect-last">${expBadge(row.expI)}</td>
        ${cells}
      </tr>`;
    }).join('');

    return `<tr class="exp-dept-head-row${idx > 0 ? ' exp-dept-head-row--sep' : ''}">
        <td class="exp-row__dept-head" colspan="3">${escapeHtml(dept)}</td>
        ${aggCells}
      </tr>${subRows}`;
  }).join('');

  // Table_freq reference modal: per (department, level, role) — how often someone is
  // tested and the minimum grade each sub-test must reach. Grouped by department for
  // readability, sorted by GICA_LEVEL_ORDER within each department.
  const freqModalBody = (() => {
    const rows = vm.freqTable || [];
    if (!rows.length) return `<p class="u-muted" style="text-align:center;padding:24px 0;">ไม่มีข้อมูล Table_freq</p>`;
    const byDept = {};
    rows.forEach(r => { (byDept[r.department || '—'] = byDept[r.department || '—'] || []).push(r); });
    const depts = Object.keys(byDept).sort((a, b) => a.localeCompare(b));
    const sortRows = list => list.slice().sort((a, b) => {
      const ia = GICA_LEVEL_ORDER.indexOf(a.level), ib = GICA_LEVEL_ORDER.indexOf(b.level);
      if (ia !== ib) return (ia === -1 ? 1 : ib === -1 ? -1 : ia - ib);
      return (a.role || '').localeCompare(b.role || '');
    });
    const expBadge = g => g
      ? `<span class="exp-badge exp-badge--${g}">${escapeHtml(g)}</span>`
      : '<span class="u-muted">—</span>';
    const cols = `
    <colgroup>
      <col style="width: 20%;"> <col style="width: 35%;"> <col style="width: 21%;"> <col style="width: 12%;"> <col style="width: 12%;"> </colgroup>
  `;

  return `
    <div class="gica-freq-table-wrap">
      <table class="gica-freq-table" style="table-layout: fixed; width: 100%; border-collapse: collapse;">
        ${cols}
        <thead><tr>
          <th>Dept / Level</th>
          <th>Role</th>
          <th style="text-align:center;">Frequency</th>
          <th style="text-align:center;" title="Measurement — Expected grade"><i class="ti ti-eye-search" aria-hidden="true"></i></th>
          <th style="text-align:center;" title="Inspection — Expected grade"><i class="ti ti-ruler-2" aria-hidden="true"></i></th>
        </tr></thead>
        <tbody>
          ${depts.map(dept => `
            <tr class="gica-freq-dept-row"><td colspan="5">${escapeHtml(dept)}</td></tr>
            ${sortRows(byDept[dept]).map(r => `
              <tr>
                <td style="overflow:hidden; white-space:nowrap; text-overflow:ellipsis;">${escapeHtml(r.level || '—')}</td>
                <td class="u-muted" style="overflow:hidden; white-space:nowrap; text-overflow:ellipsis;">${escapeHtml(r.role || '—')}</td>
                <td style="text-align:center; overflow:hidden; white-space:nowrap;">Every ${r.freqMonths != null ? `${r.freqMonths} mos` : '—'}</td>
                <td style="text-align:center;">${expBadge(r.expectation1)}</td>
                <td style="text-align:center;">${expBadge(r.expectation2)}</td>
              </tr>`).join('')}
          `).join('')}
        </tbody>
      </table>
    </div>`;
  })();

  const matrix = vm.expMatrix.length ? `
    <div class="card card--section gica-expect-section">
      <div class="chart-header">
        <div style="display:flex;align-items:center;gap:10px;margin-top:-16px;">
          <h3 style="margin:0; font-size:1rem; color:var(--text);">Expectation Matrix</h3>
          
        </div>
        <div class="exp-legend">
          <button id="gica-kpi-setup-btn" class="gica-kpi-setup-btn" title="กำหนด KPI target สำหรับแต่ละ Level">
            <i class="ti ti-target-arrow" aria-hidden="true"></i> KPI Setup
          </button>
          <button id="gica-freq-info-btn" class="gica-kpi-setup-btn" title="เกณฑ์ความถี่การประเมิน (Table_freq)">
            <i class="ti ti-file-text" aria-hidden="true"></i>
          </button>
          <span class="exp-legend__item"><span class="exp-legend__dot" style="background:#16a34a;"></span>KPI Achieved</span>
          <span class="exp-legend__item"><span class="exp-legend__dot" style="background:#dc2626;"></span>KPI Not Achieved</span>
        </div>
      </div>
      <div id="gica-matrix-tables">
        <div class="exp-matrix-front">
          <div class="exp-table-wrap">
            <table class="exp-table">
              <thead><tr>
                <th class="exp-th exp-th--level">Level</th>
                <th class="exp-th exp-th--expect" title="Measurement — เกรดที่คาดหวัง"><i class="ti ti-eye-search" aria-hidden="true"></i></th>
                <th class="exp-th exp-th--expect exp-th--expect-last" title="Inspection — เกรดที่คาดหวัง"><i class="ti ti-ruler-2" aria-hidden="true"></i></th>
                ${buThs}
              </tr></thead>
              <tbody>${matrixRows}</tbody>
            </table>
          </div>
        </div>
        <div class="exp-matrix-back hidden">
          <div class="exp-table-wrap">
            <table class="exp-table">
              <thead><tr>
                <th class="exp-th exp-th--level exp-th--dept">Department</th>
                <th class="exp-th exp-th--expect" title="Measurement — เกรดที่คาดหวัง"><i class="ti ti-eye-search" aria-hidden="true"></i></th>
                <th class="exp-th exp-th--expect exp-th--expect-last" title="Inspection — เกรดที่คาดหวัง"><i class="ti ti-ruler-2" aria-hidden="true"></i></th>
                ${buThs}
              </tr></thead>
              <tbody>${matrixDeptRows}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div id="gica-expect-modal" class="gica-modal hidden">
      <div class="gica-modal__backdrop" data-close="1"></div>
      <div class="gica-modal__panel">
        <div class="gica-modal__head">
          <h4 id="gica-expect-modal-title" style="margin:0;font-size:1rem;"></h4>
          <button class="gica-modal__close" data-close="1" aria-label="ปิด">✕</button>
        </div>
        <div id="gica-expect-modal-body" class="gica-modal__body"></div>
      </div>
    </div>
    <div id="gica-kpi-modal" class="gica-modal hidden">
      <div class="gica-modal__backdrop" id="gica-kpi-backdrop"></div>
      <div class="gica-modal__panel gica-kpi-modal__panel">
        <div class="gica-modal__head">
          <h4 style="margin:0;font-size:1rem;">KPI Setup</h4>
          <button class="gica-modal__close" id="gica-kpi-close" aria-label="ปิด">✕</button>
        </div>
        <div class="gica-kpi-modal__body">
          <p class="u-muted gica-kpi-modal__desc">Define KPI target (%) for each level </p>
          <div class="gica-kpi-bu-tabs">
            <button class="gica-kpi-bu-tab${_gicaKpiActiveBu === 'all' ? ' gica-kpi-bu-tab--active' : ''}" data-bu="all" type="button">All BU</button>
            ${BU_ORDER.map(bu => `<button class="gica-kpi-bu-tab${_gicaKpiActiveBu === bu ? ' gica-kpi-bu-tab--active' : ''}" data-bu="${escapeHtml(bu)}" type="button">${escapeHtml(bu)}</button>`).join('')}
          </div>
          <div class="gica-kpi-list" id="gica-kpi-list">
            ${_gicaKpiListHtml(_gicaKpiActiveBu)}
          </div>
        </div>
        <div class="gica-kpi-modal__footer">
          <button class="gica-kpi-btn gica-kpi-btn--cancel" id="gica-kpi-cancel">Cancel</button>
          <button class="gica-kpi-btn gica-kpi-btn--confirm" id="gica-kpi-confirm">Confirm</button>
        </div>
      </div>
    </div>
    <div id="gica-freq-modal" class="gica-modal hidden">
      <div class="gica-modal__backdrop" id="gica-freq-backdrop"></div>
      <div class="gica-modal__panel">
        <div class="gica-modal__head">
          <h4 style="margin:0;font-size:1rem;">Assessment Frequency &amp; Expectation</h4>
          <button class="gica-modal__close" id="gica-freq-close" aria-label="ปิด">✕</button>
        </div>
        <div class="gica-modal__body">${freqModalBody}</div>
      </div>
    </div>` : '';

  const quadSection = `
    <div class="card card--section" id="gica-quad-section">
      <div class="chart-header">
        <h3 style="margin:0;font-size:1rem;color:var(--text);">Quadrant Analysis</h3>
        <div style="display:flex;align-items:center;gap:6px;">
          <div class="quad-dropdown">
            <button class="quad-dd-btn" id="quad-bu-trigger"><span class="quad-dd-label">BU</span> ▾</button>
            <div class="quad-dd-panel" id="quad-bu-panel" hidden>
              <button class="quad-btn quad-btn--active" data-bu="all">All BU</button>
              ${vm.expMatrixBus.map(bu => `<button class="quad-btn" data-bu="${escapeHtml(bu)}">${escapeHtml(bu)}</button>`).join('')}
            </div>
          </div>
          <div class="quad-dropdown">
            <button class="quad-dd-btn" id="quad-dept-trigger"><span class="quad-dd-label">Department</span> ▾</button>
            <div class="quad-dd-panel" id="quad-dept-panel" hidden>
              <button class="quad-btn quad-btn--active" data-dept="all">All Departments</button>
              ${vm.expMatrixDepts.map(d => `<button class="quad-btn" data-dept="${escapeHtml(d)}">${escapeHtml(d)}</button>`).join('')}
            </div>
          </div>
        </div>
      </div>
      <div class="quad-grid">
        ${GICA_QUAD_GROUPS.map(g => `
          <div class="quad-card">
            <div class="quad-card__title">${escapeHtml(g.label)}</div>
            <div class="quad-card__sub">${expBadge(g.expM)}&nbsp;/&nbsp;${expBadge(g.expI)}</div>
            <div class="quad-chart-wrap"><canvas id="gica-quad-canvas-${g.id}"></canvas></div>
          </div>`
        ).join('')}
      </div>
    </div>`;

  return `${kpi}
    <div style="position:relative;">
      <div class="stat-grid stat-grid--6">${buFlipCards}</div>
      <button id="gica-flip-all" class="gica-flip-btn" data-flipped="0" aria-label="ดู Trend" title="ดู Trend">
        <span class="gica-flip-btn__icon" aria-hidden="true">↻</span>
      </button>
    </div>
    ${matrix}
    ${quadSection}`;
}

function _mountGicaQuadrant(container, emps) {
  const section = container.querySelector('#gica-quad-section');
  if (!section || typeof Chart === 'undefined') return;

  const QUAD_CFG = {
    I:   { bg: 'rgba(22,163,74,0.65)',  bd: '#15803d', desc: 'Pass Both'               },
    II:  { bg: 'rgba(245,158,11,0.65)', bd: '#b45309', desc: 'Meas. Fail / Insp. Pass' },
    III: { bg: 'rgba(99,102,241,0.65)', bd: '#4338ca', desc: 'Meas. Pass / Insp. Fail' },
    IV:  { bg: 'rgba(220,38,38,0.65)',  bd: '#b91c1c', desc: 'Fail Both'               },
  };
  const _charts  = {};
  const _buSet   = new Set();
  const _deptSet = new Set();

  const buildOne = grp => {
    const canvas = section.querySelector(`#gica-quad-canvas-${grp.id}`);
    if (!canvas) return;
    if (_charts[grp.id]) { _charts[grp.id].destroy(); delete _charts[grp.id]; }

    const vm = _computeGicaQuadrant(emps, grp.id, _buSet, _deptSet);
    const grouped = {};
    vm.points.forEach(p => { (grouped[p.quad] = grouped[p.quad] || []).push(p); });
    const datasets = ['I','III','II','IV'].filter(q => grouped[q]?.length).map(q => ({
      label: `${q} — ${QUAD_CFG[q].desc} (${vm.counts[q] || 0})`,
      data: grouped[q],
      backgroundColor: QUAD_CFG[q].bg,
      borderColor: QUAD_CFG[q].bd,
      borderWidth: 1,
      pointRadius: 4.5,
      pointHoverRadius: 7,
    }));

    const cs       = getComputedStyle(document.documentElement);
    const clrMuted = cs.getPropertyValue('--text-muted').trim() || '#6b6899';
    const clrGrid  = cs.getPropertyValue('--border').trim()     || '#d4d2e8';

    const quadLinesPlugin = {
      id: `gicaQL_${grp.id}`,
      afterDraw(chart) {
        const { ctx, chartArea: ca, scales } = chart;
        const xPx = scales.x.getPixelForValue(vm.xT);
        const yPx = scales.y.getPixelForValue(vm.yT);
        ctx.save();
        ctx.setLineDash([5, 4]);
        ctx.strokeStyle = 'rgba(107,114,128,0.5)';
        ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.moveTo(xPx, ca.top);  ctx.lineTo(xPx, ca.bottom); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(ca.left, yPx); ctx.lineTo(ca.right, yPx);  ctx.stroke();
        ctx.restore();
        ctx.save();
        const pad = 5;
        [
          { q:'I',   tx: ca.right-pad, ty: ca.top+pad,    ta:'right', tb:'top'    },
          { q:'II',  tx: ca.left+pad,  ty: ca.top+pad,    ta:'left',  tb:'top'    },
          { q:'IV',  tx: ca.left+pad,  ty: ca.bottom-pad, ta:'left',  tb:'bottom' },
          { q:'III', tx: ca.right-pad, ty: ca.bottom-pad, ta:'right', tb:'bottom' },
        ].forEach(({ q, tx, ty, ta, tb }) => {
          ctx.textAlign = ta; ctx.textBaseline = tb;
          ctx.fillStyle = QUAD_CFG[q].bd;
          const dy = tb === 'top' ? 11 : -11;
          ctx.font = '700 9px Inter,sans-serif';
          ctx.fillText(`${q}  (${vm.counts[q] || 0})`, tx, ty);
          ctx.font = '400 8px Inter,sans-serif';
          ctx.fillText(QUAD_CFG[q].desc, tx, ty + dy);
        });
        ctx.restore();
      }
    };

    _charts[grp.id] = new Chart(canvas, {
      type: 'scatter',
      data: { datasets },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            min: 0, max: 1.2,
            ticks: { color: clrMuted, font: { size: 9 }, callback: v => v <= 1.001 ? `${Math.round(v * 100)}%` : '', stepSize: 0.25 },
            grid:  { color: clrGrid + '44' },
          },
          y: {
            min: 0, max: 1.2,
            ticks: { color: clrMuted, font: { size: 9 }, callback: v => v <= 1.001 ? `${Math.round(v * 100)}%` : '', stepSize: 0.25 },
            grid:  { color: clrGrid + '44' },
          },
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              title: items => items[0]?.raw?.name || '—',
              label: item => {
                const d = item.raw;
                return [
                  `BU: ${d.bu}  ·  Level: ${d.level}`,
                  `M: ${Math.round((d.raw1 || 0) * 100)}%  (${d.grade1 || '—'})`,
                  `I: ${Math.round((d.raw2 || 0) * 100)}%  (${d.grade2 || '—'})`,
                ];
              }
            }
          }
        }
      },
      plugins: [quadLinesPlugin],
    });
  };

  const buildAll = () => GICA_QUAD_GROUPS.forEach(buildOne);

  const updateTrigger = (triggerId, set, defaultLabel) => {
    const btn = section.querySelector(`#${triggerId}`);
    if (!btn) return;
    const label = btn.querySelector('.quad-dd-label');
    if (!label) return;
    if (set.size === 0) {
      label.textContent = defaultLabel;
      btn.classList.remove('quad-dd-btn--active');
    } else {
      label.textContent = set.size <= 2 ? [...set].join(', ') : `${defaultLabel} (${set.size})`;
      btn.classList.add('quad-dd-btn--active');
    }
  };

  const wirePanelFilter = (panelId, dataKey, targetSet, triggerId, defaultLabel) => {
    const panel = section.querySelector(`#${panelId}`);
    if (!panel) return;
    panel.addEventListener('click', e => {
      const btn = e.target.closest(`.quad-btn[data-${dataKey}]`);
      if (!btn) return;
      const val = btn.dataset[dataKey];
      if (val === 'all') {
        targetSet.clear();
      } else {
        targetSet.has(val) ? targetSet.delete(val) : targetSet.add(val);
      }
      panel.querySelectorAll(`.quad-btn[data-${dataKey}]`).forEach(b => {
        const v = b.dataset[dataKey];
        b.classList.toggle('quad-btn--active', v === 'all' ? targetSet.size === 0 : targetSet.has(v));
      });
      updateTrigger(triggerId, targetSet, defaultLabel);
      buildAll();
    });
  };

  const togglePanel = (panelId, e) => {
    e.stopPropagation();
    const panel = section.querySelector(`#${panelId}`);
    const wasHidden = panel.hidden;
    section.querySelectorAll('.quad-dd-panel').forEach(p => { p.hidden = true; });
    panel.hidden = !wasHidden;
  };

  section.querySelector('#quad-bu-trigger')  ?.addEventListener('click', e => togglePanel('quad-bu-panel', e));
  section.querySelector('#quad-dept-trigger')?.addEventListener('click', e => togglePanel('quad-dept-panel', e));

  if (section._onDocClick) document.removeEventListener('click', section._onDocClick);
  section._onDocClick = () => section.querySelectorAll('.quad-dd-panel').forEach(p => { p.hidden = true; });
  document.addEventListener('click', section._onDocClick);

  wirePanelFilter('quad-bu-panel',   'bu',   _buSet,   'quad-bu-trigger',   'BU');
  wirePanelFilter('quad-dept-panel', 'dept', _deptSet, 'quad-dept-trigger', 'แผนก');

  buildAll();
}

function _mountGicaSummary(html, vm) {
  const container = $('gica-summary');
  if (!container) return;
  Object.values(_gicaTrendCharts).forEach(ch => { try { ch.destroy(); } catch (_) {} });
  for (const k in _gicaTrendCharts) delete _gicaTrendCharts[k];
  container.innerHTML = html;
  container.querySelectorAll('.flip-card-wrap[data-bu]').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('is-flipped');
    });
  });
  const wireFlipAll = (btnId, selector, labelA, labelB) => {
    const btn = container.querySelector(btnId);
    if (!btn) return;
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const flipping = btn.dataset.flipped !== '1';
      container.querySelectorAll(selector).forEach(c => {
        c.classList.toggle('is-flipped', flipping);
      });
      btn.dataset.flipped = flipping ? '1' : '0';
      const newLabel = flipping ? labelB : labelA;
      btn.title = newLabel;
      btn.setAttribute('aria-label', newLabel);
    });
  };
  wireFlipAll('#gica-flip-all', '.flip-card-wrap[data-bu]', 'ดู Trend', 'ดู Score');
  const avgFlip = container.querySelector('#gica-avg-flip');
  if (avgFlip) avgFlip.addEventListener('click', () => avgFlip.classList.toggle('is-flipped'));

  // Expectation matrix — Scale+Fade transition Level ↔ Department
  const matrixTables = container.querySelector('#gica-matrix-tables');
  const section      = container.querySelector('.gica-expect-section');
  if (matrixTables && section) {
    let _matrixAnimating = false;
    section.addEventListener('click', e => {
      if (_matrixAnimating) return;
      if (e.target.closest('.exp-cell[data-level], .exp-cell[data-dept]')) return;
      const front = matrixTables.querySelector('.exp-matrix-front');
      const back  = matrixTables.querySelector('.exp-matrix-back');
      if (!front || !back) return;
      _matrixAnimating = true;
      matrixTables.style.transition = 'opacity 0.18s ease, transform 0.18s ease';
      matrixTables.style.opacity   = '0';
      matrixTables.style.transform = 'scale(0.97)';
      setTimeout(() => {
        const showingFront = !front.classList.contains('hidden');
        front.classList.toggle('hidden',  showingFront);
        back.classList.toggle('hidden',  !showingFront);
        matrixTables.style.transition = 'opacity 0.22s ease, transform 0.22s ease';
        matrixTables.style.opacity   = '1';
        matrixTables.style.transform = '';
        setTimeout(() => { _matrixAnimating = false; }, 220);
      }, 180);
    });
  }

  // KPI Setup modal — one BU tab + "All BU" fallback tab; switching tabs swaps which
  // (level → target) bucket the sliders read/write, without losing unsaved edits.
  const kpiModal     = container.querySelector('#gica-kpi-modal');
  const closeKpiModal = () => kpiModal && kpiModal.classList.add('hidden');
  const _saveKpiSlidersToActiveBu = () => {
    kpiModal.querySelectorAll('.gica-kpi-slider').forEach(slider => {
      const lv  = slider.dataset.level;
      const val = Number(slider.value);
      if (!_gicaKpiTargets[lv]) _gicaKpiTargets[lv] = { all: 80 };
      if (_gicaKpiActiveBu === 'all') {
        // Setting "All BU" cascades to every BU — clear per-BU overrides so the
        // whole matrix follows this one value uniformly (frontend-only; backend
        // kpi_g1/kpi_g2/... Excel tables are not touched).
        const t = _gicaKpiTargets[lv];
        Object.keys(t).forEach(k => { if (k !== 'all') delete t[k]; });
        t.all = val;
      } else {
        _gicaKpiTargets[lv][_gicaKpiActiveBu] = val;
      }
    });
  };
  const _wireKpiSliders = () => {
    kpiModal.querySelectorAll('.gica-kpi-slider').forEach(slider => {
      const valEl = slider.closest('.gica-kpi-row')?.querySelector('.gica-kpi-row__val');
      slider.addEventListener('input', () => { if (valEl) valEl.textContent = slider.value + '%'; });
    });
  };
  if (kpiModal) {
    container.querySelector('#gica-kpi-setup-btn')?.addEventListener('click', e => {
      e.stopPropagation();
      kpiModal.classList.remove('hidden');
    });
    container.querySelector('#gica-kpi-close')?.addEventListener('click', closeKpiModal);
    container.querySelector('#gica-kpi-cancel')?.addEventListener('click', closeKpiModal);
    container.querySelector('#gica-kpi-backdrop')?.addEventListener('click', closeKpiModal);
    _wireKpiSliders();
    kpiModal.querySelectorAll('.gica-kpi-bu-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        if (tab.dataset.bu === _gicaKpiActiveBu) return;
        _saveKpiSlidersToActiveBu();
        _gicaKpiActiveBu = tab.dataset.bu;
        kpiModal.querySelectorAll('.gica-kpi-bu-tab').forEach(t => t.classList.toggle('gica-kpi-bu-tab--active', t === tab));
        const list = kpiModal.querySelector('#gica-kpi-list');
        if (list) {
          list.innerHTML = _gicaKpiListHtml(_gicaKpiActiveBu);
          _wireKpiSliders();
        }
      });
    });
    container.querySelector('#gica-kpi-confirm')?.addEventListener('click', () => {
      _saveKpiSlidersToActiveBu();
      closeKpiModal();
      renderGicaSummary();
    });
  }

  // Table_freq reference modal
  const freqModal = container.querySelector('#gica-freq-modal');
  const closeFreqModal = () => freqModal && freqModal.classList.add('hidden');
  if (freqModal) {
    container.querySelector('#gica-freq-info-btn')?.addEventListener('click', e => {
      e.stopPropagation();
      freqModal.classList.remove('hidden');
    });
    container.querySelector('#gica-freq-close')?.addEventListener('click', closeFreqModal);
    container.querySelector('#gica-freq-backdrop')?.addEventListener('click', closeFreqModal);
  }

  // Expectation matrix drill-down
  const modal     = container.querySelector('#gica-expect-modal');
  const modalTtl  = container.querySelector('#gica-expect-modal-title');
  const modalBody = container.querySelector('#gica-expect-modal-body');
  const closeModal = () => modal && modal.classList.add('hidden');
  if (modal) {
    modal.querySelectorAll('[data-close="1"]').forEach(el => el.addEventListener('click', closeModal));
  }
  if (window._gicaEscHandler) document.removeEventListener('keydown', window._gicaEscHandler);
  window._gicaEscHandler = e => { if (e.key === 'Escape') { closeModal(); closeKpiModal(); closeFreqModal(); } };
  document.addEventListener('keydown', window._gicaEscHandler);

  const _showModal = (list, title) => {
    if (modalTtl) modalTtl.textContent = title;
    if (modalBody) {
      modalBody.innerHTML = list.length ? `
        <table class="exp-modal-table">
          <thead>
            <tr>
              <th>Name</th>
              <th class="exp-modal-icon-th" title="Measurement"><i class="ti ti-eye-search" aria-hidden="true"></i></th>
              <th class="exp-modal-icon-th" title="Inspection"><i class="ti ti-ruler-2" aria-hidden="true"></i></th>
              <th>Department</th>
              <th>Position</th>
              <th>Level</th>

              <th class="exp-modal-icon-th" title="Measurement"><i class="ti ti-eye-search" aria-hidden="true"></i></th>
              <th class="exp-modal-icon-th" title="Inspection"><i class="ti ti-ruler-2" aria-hidden="true"></i></th>
              
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            ${list.map(e => {
              const okM = e.exp1 && e.grade1 && (GICA_GRADE_RANK[e.grade1] || 0) >= (GICA_GRADE_RANK[e.exp1] || 0);
              const okI = e.exp2 && e.grade2 && (GICA_GRADE_RANK[e.grade2] || 0) >= (GICA_GRADE_RANK[e.exp2] || 0);
              return `<tr>
                <td>${escapeHtml(e.name || '—')}</td>
                <td class="exp-modal-icon-td">${_gicaExpBadge(e.exp1)}</td>
                <td class="exp-modal-icon-td">${_gicaExpBadge(e.exp2)}</td>
                <td class="u-muted">${escapeHtml(e.deptname || '—')}</td>
                <td class="u-muted">${escapeHtml(e.position || '—')}</td>
                <td class="u-muted">${escapeHtml(e.level || '—')}</td>
                <td><span class="exp-badge ${okM ? 'exp-badge--pass' : 'exp-badge--fail'}">${e.grade1 || '—'}</span></td>
                <td><span class="exp-badge ${okI ? 'exp-badge--pass' : 'exp-badge--fail'}">${e.grade2 || '—'}</span></td>
                <td>${e.passed ? '<span class="exp-status exp-status--pass">Pass</span>' : '<span class="exp-status exp-status--fail">Fail</span>'}</td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>` : '<div class="u-muted" style="text-align:center;padding:24px;">— No data available —</div>';
    }
    if (modal) modal.classList.remove('hidden');
  };

  // Trend mini-charts — back face of each BU flip card: one chart for
  // Measurement, one for Inspection, stacked top/bottom.
  if (typeof Chart !== 'undefined' && vm.trendByBu) {
    const X_SLOTS = 12;
    const tLabels = Array.from({length: X_SLOTS}, (_, i) => `${i + 1}`);
    const tFont = { size: 9, family: 'Inter, system-ui, -apple-system, sans-serif' };
    const tOpts = {
      responsive: true,
      maintainAspectRatio: false,
      animation: false,
      scales: {
        y: {
          min: 0, max: 100,
          ticks: { stepSize: 20, callback: v => `${v}`, font: tFont, maxTicksLimit: 6, color: Chart.defaults.color },
          grid: { color: 'rgba(128,128,128,0.07)', drawBorder: false },
          border: { display: false },
        },
        x: {
          ticks: { font: tFont, color: Chart.defaults.color, maxRotation: 0 },
          grid: { display: false },
          border: { display: false },
        },
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          mode: 'index', intersect: false,
          callbacks: { label: ctx => `${ctx.dataset.label}: ${ctx.raw != null ? ctx.raw + '%' : '—'}` },
        },
      },
    };
    const buildTrendChart = (canvasId, label, data, color, dashed) => {
      const canvas = container.querySelector(`#${canvasId}`);
      if (!canvas) return null;
      return new Chart(canvas, {
        type: 'line',
        data: {
          labels: tLabels,
          datasets: [{
            label,
            data: data.slice(0, X_SLOTS),
            borderColor: color,
            backgroundColor: dashed ? 'transparent' : color + '18',
            fill: !dashed,
            borderDash: dashed ? [4, 3] : undefined,
            borderWidth: dashed ? 1.5 : 2,
            pointRadius: dashed ? 2 : 2.5,
            pointHoverRadius: dashed ? 3.5 : 4,
            tension: 0.4,
            spanGaps: true,
          }],
        },
        options: tOpts,
      });
    };
    BU_ORDER.forEach(bu => {
      const t = vm.trendByBu[bu];
      if (!t) return;
      const color = GICA_BU_COLORS[bu] || '#6b7280';
      const measCh = buildTrendChart(`gica-trend-meas-${bu}`, 'Measurement', t.meas, color, false);
      const inspCh = buildTrendChart(`gica-trend-insp-${bu}`, 'Inspection',  t.insp, color, true);
      if (measCh) _gicaTrendCharts[`${bu}-meas`] = measCh;
      if (inspCh) _gicaTrendCharts[`${bu}-insp`] = inspCh;
    });
  }

  const emps = _gicaData.employees || [];
  _mountGicaQuadrant(container, emps);
  // Front face: Level × BU
  container.querySelectorAll('.exp-cell[data-level]:not([data-dept])').forEach(td => {
    td.addEventListener('click', () => {
      const lv = td.dataset.level, bu = td.dataset.bu;
      const list = emps.filter(e => e.level === lv && e.bu === bu)
        .sort((a, b) => Number(b.passed) - Number(a.passed) || (a.name || '').localeCompare(b.name || ''));
      _showModal(list, `${bu} · ${lv} — ${list.length} คน`);
    });
  });
  // Back face dept agg row: Dept × BU (all levels in dept)
  container.querySelectorAll('.exp-cell[data-dept]:not([data-level])').forEach(td => {
    td.addEventListener('click', () => {
      const dept = td.dataset.dept, bu = td.dataset.bu;
      const list = emps.filter(e => e.deptname === dept && e.bu === bu)
        .sort((a, b) => Number(b.passed) - Number(a.passed) || (a.name || '').localeCompare(b.name || ''));
      _showModal(list, `${bu} · ${dept} — ${list.length} คน`);
    });
  });
  // Back face level sub-row: Dept+Level × BU
  container.querySelectorAll('.exp-cell[data-dept][data-level]').forEach(td => {
    td.addEventListener('click', () => {
      const dept = td.dataset.dept, lv = td.dataset.level, bu = td.dataset.bu;
      const list = emps.filter(e => e.deptname === dept && e.level === lv && e.bu === bu)
        .sort((a, b) => Number(b.passed) - Number(a.passed) || (a.name || '').localeCompare(b.name || ''));
      _showModal(list, `${bu} · ${dept} · ${lv} — ${list.length} คน`);
    });
  });
}

function renderGicaSummary() {
  const vm = _computeGicaSummary(_gicaData.employees || [], _gicaData.bus || [], _gicaKpiTargets, _gicaData.freqTable || []);
  _mountGicaSummary(_gicaSummaryHtml(vm), vm);
}

// ══════════════════════════════════════════════════════════════════════════════
// ASSESSMENT SCHEDULE — Functional core / Imperative shell
//   _computeGicaSchedule → viewModel   (pure)
//   _gicaScheduleHtml    → html string (pure)
//   _mountGicaSchedule   → DOM         (imperative)
//   renderGicaSchedule   → orchestrator
// ══════════════════════════════════════════════════════════════════════════════

let _gicaSchedTimelineMode = 'week';   // 'week' | 'month'
let _gicaSchedTimelineChart = null;
let _gicaScheduleRendered  = false;
let _gicaEmpListRendered   = false;
let _gicaSchedBuFilter   = new Set();
let _gicaSchedDeptFilter = new Set();
let _gicaCalMonthOffset = 0;        // 0 = current month, ±N = N months away
let _gicaCalBuFilter    = new Set();
let _gicaCalTypeFilter  = new Set();
let _gicaCalSidebarOpen = false;
let _gicaCalDrillEscHandler = null;

function _gicaSchedBuckets(today, mode) {
  const buckets = [];
  if (mode === 'week') {
    const day = today.getDay() || 7;
    const weekStart = new Date(today);
    weekStart.setDate(today.getDate() - (day - 1));
    for (let i = -5; i <= 6; i++) {
      const start = new Date(weekStart); start.setDate(weekStart.getDate() + i * 7);
      const end   = new Date(start);     end.setDate(start.getDate() + 6);
      buckets.push({ start, end, isFuture: i > 0,
        label: `${start.getDate()}/${start.getMonth() + 1}` });
    }
  } else {
    const M = ['ม.ค.','ก.พ.','มี.ค.','เม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'];
    for (let i = -5; i <= 6; i++) {
      const start = new Date(today.getFullYear(), today.getMonth() + i, 1);
      const end   = new Date(today.getFullYear(), today.getMonth() + i + 1, 0);
      buckets.push({ start, end, isFuture: i > 0,
        label: `${M[start.getMonth()]} ${String(start.getFullYear() + 543).slice(2)}` });
    }
  }
  return buckets;
}

function _gicaSchedBucketIdx(iso, buckets) {
  const d = _gicaParseDate(iso);
  if (!d) return -1;
  for (let i = 0; i < buckets.length; i++) {
    if (d >= buckets[i].start && d <= buckets[i].end) return i;
  }
  return -1;
}

function _gicaDateKey(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

// ISO 8601 week number (Mon-start weeks, week 1 = week containing the year's first Thursday).
function _gicaIsoWeekNumber(d) {
  const target = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const dayNr = (target.getDay() + 6) % 7;
  target.setDate(target.getDate() - dayNr + 3);
  const firstThursday = new Date(target.getFullYear(), 0, 4);
  const fDayNr = (firstThursday.getDay() + 6) % 7;
  firstThursday.setDate(firstThursday.getDate() - fDayNr + 3);
  return 1 + Math.round((target - firstThursday) / (7 * 86400000));
}

// Month grid for the Calendar View — Mon-start weeks, only as many rows as the month needs (5 or 6).
function _gicaCalGrid(monthDate) {
  const year = monthDate.getFullYear(), month = monthDate.getMonth();
  const firstOfMonth = new Date(year, month, 1);
  const lastOfMonth   = new Date(year, month + 1, 0);
  const startDow = firstOfMonth.getDay() || 7;
  const cur = new Date(firstOfMonth);
  cur.setDate(firstOfMonth.getDate() - (startDow - 1));
  const days = [];
  while (true) {
    days.push(new Date(cur));
    cur.setDate(cur.getDate() + 1);
    if (cur > lastOfMonth && days.length % 7 === 0) break;
  }
  return days;
}

function _gicaCalGroupByBu(emps) {
  const map = {};
  emps.forEach(e => {
    const k = e.bu || '—';
    if (!map[k]) map[k] = { bu: k, count: 0, overdue: false, types: new Set() };
    map[k].count++;
    if (e.schedStatus === 'overdue') map[k].overdue = true;
    if (e.nextType) map[k].types.add(e.nextType);
  });
  return sortBus(Object.keys(map)).map(bu => {
    const g = map[bu];
    g.types = Object.keys(GICA_CAL_TYPE).filter(t => g.types.has(t));
    return g;
  });
}

// Calendar View — month grid keyed strictly by scheduledNext (the planned test date, not
// the actual test date). BU/type filters here are independent of the Timeline's filters —
// each chart owns its own filter state so they never leak into each other.
function _computeGicaCalendar(emps, monthDate, buFilter = new Set(), typeFilter = new Set(), sidebarOpen = false) {
  const allSchedable = emps.filter(e => e.scheduledNext || e.startDate);
  const availBus = sortBus([...new Set(allSchedable.map(e => e.bu).filter(Boolean))]);

  const filtered = allSchedable.filter(e => {
    if (buFilter.size > 0 && !buFilter.has(e.bu)) return false;
    if (typeFilter.size > 0 && !typeFilter.has(e.nextType)) return false;
    return true;
  });

  const eventsByDate = {};
  filtered.forEach(e => {
    if (!e.scheduledNext) return;
    (eventsByDate[e.scheduledNext] = eventsByDate[e.scheduledNext] || []).push(e);
  });

  const today     = _gicaToday();
  const todayKey  = _gicaDateKey(today);
  const gridDays  = _gicaCalGrid(monthDate);
  const month     = monthDate.getMonth();
  const weeks = [];
  for (let i = 0; i < gridDays.length; i += 7) {
    const days = gridDays.slice(i, i + 7).map(d => {
      const key = _gicaDateKey(d);
      const events = eventsByDate[key] || [];
      return {
        key, dayNum: d.getDate(), inMonth: d.getMonth() === month, isToday: key === todayKey,
        isPast: d < today,
        events, buGroups: _gicaCalGroupByBu(events),
      };
    });
    weeks.push({ weekNumber: _gicaIsoWeekNumber(gridDays[i]), days });
  }

  const M = ['January', 'February', 'March', 'April', 'May', 'June',
             'July', 'August', 'September', 'October', 'November', 'December'];
  const monthLabel = `${M[month]} ${monthDate.getFullYear()}`;

  return { weeks, monthLabel, availBus, buFilter, typeFilter, sidebarOpen };
}

// Row 2 BU cards — total needing test THIS WEEK per BU, split by Retest/Review type,
// each shown as "attended this week / required this week". Cohort + cutoff rules match
// the Timeline above (and the now-removed Sankey): a person counts toward this week's
// cohort if they tested this week, or if they're due (scheduledNext <= cutoff) and
// haven't tested yet — cutoff is today for the current week so a week still in progress
// only counts people already overdue right now, not ones whose day just hasn't arrived.
function _computeGicaWeeklyBuCards(emps, today) {
  const allSchedable = emps.filter(e => e.scheduledNext || e.startDate);
  const buckets    = _gicaSchedBuckets(today, 'week');
  const currentIdx = buckets.findIndex(b => today >= b.start && today <= b.end);
  const cutoff     = currentIdx >= 0 ? (today < buckets[currentIdx].end ? today : buckets[currentIdx].end) : today;

  const buMap = {};
  const ensure = bu => buMap[bu] || (buMap[bu] = {
    bu, total: 0, attended: 0, overdue: 0, attendedPass: 0, attendedFail: 0,
    retestReq: 0, retestAttended: 0, reviewReq: 0, reviewAttended: 0,
    employees: [],
  });

  allSchedable.forEach(e => {
    if (!e.bu || currentIdx < 0) return;
    const thisWeekEntry = (e.history || []).find(h => h.date && _gicaSchedBucketIdx(h.date, buckets) === currentIdx);
    const attendedThisWeek = !!thisWeekEntry;
    let inCohort = attendedThisWeek;
    if (!attendedThisWeek && e.scheduledNext) {
      const schedDate = _gicaParseDate(e.scheduledNext);
      if (schedDate && schedDate <= cutoff) inCohort = true;
    }
    if (!inCohort) return;

    const c = ensure(e.bu);
    c.total++;
    c.employees.push(e);
    if (attendedThisWeek) {
      c.attended++;
      const attemptPassed = thisWeekEntry.grade1 && thisWeekEntry.grade2 && e.exp1 && e.exp2 &&
        (GICA_GRADE_RANK[thisWeekEntry.grade1] || 0) >= (GICA_GRADE_RANK[e.exp1] || 0) &&
        (GICA_GRADE_RANK[thisWeekEntry.grade2] || 0) >= (GICA_GRADE_RANK[e.exp2] || 0);
      if (attemptPassed) c.attendedPass++; else c.attendedFail++;
    } else {
      c.overdue++;
    }

    if (e.nextType === 'Retest') { c.retestReq++; if (attendedThisWeek) c.retestAttended++; }
    else                          { c.reviewReq++; if (attendedThisWeek) c.reviewAttended++; }
  });

  return BU_ORDER.map(bu => buMap[bu] || { bu, empty: true });
}

function _computeGicaSchedule(emps, today, timelineMode, schedMode = 'all', buFilter = new Set(), deptFilter = new Set()) {
  const allSchedable = emps.filter(e => e.scheduledNext || e.startDate);
  const availBus   = sortBus([...new Set(allSchedable.map(e => e.bu).filter(Boolean))]);
  const availDepts = [...new Set(allSchedable.map(e => e.deptname).filter(Boolean))].sort();
  // BU/dept filter affects only the Assessment Schedule Timeline chart below — KPI cards,
  // BU cards, donut and the schedule table all stay computed from the unfiltered list.
  const schedable = allSchedable.filter(e => {
    if (buFilter.size > 0 && !buFilter.has(e.bu)) return false;
    if (deptFilter.size > 0 && !deptFilter.has(e.deptname)) return false;
    return true;
  });
  const total    = allSchedable.length;
  const dueWeekN = allSchedable.filter(e => e.daysOverdue != null
                                      && e.daysOverdue >= -7 && e.daysOverdue <= 0).length;
  const dueMonthN = allSchedable.filter(e => e.daysOverdue != null
                                       && e.daysOverdue >= -30 && e.daysOverdue <= 0).length;

  const retestN = allSchedable.filter(e => e.passed === false).length;
  const pendingN = allSchedable.filter(e => e.passed !== true && e.passed !== false).length;

  const statusCounts = { upcoming: 0, due_soon: 0, overdue: 0, unknown: 0 };
  allSchedable.forEach(e => { statusCounts[e.schedStatus] = (statusCounts[e.schedStatus] || 0) + 1; });

  const buMap = {};
  allSchedable.forEach(e => {
    if (!e.bu) return;
    if (!buMap[e.bu]) buMap[e.bu] = { bu: e.bu, total: 0, overdue: 0, dueSoon: 0, failed: 0, awaiting: 0 };
    const c = buMap[e.bu];
    c.total++;
    if (e.schedStatus === 'overdue')  c.overdue++;
    if (e.schedStatus === 'due_soon') c.dueSoon++;
    if (e.passed === false)           c.failed++;
    if (e.passed !== true && e.passed !== false) c.awaiting++;
  });
  const buCards = BU_ORDER.map(bu => buMap[bu] || { bu, empty: true });

  const buckets = _gicaSchedBuckets(today, timelineMode);
  const currentIdx = buckets.findIndex(b => today >= b.start && today <= b.end);
  const timeline = buckets.map(b => ({
    label: b.label, isFuture: b.isFuture,
    onTimePassed: 0, onTimeFailed: 0, upcoming: 0, overdue: 0,
  }));
  schedable.forEach(e => {
    // Track buckets where this person already has an actual test recorded (from history).
    // Used to prevent double-counting in monthly mode when scheduledNext falls in the
    // same monthly bucket as a history entry.
    const testedBuckets = new Set();
    (e.history || []).forEach(h => {
      if (!h.date) return;
      const actualIdx = _gicaSchedBucketIdx(h.date, buckets);
      const schedIdx  = h.scheduledDate ? _gicaSchedBucketIdx(h.scheduledDate, buckets) : -1;
      if (actualIdx >= 0) {
        testedBuckets.add(actualIdx);
        const attemptPassed = h.grade1 && h.grade2 && e.exp1 && e.exp2 &&
          (GICA_GRADE_RANK[h.grade1] || 0) >= (GICA_GRADE_RANK[e.exp1] || 0) &&
          (GICA_GRADE_RANK[h.grade2] || 0) >= (GICA_GRADE_RANK[e.exp2] || 0);
        if (attemptPassed) timeline[actualIdx].onTimePassed++;
        else               timeline[actualIdx].onTimeFailed++;
      }
      // Tested in a different bucket than scheduled → mark scheduled bucket as overdue (missed)
      if (schedIdx >= 0 && schedIdx !== actualIdx) timeline[schedIdx].overdue++;
    });
    if (e.scheduledNext) {
      if (e.schedStatus === 'overdue') {
        // Weekly: cascade overdue forward through past/current buckets to show carry-over.
        //         lastTestDate guard suppresses double-count with history fail in the same week.
        // Monthly: count each overdue person ONCE at the bucket containing scheduledNext so the
        //          red overdue segment stays visible. The lastTestDate guard is intentionally NOT
        //          applied here — accepts mild Total double-count (a fail-then-overdue person can
        //          appear in both onTimeFailed and overdue for the same month) as the trade-off
        //          for keeping overdue visible in monthly mode.
        if (timelineMode === 'month') {
          const idx = _gicaSchedBucketIdx(e.scheduledNext, buckets);
          if (idx >= 0 && !buckets[idx].isFuture) timeline[idx].overdue++;
        } else {
          const startDate    = _gicaParseDate(e.scheduledNext);
          const lastTestDate = _gicaParseDate(e.lastDate);
          for (let bi = 0; bi < buckets.length; bi++) {
            if (startDate > buckets[bi].end) continue;
            if (buckets[bi].isFuture) break;
            if (lastTestDate && lastTestDate >= buckets[bi].start && lastTestDate <= buckets[bi].end) continue;
            if (buckets[bi].end < today) timeline[bi].overdue++;
            else                         timeline[bi].upcoming++;
          }
        }
      } else {
        const idx = _gicaSchedBucketIdx(e.scheduledNext, buckets);
        // Skip if person already counted in this bucket via a history entry (monthly double-count guard)
        if (idx >= 0 && !testedBuckets.has(idx)) timeline[idx].upcoming++;
      }
    }
  });

  const weeklyBuCards = _computeGicaWeeklyBuCards(emps, today);

  return {
    total, dueWeekN, dueMonthN,
    retestN, pendingN,
    statusCounts, buCards, weeklyBuCards, timeline, timelineMode, schedMode, currentIdx,
    employees: allSchedable,
    availBus, availDepts, buFilter, deptFilter,
  };
}

function _gicaScheduleHtml(vm) {
  const legendItem = (color, text) => `
    <span><span style="display:inline-block;width:10px;height:10px;background:${color};border-radius:2px;margin-right:4px;vertical-align:middle;"></span>${text}</span>`;
  const buLabel   = vm.buFilter.size === 0   ? 'BU'   : vm.buFilter.size   <= 2 ? [...vm.buFilter].join(', ')   : `BU (${vm.buFilter.size})`;
  const deptLabel = vm.deptFilter.size === 0 ? 'Department' : vm.deptFilter.size <= 2 ? [...vm.deptFilter].join(', ') : `Department (${vm.deptFilter.size})`;
  const timelineCard = `
    <div class="card card--section">
      <div class="card-head u-between">
        <h3 style="margin:0;font-size:1rem;color:var(--text);">Assessment Schedule Timeline</h3>
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
          <div class="quad-dropdown">
            <button class="quad-dd-btn${vm.buFilter.size > 0 ? ' quad-dd-btn--active' : ''}" id="gica-sched-bu-trigger" type="button"><span class="quad-dd-label">${buLabel}</span> ▾</button>
            <div class="quad-dd-panel" id="gica-sched-bu-panel" hidden>
              <button class="quad-btn${vm.buFilter.size === 0 ? ' quad-btn--active' : ''}" data-bu="all" type="button">All BU</button>
              ${vm.availBus.map(bu => `<button class="quad-btn${vm.buFilter.has(bu) ? ' quad-btn--active' : ''}" data-bu="${escapeHtml(bu)}" type="button">${escapeHtml(bu)}</button>`).join('')}
            </div>
          </div>
          <div class="quad-dropdown">
            <button class="quad-dd-btn${vm.deptFilter.size > 0 ? ' quad-dd-btn--active' : ''}" id="gica-sched-dept-trigger" type="button"><span class="quad-dd-label">${deptLabel}</span> ▾</button>
            <div class="quad-dd-panel" id="gica-sched-dept-panel" hidden>
              <button class="quad-btn${vm.deptFilter.size === 0 ? ' quad-btn--active' : ''}" data-dept="all" type="button">All Departments</button>
              ${vm.availDepts.map(d => `<button class="quad-btn${vm.deptFilter.has(d) ? ' quad-btn--active' : ''}" data-dept="${escapeHtml(d)}" type="button">${escapeHtml(d)}</button>`).join('')}
            </div>
          </div>
          <div class="toggle-group" id="gica-schedTimelineToggle">
            <button class="toggle-btn ${vm.timelineMode === 'week'  ? 'active' : ''}" data-mode="week"  type="button">Week</button>
            <button class="toggle-btn ${vm.timelineMode === 'month' ? 'active' : ''}" data-mode="month" type="button">Month</button>
          </div>
        </div>
      </div>
      <div class="chart-canvas-wrap" style="height:300px;"><canvas id="gica-schedTimelineChart"></canvas></div>
      <div style="display:flex;gap:16px;margin-top:10px;font-size:0.74rem;color:var(--text-muted);flex-wrap:wrap;">
        ${legendItem('#64748b', 'Total')}
        ${legendItem('#16a34a', 'On-time (Pass)')}
        ${legendItem('#8def86', 'On-time (Fail)')}
        ${legendItem('#dc4e4e', 'Overdue')}
      </div>
    </div>`;

  const buCardsHtml = vm.weeklyBuCards.map(c => {
    if (c.empty) return `<div class="stat-card stat-card--empty" style="min-width:0;">
      <div class="bu-name u-muted">${escapeHtml(c.bu)}</div>
      <div class="u-muted" style="font-size:0.75rem;margin-top:12px;">— no data —</div>
    </div>`;
    const buColor = GICA_BU_COLORS[c.bu] || '#6b7280';
    const passPct = c.total > 0 ? Math.min(100, Math.round(c.attendedPass / c.total * 100)) : 0;
    const failPct = c.total > 0 ? Math.min(100, Math.round(c.attendedFail / c.total * 100)) : 0;
    return `
      <div class="stat-card gica-bu-cohort-card" data-bu="${escapeHtml(c.bu)}" style="min-width:0;cursor:pointer;" title="Click to view the name list">
        <div class="bu-head">
          <span class="bu-name" style="color:${buColor};">${escapeHtml(c.bu)}</span>
          <span class="u-muted bu-count">${c.total} People</span>
        </div>
        <div style="margin-bottom:8px;">
          <div class="u-between u-muted" style="font-size:0.7rem;margin-bottom:2px;">
            <span>Assessment Status</span>
            <span class="u-text" style="font-weight:600;">${c.attended}/${c.total}</span>
          </div>
          <div class="pbar pbar--6" style="display:flex;" title="Pass: ${c.attendedPass}, Fail: ${c.attendedFail}">
            ${passPct > 0 ? `<div class="pbar__fill" style="background:#16a34a;width:${passPct}%;border-radius:0;"></div>` : ''}
            ${failPct > 0 ? `<div class="pbar__fill" style="background:#86efac;width:${failPct}%;border-radius:0;"></div>` : ''}
          </div>
        </div>
        <div class="u-muted stat-card__footer">
          <div class="u-between" style="margin-bottom:2px;">
            <span>Attended</span><strong class="u-text">${c.attended}</strong>
          </div>
          <div class="u-between">
            <span>Not yet attended</span><strong style="${c.overdue > 0 ? 'color:#dc2626;' : 'color:var(--text);'}">${c.overdue}</strong>
          </div>
        </div>
      </div>`;
  }).join('') || `<div class="u-muted" style="grid-column:1/-1;text-align:center;padding:20px;">ไม่มีข้อมูล BU</div>`;
  const upcomingCard = `
    <div class="card card--section">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:12px;flex-wrap:wrap;">
        <h3 style="margin:0;font-size:1rem;color:var(--text);">Upcoming Assessments</h3>
        <div id="gica-schedToggle" class="toggle-group">
          <button class="toggle-btn${vm.schedMode === 'all'    ? ' active' : ''}" data-mode="all"    type="button">All</button>
          <button class="toggle-btn${vm.schedMode === 'Retest' ? ' active' : ''}" data-mode="Retest" type="button">Retest</button>
          <button class="toggle-btn${vm.schedMode === 'Review' ? ' active' : ''}" data-mode="Review" type="button">Review</button>
        </div>
      </div>
      <div id="gica-schedSummary"></div>
      <div id="gica-schedChartWrap" style="display:grid;gap:12px;">
        <div>
          
          <div class="chart-canvas-wrap"><canvas id="gica-scheduleChart"></canvas></div>
        </div>
        <div id="gica-schedRightWrap" style="display:none;">
          
          <div class="chart-canvas-wrap"><canvas id="gica-scheduleChartRight"></canvas></div>
        </div>
      </div>
      <div style="display:flex;gap:16px;margin-top:10px;font-size:0.72rem;color:var(--text-muted);flex-wrap:wrap;">
        <div id="gica-schedBuLegend" style="display:flex;flex-wrap:wrap;gap:12px;"></div>
      </div>
    </div>`;

  const buSection = `<div class="stat-grid stat-grid--6">${buCardsHtml}</div>`;

  // Proportion of failed employees (passed === false, same population as the "Total
  // employees" card) broken down by how many consecutive attempts they've failed.
  const failStreakColors = { fail1: '#f59e0b', fail2: '#ea580c', fail3: '#dc2626' };
  const failStreakLabels = { fail1: 'Fail 1', fail2: 'Fail 2', fail3: 'Fail 3+' };
  const failStreakCounts = { fail1: 0, fail2: 0, fail3: 0 };
  vm.employees.filter(e => e.passed === false).forEach(e => {
    const s = _gicaFailStreak(e);
    if (s === 1) failStreakCounts.fail1++;
    else if (s === 2) failStreakCounts.fail2++;
    else if (s >= 3) failStreakCounts.fail3++;
  });
  const failStreakTotal = failStreakCounts.fail1 + failStreakCounts.fail2 + failStreakCounts.fail3;
  const donutFailStreakLg = (counts, tot) => {
    const CX = 145, CY = 102, R = 50, sw = 20;
    const CIRC = 2 * Math.PI * R, outerR = R + sw / 2;
    const gap = tot ? 1.2 : 0;
    let acc = 0;
    const segs = [], labelData = [];
    ['fail1', 'fail2', 'fail3'].forEach(k => {
      const v = counts[k] || 0;
      if (!tot || !v) return;
      const color = failStreakColors[k];
      const len  = v / tot * CIRC;
      const dash = Math.max(len - gap, 0.5);
      segs.push(`<circle cx="${CX}" cy="${CY}" r="${R}" fill="none" stroke="${color}" stroke-width="${sw}" stroke-dasharray="${dash.toFixed(2)} ${(CIRC - dash).toFixed(2)}" stroke-dashoffset="${(-acc).toFixed(2)}" transform="rotate(-90 ${CX} ${CY})"></circle>`);
      const mid = -Math.PI / 2 + (acc + len / 2) / CIRC * 2 * Math.PI;
      const mx = CX + outerR * Math.cos(mid),        my = CY + outerR * Math.sin(mid);
      const ex = CX + (outerR + 12) * Math.cos(mid), ey = CY + (outerR + 12) * Math.sin(mid);
      const isRight = ex >= CX;
      const hx = ex + (isRight ? 18 : -18);
      const pct = Math.round(v / tot * 100);
      labelData.push({ k, v, pct, color, mx, my, ex, ey, hx, hy: ey, isRight });
      acc += len;
    });

    // Small adjacent segments can place their label leader-lines too close together —
    // push labels apart vertically (per side) so the text never overlaps.
    const MIN_GAP = 24;
    [true, false].forEach(isRight => {
      const group = labelData.filter(d => d.isRight === isRight).sort((a, b) => a.hy - b.hy);
      for (let i = 1; i < group.length; i++) {
        const minHy = group[i - 1].hy + MIN_GAP;
        if (group[i].hy < minHy) group[i].hy = minHy;
      }
    });

    const lines = labelData.map(({ mx, my, ex, ey, hx, hy, isRight, color, k, v, pct }) => {
      const tx = hx + (isRight ? 2 : -2), anchor = isRight ? 'start' : 'end';
      return `
        <line x1="${mx.toFixed(1)}" y1="${my.toFixed(1)}" x2="${ex.toFixed(1)}" y2="${ey.toFixed(1)}" stroke="${color}" stroke-width="1.2" stroke-linecap="round"></line>
        <line x1="${ex.toFixed(1)}" y1="${ey.toFixed(1)}" x2="${hx.toFixed(1)}" y2="${hy.toFixed(1)}" stroke="${color}" stroke-width="1.2" stroke-linecap="round"></line>
        <circle cx="${hx.toFixed(1)}" cy="${hy.toFixed(1)}" r="1.5" fill="${color}"></circle>
        <text x="${tx.toFixed(1)}" y="${(hy + 1).toFixed(1)}" text-anchor="${anchor}" font-size="9.5" font-weight="600" fill="var(--text)">${failStreakLabels[k]}: ${v}</text>
        <text x="${tx.toFixed(1)}" y="${(hy + 9.5).toFixed(1)}" text-anchor="${anchor}" font-size="8.5" fill="var(--text-muted)">(${pct}%)</text>`;
    });
    return `
      <svg viewBox="0 0 300 205" width="100%">
        <circle cx="${CX}" cy="${CY}" r="${R}" fill="none" stroke="var(--border-light)" stroke-width="${sw}"></circle>
        ${segs.join('')}
        ${lines.join('')}
        <text x="${CX}" y="${CY + 8}" text-anchor="middle" font-size="22" font-weight="800" fill="${failStreakColors.fail3}">${tot}</text>
        <text x="${CX}" y="${CY + 20}" text-anchor="middle" font-size="8.5" fill="var(--text-muted)" letter-spacing="0.5">Fail Cases</text>
      </svg>`;
  };

  const failedBuBarChart = buCards => {
    if (!buCards.length) return `<div class="u-muted" style="font-size:0.75rem;margin-top:10px;">ไม่มีข้อมูล</div>`;
    const active = buCards.filter(c => !c.empty);
    const maxN = Math.max(...active.map(c => (c.failed || 0) + (c.awaiting || 0)), 1);
    const W = 220, CH = 70, PAD = 8, LH = 16, TPAD = 14;
    const n = buCards.length;
    const slot = (W - PAD * 2) / n;
    const bw = Math.round(slot * 0.62);
    const bo = (slot - bw) / 2;
    const bars = buCards.map((c, i) => {
      const x  = Math.round(PAD + i * slot + bo);
      const cx = Math.round(x + bw / 2);
      if (c.empty) {
        return `<text x="${cx}" y="${TPAD + CH - 4}" text-anchor="middle" font-size="6.5" fill="var(--text-muted)">no data</text>
        <text x="${cx}" y="${TPAD + CH + LH - 2}" text-anchor="middle" font-size="7.5" style="fill:var(--text-muted);">${escapeHtml(c.bu)}</text>`;
      }
      const failed  = c.failed   || 0;
      const pending = c.awaiting || 0;
      const sum = failed + pending;
      const totalH = Math.max(Math.round(sum / maxN * CH), sum > 0 ? 3 : 0);
      const scale   = sum ? totalH / sum : 0;
      const failH    = failed  > 0 ? Math.max(Math.round(failed  * scale), 2) : 0;
      const pendingH = pending > 0 ? Math.max(Math.round(pending * scale), 2) : 0;
      const color    = GICA_BU_COLORS[c.bu] || '#6b7280';
      const topY     = TPAD + CH - totalH;
      const failY    = TPAD + CH - failH;
      const pendingY = failY - pendingH;
      const clipId = `gica-sched-bar-clip-${c.bu}`;
      return `<g>
        <title>${escapeHtml(c.bu)} — Fail: ${failed}, Pending: ${pending} (Total ${sum})</title>
        <defs><clipPath id="${clipId}"><rect x="${x}" y="${topY}" width="${bw}" height="${totalH}" rx="3"></rect></clipPath></defs>
        <g clip-path="url(#${clipId})">
          ${failH    > 0 ? `<rect x="${x}" y="${failY}"    width="${bw}" height="${failH}"    fill="${color}" opacity="0.25"></rect>` : ''}
          ${pendingH > 0 ? `<rect x="${x}" y="${pendingY}" width="${bw}" height="${pendingH}" fill="var(--border-light)"></rect>` : ''}
        </g>
        <text x="${cx}" y="${topY - 4}" text-anchor="middle" font-size="8" font-weight="700" fill="${color}">${sum}</text>
        <text x="${cx}" y="${TPAD + CH + LH - 2}" text-anchor="middle" font-size="7.5" style="fill:var(--text-muted);">${escapeHtml(c.bu)}</text>
      </g>`;
    }).join('');
    return `<svg viewBox="0 0 ${W} ${TPAD + CH + LH}" width="100%" style="display:block;margin-top:10px;overflow:visible;">
      <line x1="${PAD}" y1="${TPAD + CH}" x2="${W - PAD}" y2="${TPAD + CH}" stroke="var(--border-light)" stroke-width="1"></line>
      ${bars}
    </svg>`;
  };

  const gaugeStatCard = `
    <div class="stat-card">
      <div class="u-between">
        <div>
          <div class="stat-card__label">Assessment Required</div>
          <div class="stat-card__value"${vm.retestN > 0 ? ' style="color:#dc2626;"' : ''}>${vm.retestN}</div>
        </div>
        <div style="text-align:right;">
          
          <div class="u-between" style="width:96px;margin-left:auto;font-size:0.74rem;">
            <span class="u-muted">Pending</span><strong class="u-muted">${vm.pendingN}</strong>
          </div>
        </div>
      </div>
      ${failedBuBarChart(vm.buCards)}
    </div>`;

  const donutStatCard = `
    <div class="stat-card">
      <div class="stat-card__label">Failure Status by Consecutive Attempts</div>
      ${donutFailStreakLg(failStreakCounts, failStreakTotal)}
    </div>`;

  const weekCards    = vm.weeklyBuCards.filter(c => !c.empty);
  const weekTotal    = weekCards.reduce((s, c) => s + c.total, 0);
  const weekAttended = weekCards.reduce((s, c) => s + c.attended, 0);
  const dueWeekRows = vm.weeklyBuCards.map(c => {
    const buColor = GICA_BU_COLORS[c.bu] || '#6b7280';
    if (c.empty) {
      return `<div class="mini-bar__row mini-bar__row--lg">
        <span class="mini-bar__bu mini-bar__bu--lg" style="color:${buColor};">${escapeHtml(c.bu)}</span>
        <span class="u-muted" style="font-size:0.68rem;">no data</span>
      </div>`;
    }
    const passPct  = c.total ? Math.round(c.attendedPass  / c.total * 100) : 0;
    const failPct  = c.total ? Math.round(c.attendedFail  / c.total * 100) : 0;
    const awaitPct = Math.max(100 - passPct - failPct, 0);
    return `<div class="mini-bar__row mini-bar__row--lg" title="${escapeHtml(c.bu)} — Pass: ${c.attendedPass}, Fail: ${c.attendedFail}, Awaiting: ${c.overdue} (Total ${c.total})">
      <span class="mini-bar__bu mini-bar__bu--lg" style="color:${buColor};">${escapeHtml(c.bu)}</span>
      <div class="mini-bar__track mini-bar__track--lg" style="display:flex;">
        ${passPct  > 0 ? `<div style="width:${passPct}%;background:#16a34a;height:100%;"></div>`  : ''}
        ${failPct  > 0 ? `<div style="width:${failPct}%;background:#dc2626;height:100%;"></div>`  : ''}
        ${awaitPct > 0 ? `<div style="width:${awaitPct}%;background:var(--border-light);height:100%;"></div>` : ''}
      </div>
      <span class="mini-bar__count mini-bar__count--lg">${c.attended}/${c.total}</span>
    </div>`;
  }).join('');
  const dueWeekCard = `
    <div class="stat-card">
      <div class="stat-card__label">Due this week</div>
      <div class="stat-card__value">${weekAttended}/${weekTotal}</div>
      <div style="display:flex;flex-direction:column;gap:9px;margin-top:8px;">${dueWeekRows}</div>
    </div>`;

  // On-time Rate = attended this week / required this week — pass/fail doesn't matter
  // here, only whether they showed up by their scheduled date (see weeklyBuCards above).
  const onTimePctColor = pct => pct == null ? 'var(--text)' : pct >= 80 ? '#3e9f61' : pct >= 60 ? '#f1ba5a' : '#d54949';
  const overallOnTimePct = weekTotal ? Math.round(weekAttended / weekTotal * 100) : null;
  const onTimeBuRows = vm.weeklyBuCards.map(c => {
    const buColor = GICA_BU_COLORS[c.bu] || '#6b7280';
    if (c.empty) {
      return `<div class="mini-bar__row mini-bar__row--lg">
        <span class="mini-bar__bu mini-bar__bu--lg" style="color:${buColor};">${escapeHtml(c.bu)}</span>
        <span class="u-muted" style="font-size:0.68rem;">no data</span>
      </div>`;
    }
    const pct = c.total ? Math.round(c.attended / c.total * 100) : 0;
    const fillColor = onTimePctColor(pct);
    return `<div class="mini-bar__row mini-bar__row--lg" title="${escapeHtml(c.bu)} — Attended: ${c.attended}/${c.total} (${pct}%)">
      <span class="mini-bar__bu mini-bar__bu--lg" style="color:${buColor};">${escapeHtml(c.bu)}</span>
      <div class="mini-bar__track mini-bar__track--lg">
        <div class="mini-bar__fill" style="width:${pct}%;background:${fillColor};"></div>
      </div>
      <span class="mini-bar__count mini-bar__count--lg" style="color:${fillColor};font-weight:700;">${pct}%</span>
    </div>`;
  }).join('');
  const onTimeRateCard = `
    <div class="stat-card">
      <div class="stat-card__label">Overall On-time Rate</div>
      <div class="stat-card__value" style="color:${onTimePctColor(overallOnTimePct)};">${overallOnTimePct != null ? overallOnTimePct + '%' : '—'}</div>
      <div style="display:flex;flex-direction:column;gap:9px;margin-top:8px;">${onTimeBuRows}</div>
    </div>`;

  const row1 = `
    <div class="stat-grid stat-grid--4">
      ${gaugeStatCard}
      ${donutStatCard}
      ${dueWeekCard}
      ${onTimeRateCard}
    </div>`;

  const calendarCard = `
    <div class="card card--section">
      <div class="card-head u-between">
        <h3 style="margin:0;font-size:1rem;color:var(--text);">Assessment Schedule (Calendar View)</h3>
      </div>
      <div id="gica-cal-summary"></div>
    </div>`;

  const buCohortModal = `
    <div id="gica-buCohort-modal" class="gica-modal hidden">
      <div class="gica-modal__backdrop" data-buclose="1"></div>
      <div class="gica-modal__panel">
        <div class="gica-modal__head">
          <h4 id="gica-buCohort-title" style="margin:0;font-size:1rem;"></h4>
          <div style="display:flex;gap:8px;align-items:center;">
            <button onclick="_gicaBuCohortPrint();" style="font-size:0.72rem;padding:4px 12px;background:#2563eb;color:#fff;border:none;border-radius:4px;cursor:pointer;">🖨 Print</button>
            <button class="gica-modal__close" data-buclose="1" aria-label="ปิด">✕</button>
          </div>
        </div>
        <div id="gica-buCohort-body" class="gica-modal__body"></div>
      </div>
    </div>`;

  const scheduleDrillModal = `
    <div id="gica-scheduleDrill-modal" class="gica-modal hidden">
      <div class="gica-modal__backdrop" data-schedclose="1"></div>
      <div class="gica-modal__panel">
        <div id="gica-scheduleDrill"></div>
      </div>
    </div>`;

  return `${row1}${buSection}${calendarCard}${timelineCard}${upcomingCard}${buCohortModal}${scheduleDrillModal}`;
}

function _mountGicaSchedule(html, vm) {
  const container = $('gica-sched-summary');
  if (!container) return;
  if (_gicaSchedTimelineChart) { try { _gicaSchedTimelineChart.destroy(); } catch (_) {} _gicaSchedTimelineChart = null; }
  ['gica-scheduleChart', 'gica-scheduleChartRight'].forEach(id => {
    if (_gicaCharts[id]) { try { _gicaCharts[id].destroy(); } catch (_) {} _gicaCharts[id] = null; }
  });
  container.innerHTML = html;

  container.querySelectorAll('.gica-bu-cohort-card[data-bu]').forEach(card => {
    card.addEventListener('click', () => {
      const c = vm.weeklyBuCards.find(x => x.bu === card.dataset.bu);
      if (c) _gicaShowBuCohortModal(c.bu, c.employees);
    });
  });
  const cohortModal = $('gica-buCohort-modal');
  if (cohortModal) {
    const closeCohortModal = () => cohortModal.classList.add('hidden');
    cohortModal.querySelectorAll('[data-buclose="1"]').forEach(el => el.addEventListener('click', closeCohortModal));
    if (window._gicaCohortEscHandler) document.removeEventListener('keydown', window._gicaCohortEscHandler);
    window._gicaCohortEscHandler = e => { if (e.key === 'Escape') closeCohortModal(); };
    document.addEventListener('keydown', window._gicaCohortEscHandler);
  }

  const scheduleDrillModal = $('gica-scheduleDrill-modal');
  if (scheduleDrillModal) {
    const closeScheduleDrill = () => { _gicaSchedDate = ''; _gicaSchedBu = ''; renderGicaScheduleDrill(); };
    scheduleDrillModal.querySelectorAll('[data-schedclose="1"]').forEach(el => el.addEventListener('click', closeScheduleDrill));
  }

  const toggle = $('gica-schedTimelineToggle');
  if (toggle) {
    toggle.querySelectorAll('.toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        _gicaSchedTimelineMode = btn.dataset.mode;
        renderGicaSchedule();
      });
    });
  }

  const _wireSchedFilter = (panelId, dataKey, targetSet) => {
    const panel = container.querySelector(`#${panelId}`);
    if (!panel) return;
    panel.addEventListener('click', e => {
      const btn = e.target.closest(`.quad-btn[data-${dataKey}]`);
      if (!btn) return;
      const val = btn.dataset[dataKey];
      if (val === 'all') targetSet.clear();
      else targetSet.has(val) ? targetSet.delete(val) : targetSet.add(val);
      renderGicaSchedule();
    });
  };
  const _toggleSchedPanel = (panelId, e) => {
    e.stopPropagation();
    const panel = container.querySelector(`#${panelId}`);
    if (!panel) return;
    const wasHidden = panel.hidden;
    container.querySelectorAll('.quad-dd-panel').forEach(p => { p.hidden = true; });
    panel.hidden = !wasHidden;
  };
  container.querySelector('#gica-sched-bu-trigger')  ?.addEventListener('click', e => _toggleSchedPanel('gica-sched-bu-panel', e));
  container.querySelector('#gica-sched-dept-trigger')?.addEventListener('click', e => _toggleSchedPanel('gica-sched-dept-panel', e));
  if (container._onDocClick) document.removeEventListener('click', container._onDocClick);
  container._onDocClick = () => container.querySelectorAll('.quad-dd-panel').forEach(p => { p.hidden = true; });
  document.addEventListener('click', container._onDocClick);
  _wireSchedFilter('gica-sched-bu-panel',   'bu',   _gicaSchedBuFilter);
  _wireSchedFilter('gica-sched-dept-panel', 'dept', _gicaSchedDeptFilter);

  const cvs = $('gica-schedTimelineChart');
  if (cvs && typeof Chart !== 'undefined') {
    const _dlOntime = (showWhen) => ({
      anchor: 'end', align: 'top',
      font: { size: 10, weight: '600' }, color: '#15803d',
      display: ctx => showWhen(vm.timeline[ctx.dataIndex]),
      formatter: (v, ctx) => { const t = vm.timeline[ctx.dataIndex]; return t.onTimePassed + t.onTimeFailed; },
    });
    const _currentBucketHighlight = {
      id: 'gicaCurrentBucketHighlight',
      beforeDatasetsDraw(chart) {
        const idx = vm.currentIdx;
        if (idx == null || idx < 0) return;
        const { ctx, chartArea, scales: { x } } = chart;
        const center = x.getPixelForTick(idx);
        const band   = x.width / x.ticks.length;
        ctx.save();
        ctx.fillStyle = 'rgba(37,99,235,0.10)';
        ctx.fillRect(center - band / 2, chartArea.top, band, chartArea.bottom - chartArea.top);
        ctx.restore();
      },
    };
    _gicaSchedTimelineChart = new Chart(cvs, {
      type: 'bar',
      plugins: [_currentBucketHighlight, ...(typeof ChartDataLabels !== 'undefined' ? [ChartDataLabels] : [])],
      data: {
        labels: vm.timeline.map(t => t.label),
        datasets: [
          {
            label: 'จำนวนต้องสอบ', stack: 'total',
            data: vm.timeline.map(t => t.onTimePassed + t.onTimeFailed + t.overdue + t.upcoming),
            backgroundColor: '#64748b', borderRadius: 4,
            datalabels: { anchor: 'end', align: 'top', font: { size: 10, weight: '600' }, color: '#475569', formatter: v => v > 0 ? v : null, display: ctx => ctx.dataset.data[ctx.dataIndex] > 0 },
          },
          {
            label: 'On-time (ผ่าน)', stack: 'ontime',
            data: vm.timeline.map(t => t.onTimePassed),
            backgroundColor: '#16a34a', borderRadius: 4,
            datalabels: _dlOntime(t => t.onTimeFailed === 0 && t.onTimePassed > 0),
          },
          {
            label: 'On-time (ไม่ผ่าน)', stack: 'ontime',
            data: vm.timeline.map(t => t.onTimeFailed),
            backgroundColor: '#86efac', borderRadius: 4,
            datalabels: _dlOntime(t => t.onTimeFailed > 0),
          },
          {
            label: 'Overdue', stack: 'overdue',
            data: vm.timeline.map(t => t.overdue),
            backgroundColor: '#dc2626', borderRadius: 4,
            datalabels: { anchor: 'end', align: 'top', font: { size: 10, weight: '600' }, color: '#b91c1c', formatter: v => v > 0 ? v : null, display: ctx => ctx.dataset.data[ctx.dataIndex] > 0 },
          },
        ],
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          datalabels: { display: false },
          tooltip: {
            callbacks: {
              title: ctx => vm.timeline[ctx[0].dataIndex].label,
              afterBody: ctx => {
                const t = vm.timeline[ctx[0].dataIndex];
                return [`รวมทั้งหมด: ${t.onTimePassed + t.onTimeFailed + t.overdue + t.upcoming} คน`];
              },
            },
          },
        },
        scales: {
          x: { stacked: true, ticks: { font: { size: 10 }, maxRotation: 0 } },
          y: { stacked: true, beginAtZero: true, ticks: { precision: 0 }, grace: '25%' },
        },
      },
    });
  }

  const schedTg = $('gica-schedToggle');
  if (schedTg) schedTg.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      _gicaSchedMode = btn.dataset.mode;
      schedTg.querySelectorAll('.toggle-btn').forEach(b => b.classList.toggle('active', b.dataset.mode === _gicaSchedMode));
      _gicaSchedDate = '';
      _gicaSchedBu   = '';
      renderGicaScheduleChart();
    });
  });
  renderGicaScheduleChart();
}

function renderGicaSchedule() {
  const today = _gicaToday();
  const vm = _computeGicaSchedule(_gicaData.employees || [], today, _gicaSchedTimelineMode, _gicaSchedMode, _gicaSchedBuFilter, _gicaSchedDeptFilter);
  _mountGicaSchedule(_gicaScheduleHtml(vm), vm);
  renderGicaCalendar();
}

// ── Assessment Schedule (Calendar View) — month grid keyed by scheduledNext ───
const GICA_CAL_TYPE = {
  Initial: { color: '#2563eb', bg: 'rgba(37,99,235,0.14)', label: 'Initial assessment' },
  Retest:  { color: '#fdf400', bg: 'rgba(180,83,9,0.14)',  label: 'Re-assessment' },
  Review:  { color: '#16a34a', bg: 'rgba(22,163,74,0.14)', label: 'Review assessment' },
};
function _gicaCalendarHtml(vm) {
  const buChips = `
    <button class="quad-btn${vm.buFilter.size === 0 ? ' quad-btn--active' : ''}" data-bu="all" type="button">All BU</button>
    ${vm.availBus.map(bu => `<button class="quad-btn${vm.buFilter.has(bu) ? ' quad-btn--active' : ''}" data-bu="${escapeHtml(bu)}" type="button">${escapeHtml(bu)}</button>`).join('')}`;
  const typeRows = Object.keys(GICA_CAL_TYPE).map(t => {
    const info = GICA_CAL_TYPE[t];
    const checked = vm.typeFilter.size === 0 || vm.typeFilter.has(t);
    return `
      <label class="gica-cal-type-row">
        <input type="checkbox" data-type="${t}" ${checked ? 'checked' : ''}>
        <span class="gica-cal-type-dot" style="background:${info.color};"></span>${info.label}
      </label>`;
  }).join('');

  const weekdayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const cellHtml = day => {
    const evtHtml = day.buGroups.map(g => {
      const color = GICA_BU_COLORS[g.bu] || '#6b7280';
      const typeDots = g.types.map(t => `<span class="gica-cal-evt-type-dot" style="background:${GICA_CAL_TYPE[t].color};" title="${escapeHtml(GICA_CAL_TYPE[t].label)}"></span>`).join('');
      return `<div class="gica-cal-evt" data-day-key="${day.key}" data-bu="${escapeHtml(g.bu)}" style="background:${hexToRgba(color, 0.16)};color:${color};">${escapeHtml(g.bu)} (${g.count})<span class="gica-cal-evt-types">${typeDots}</span>${g.overdue ? '<span class="gica-cal-evt__dot"></span>' : ''}</div>`;
    }).join('');
    const cls = ['gica-cal-cell', !day.inMonth ? 'gica-cal-cell--out' : '', day.isPast ? 'gica-cal-cell--past' : '', day.isToday ? 'gica-cal-cell--today' : ''].filter(Boolean).join(' ');
    return `<div class="${cls}"><div class="gica-cal-daynum">${day.dayNum}</div><div class="gica-cal-evt-list">${evtHtml}</div></div>`;
  };

  const sidebarHtml = vm.sidebarOpen ? `
      <div class="gica-cal-sidebar">
        <div class="gica-cal-sidebar-label">BU</div>
        <div id="gica-cal-bu-chips" class="gica-cal-bu-grid">${buChips}</div>
        <div class="gica-cal-sidebar-label" style="margin-top:12px;">Type</div>
        <div id="gica-cal-type-chips" class="gica-cal-type-list">${typeRows}</div>
        <div class="gica-cal-sidebar-label" style="margin-top:12px;">Status</div>
        <div class="gica-cal-type-row" style="cursor:default;">
          <span class="gica-cal-type-dot" style="background:#dc2626;"></span> Overdue (Not yet tested)
        </div>
      </div>` : '';

  return `
    <div class="gica-cal-toolbar">
      <button class="gica-cal-nav-btn" id="gica-cal-today" type="button">Today</button>
      <button class="gica-cal-nav-btn" id="gica-cal-prev" type="button">‹</button>
      <span class="gica-cal-month-label">${escapeHtml(vm.monthLabel)}</span>
      <button class="gica-cal-nav-btn" id="gica-cal-next" type="button">›</button>
      <button class="gica-cal-nav-btn${vm.sidebarOpen ? ' gica-cal-nav-btn--active' : ''}" id="gica-cal-filter-toggle" type="button" title="BU / Type / Status filters" style="margin-left:auto;">
        <i class="ti ti-filter" aria-hidden="true"></i> Filters
      </button>
    </div>
    <div class="gica-cal-body">
      ${sidebarHtml}
      <div class="gica-cal-main">
        <div class="gica-cal-weekdays"><div class="gica-cal-weeknum-head"></div>${weekdayNames.map(n => `<div class="gica-cal-weekday">${n}</div>`).join('')}</div>
        <div class="gica-cal-grid" id="gica-cal-grid">${vm.weeks.map(week => `<div class="gica-cal-weeknum"><span>WEEK ${week.weekNumber}</span></div>${week.days.map(cellHtml).join('')}`).join('')}</div>
      </div>
    </div>
    <div id="gica-cal-drill-modal" class="gica-modal hidden">
      <div class="gica-modal__backdrop" data-calclose="1"></div>
      <div class="gica-modal__panel">
        <div id="gica-cal-panel"></div>
      </div>
    </div>`;
}

// Reuses the same _gicaEmpTableHtml component as the row-2 BU cohort drill-down
// modal (_gicaShowBuCohortModal), scoped to one day + one BU.
function _gicaCalDrillHtml(dayKey, bu, emps) {
  const rows = emps.filter(e => e.bu === bu).sort((a, b) => (a.name || '').localeCompare(b.name || ''));
  const printDate = new Date().toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' });
  return `
    <div class="gica-print-header">
      <div style="font-size:1rem;font-weight:700;">Employee List for GICA Assessment Schedule</div>
      <div style="font-size:0.78rem;color:#555;margin-top:3px;">Assessment Date: ${_gicaFmtDate(dayKey)} · BU ${escapeHtml(bu)} · Total: ${rows.length} employees · Report Date: ${printDate}</div>
    </div>
    <div class="no-print" style="font-size:0.82rem;font-weight:600;color:var(--text);margin-bottom:8px;display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
      <span>${_gicaFmtDate(dayKey)} · <span style="color:${GICA_BU_COLORS[bu] || 'var(--accent)'};">${escapeHtml(bu)}</span> — ${rows.length} Participants</span>
      <button id="gica-cal-panel-close" type="button" style="font-size:0.72rem;padding:2px 8px;">✕ Close</button>
      <button onclick="_gicaPrint('gica-cal-panel');" type="button" style="font-size:0.72rem;padding:2px 10px;background:#2563eb;color:#fff;border:none;border-radius:4px;cursor:pointer;">🖨 Print PDF</button>
    </div>
    ${_gicaFailStatsHtml(rows)}
    <div class="gica-drill-table-wrap">${_gicaEmpTableHtml(rows, { sortable: false })}</div>`;
}

function _mountGicaCalendar(html, vm) {
  const container = $('gica-cal-summary');
  if (!container) return;
  container.innerHTML = html;

  $('gica-cal-prev') ?.addEventListener('click', () => { _gicaCalMonthOffset--; renderGicaCalendar(); });
  $('gica-cal-next') ?.addEventListener('click', () => { _gicaCalMonthOffset++; renderGicaCalendar(); });
  $('gica-cal-today')?.addEventListener('click', () => { _gicaCalMonthOffset = 0; renderGicaCalendar(); });
  $('gica-cal-filter-toggle')?.addEventListener('click', () => { _gicaCalSidebarOpen = !_gicaCalSidebarOpen; renderGicaCalendar(); });

  $('gica-cal-bu-chips')?.addEventListener('click', e => {
    const btn = e.target.closest('.quad-btn[data-bu]');
    if (!btn) return;
    const val = btn.dataset.bu;
    if (val === 'all') _gicaCalBuFilter.clear();
    else _gicaCalBuFilter.has(val) ? _gicaCalBuFilter.delete(val) : _gicaCalBuFilter.add(val);
    renderGicaCalendar();
  });
  $('gica-cal-type-chips')?.addEventListener('change', e => {
    const input = e.target.closest('input[data-type]');
    if (!input) return;
    const allTypes = Object.keys(GICA_CAL_TYPE);
    if (_gicaCalTypeFilter.size === 0) allTypes.forEach(t => { if (t !== input.dataset.type) _gicaCalTypeFilter.add(t); });
    else input.checked ? _gicaCalTypeFilter.add(input.dataset.type) : _gicaCalTypeFilter.delete(input.dataset.type);
    if (_gicaCalTypeFilter.size === allTypes.length) _gicaCalTypeFilter.clear();
    renderGicaCalendar();
  });

  if (_gicaCalDrillEscHandler) {
    document.removeEventListener('keydown', _gicaCalDrillEscHandler);
    _gicaCalDrillEscHandler = null;
  }
  const panel = $('gica-cal-panel');
  const drillModal = $('gica-cal-drill-modal');
  const grid  = $('gica-cal-grid');
  const dayByKey = {};
  vm.weeks.forEach(week => week.days.forEach(d => { dayByKey[d.key] = d; }));
  const closeDrill = () => {
    if (drillModal) drillModal.classList.add('hidden');
    if (panel) panel.innerHTML = '';
    if (_gicaCalDrillEscHandler) {
      document.removeEventListener('keydown', _gicaCalDrillEscHandler);
      _gicaCalDrillEscHandler = null;
    }
  };
  const showDrill = (dayKey, bu) => {
    if (!panel) return;
    const day = dayByKey[dayKey];
    panel.innerHTML = day ? _gicaCalDrillHtml(dayKey, bu, day.events) : '';
    if (drillModal) drillModal.classList.remove('hidden');
    panel.querySelector('#gica-cal-panel-close')?.addEventListener('click', closeDrill);
    if (_gicaCalDrillEscHandler) document.removeEventListener('keydown', _gicaCalDrillEscHandler);
    _gicaCalDrillEscHandler = e => { if (e.key === 'Escape') closeDrill(); };
    document.addEventListener('keydown', _gicaCalDrillEscHandler);
  };
  grid?.addEventListener('click', e => {
    const chip = e.target.closest('.gica-cal-evt[data-bu]');
    if (!chip) return;
    showDrill(chip.dataset.dayKey, chip.dataset.bu);
  });
  drillModal?.querySelectorAll('[data-calclose="1"]').forEach(el => el.addEventListener('click', closeDrill));
}

function renderGicaCalendar() {
  const monthDate = new Date();
  monthDate.setDate(1);
  monthDate.setMonth(monthDate.getMonth() + _gicaCalMonthOffset);
  const vm = _computeGicaCalendar(_gicaData.employees || [], monthDate, _gicaCalBuFilter, _gicaCalTypeFilter, _gicaCalSidebarOpen);
  _mountGicaCalendar(_gicaCalendarHtml(vm), vm);
}

// ── Chart: upcoming test schedule (clickable) ─────────────────────────────────
function _gicaSchedRows() {
  let rows = (_gicaData.employees || []).filter(e => e.nextDate);
  if (_gicaSchedMode !== 'all') rows = rows.filter(e => e.nextType === _gicaSchedMode);
  return rows;
}
const GICA_BU_COLORS = Object.fromEntries(
  BU_ORDER.map(bu => [bu, getComputedStyle(document.documentElement).getPropertyValue(`--bu-${bu}`).trim() || '#6b7280'])
);
function renderGicaScheduleChart() {
  const emps    = _gicaData.employees || [];
  const retestN = emps.filter(e => e.passed === false).length;
  const reviewN = emps.filter(e => e.passed === true).length;
  const sumEl = $('gica-schedSummary');
  if (sumEl) {
    sumEl.innerHTML = `
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px;">
        <div style="background:var(--surface2);border-radius:8px;padding:10px 14px;display:flex;align-items:center;gap:12px;">
          <span style="font-size:1.5rem;font-weight:700;color:#b91c1c;">${retestN}</span>
          <span style="font-size:0.8rem;color:var(--text-muted);">Failed – Reassessment Required</span>
        </div>
        <div style="background:var(--surface2);border-radius:8px;padding:10px 14px;display:flex;align-items:center;gap:12px;">
          <span style="font-size:1.5rem;font-weight:700;color:#2563eb;">${reviewN}</span>
          <span style="font-size:0.8rem;color:var(--text-muted);">Passed – Awaiting Next Assessment</span>
        </div>
      </div>`;
  }
  const all = emps.filter(e => e.nextDate);

  const id  = 'gica-scheduleChart';
  const idR = 'gica-scheduleChartRight';
  if (_gicaCharts[id])  { _gicaCharts[id].destroy();  _gicaCharts[id]  = null; }
  if (_gicaCharts[idR]) { _gicaCharts[idR].destroy(); _gicaCharts[idR] = null; }

  const wrapEl    = $('gica-schedChartWrap');
  const rightWrap = $('gica-schedRightWrap');
  const leftLabel = $('gica-schedLabelLeft');
  const legendEl  = $('gica-schedBuLegend');

  if (!$(id) || typeof Chart === 'undefined') return;

  const _buildPairs = (src) => {
    const dates = [...new Set(src.map(e => e.nextDate))].sort();
    const bus   = sortBus([...new Set(src.map(e => e.bu).filter(Boolean))]);
    const pairs = [];
    dates.forEach(d => bus.forEach(bu => {
      const n = src.filter(e => e.nextDate === d && e.bu === bu).length;
      if (n > 0) pairs.push({ date: d, bu, count: n });
    }));
    return pairs;
  };

  const _makeChart = (canvasId, pairs, onPick) => {
    const cvs = $(canvasId);
    if (!cvs) return null;
    return new Chart(cvs, {
      type: 'bar',
      plugins: typeof ChartDataLabels !== 'undefined' ? [ChartDataLabels] : [],
      data: {
        labels: pairs.map(p => [_gicaFmtDate(p.date), p.bu]),
        datasets: [{ data: pairs.map(p => p.count), backgroundColor: pairs.map(p => GICA_BU_COLORS[p.bu] || '#6b7280'), borderRadius: 3 }],
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        onClick: (evt, els) => { if (!els.length) return; onPick(pairs[els[0].index]); },
        plugins: {
          legend: { display: false },
          datalabels: {
            color: () => document.documentElement.dataset.theme === 'dark' ? '#ffffff' : '#000000',
            font: { size: 10, weight: '700' },
            anchor: 'end',
            align: 'end',
            formatter: v => v > 0 ? v : null,
          },
        },
        scales: {
          x: { ticks: { font: { size: 10 }, maxRotation: 0, minRotation: 0 } },
          y: { beginAtZero: true, grace: '10%', ticks: { precision: 0 } },
        },
      },
    });
  };

  const onPick = p => { _gicaSchedDate = p.date; _gicaSchedBu = p.bu; renderGicaScheduleDrill(); };
  const rows   = _gicaSchedRows();

  if (_gicaSchedMode === 'all') {
    if (wrapEl)    wrapEl.style.gridTemplateColumns = '1fr 1fr';
    if (rightWrap) rightWrap.style.display = '';
    if (leftLabel) leftLabel.style.display  = '';
    _gicaCharts[id]  = _makeChart(id,  _buildPairs(rows.filter(e => e.nextType === 'Retest')), onPick);
    _gicaCharts[idR] = _makeChart(idR, _buildPairs(rows.filter(e => e.nextType === 'Review')), onPick);
  } else {
    if (wrapEl)    wrapEl.style.gridTemplateColumns = '1fr';
    if (rightWrap) rightWrap.style.display = 'none';
    if (leftLabel) leftLabel.style.display  = 'none';
    _gicaCharts[id] = _makeChart(id, _buildPairs(rows), onPick);
  }

  if (legendEl) {
    const buKeys = sortBus(Object.keys(GICA_BU_COLORS));
    legendEl.innerHTML = buKeys.map(bu =>
      `<span><span style="display:inline-block;width:10px;height:10px;background:${GICA_BU_COLORS[bu]};border-radius:2px;margin-right:4px;vertical-align:middle;"></span>${escapeHtml(bu)}</span>`
    ).join('');
  }

  renderGicaScheduleDrill();
}
function _gicaPrint(sourceId = 'gica-scheduleDrill') {
  const src = $(sourceId);
  if (!src) return;
  let overlay = document.getElementById('gica-print-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'gica-print-overlay';
    document.body.appendChild(overlay);
  }
  overlay.innerHTML = src.innerHTML;
  document.body.classList.add('print-mode');
  window.print();
  document.body.classList.remove('print-mode');
  overlay.innerHTML = '';
}
window._gicaEmpListPrint = function () {
  const rows = _gicaFilteredEmployees();
  const printDate = new Date().toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' });
  const f = _gicaTableState.filters;
  const filterParts = [];
  if (f.bu) filterParts.push('BU ' + f.bu);
  if (f.grade) filterParts.push('Grade ' + f.grade);
  if (f.dept) filterParts.push(f.dept);
  if (f.level) filterParts.push('Level: ' + f.level);
  if (f.type) filterParts.push(f.type);
  if (f.search) filterParts.push('"' + f.search + '"');
  const filterLabel = filterParts.length ? ' · Filter: ' + filterParts.join(', ') : '';

  const gradeCell = (g, s) => g
    ? `${_gicaGradeBadge(g)}<span style="font-size:0.68rem;color:var(--text-muted);margin-left:3px;">${s != null ? Math.round(s * 100) + '%' : ''}</span>`
    : '<span style="color:var(--text-muted);">—</span>';
  const passBadge = p => p === true
    ? `<span class="exp-badge" style="background:#16a34a;color:#fff;font-size:0.68rem;">Pass</span>`
    : p === false
      ? `<span class="exp-badge" style="background:#dc2626;color:#fff;font-size:0.68rem;">Fail</span>`
      : `<span style="color:var(--text-muted);">—</span>`;

  let overlay = document.getElementById('gica-print-overlay');
  if (!overlay) { overlay = document.createElement('div'); overlay.id = 'gica-print-overlay'; document.body.appendChild(overlay); }
  overlay.innerHTML = `
    <div class="gica-print-header">
      <div style="font-size:1rem;font-weight:700;">GICA Employee List</div>
      <div style="font-size:0.78rem;color:#555;margin-top:3px;">Total: ${rows.length} employees${filterLabel} · Report Date: ${printDate}</div>
    </div>
    ${_gicaFailStatsHtml(rows)}
    <div class="gica-drill-table-wrap">
      <table class="gica-drill-table">
        <thead><tr>
          <th class="drill-th" style="text-align:center;">BU</th>
          <th class="drill-th">Employee ID</th>
          <th class="drill-th">Employee Name</th>
          <th class="drill-th">Department</th>
          <th class="drill-th" style="text-align:center;">Level</th>
          <th class="drill-th" style="text-align:center;white-space:normal;line-height:1.3;">Measurement</th>
          <th class="drill-th" style="text-align:center;white-space:normal;line-height:1.3;">Inspection</th>
          <th class="drill-th" style="text-align:center;">Attempt</th>
          <th class="drill-th" style="text-align:center;white-space:normal;line-height:1.3;">Assessment Date</th>
          <th class="drill-th" style="text-align:center;white-space:normal;line-height:1.3;">Result</th>
          <th class="drill-th" style="text-align:center;white-space:normal;line-height:1.3;">Next Date</th>
          <th class="drill-th" style="text-align:center;">Status</th>
        </tr></thead>
        <tbody>${rows.map(e => `<tr>
          <td class="drill-td" style="text-align:center;">${escapeHtml(e.bu)}</td>
          <td class="drill-td" style="font-size:0.72rem;color:var(--text-muted);">${escapeHtml(e.empid || '')}</td>
          <td class="drill-td" style="font-weight:600;">${escapeHtml(e.name)}</td>
          <td class="drill-td" style="font-size:0.75rem;color:var(--text-muted);">${escapeHtml(e.deptname)}</td>
          <td class="drill-td" style="text-align:center;font-size:0.75rem;">${escapeHtml(e.level || '')}</td>
          <td class="drill-td" style="text-align:center;">${gradeCell(e.grade1, e.score1)}</td>
          <td class="drill-td" style="text-align:center;">${gradeCell(e.grade2, e.score2)}</td>
          <td class="drill-td" style="text-align:center;">${e.attempt}</td>
          <td class="drill-td" style="text-align:center;font-size:0.72rem;">${_gicaFmtDate(e.lastDate)}</td>
          <td class="drill-td" style="text-align:center;">${passBadge(e.passed)}</td>
          <td class="drill-td" style="text-align:center;font-size:0.72rem;">${_gicaFmtDate(e.nextDate)}</td>
          <td class="drill-td" style="text-align:center;">${_gicaTypeBadge(e.nextType)}</td>
        </tr>`).join('')}</tbody>
      </table>
    </div>`;
  document.body.classList.add('print-mode');
  window.print();
  document.body.classList.remove('print-mode');
  overlay.innerHTML = '';
};
function renderGicaScheduleDrill() {
  if (_gicaDrillEscHandler) {
    document.removeEventListener('keydown', _gicaDrillEscHandler);
    _gicaDrillEscHandler = null;
  }
  const wrap  = $('gica-scheduleDrill');
  const modal = $('gica-scheduleDrill-modal');
  if (!wrap) return;
  if (!_gicaSchedDate) {
    if (modal) modal.classList.add('hidden');
    wrap.innerHTML = '';
    return;
  }
  if (modal) modal.classList.remove('hidden');
  let rows = _gicaSchedRows().filter(e => e.nextDate === _gicaSchedDate);
  if (_gicaSchedBu) rows = rows.filter(e => e.bu === _gicaSchedBu);
  rows.sort((a, b) => a.bu.localeCompare(b.bu) || a.name.localeCompare(b.name));
  const buLabel = _gicaSchedBu ? ` · <span style="color:${GICA_BU_COLORS[_gicaSchedBu] || 'var(--accent)'};">${escapeHtml(_gicaSchedBu)}</span>` : '';
  const typeLabel = _gicaSchedMode !== 'all' ? ` (${_gicaSchedMode})` : '';
  const printDate = new Date().toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' });
  wrap.innerHTML = `
    <div class="gica-print-header">
      <div style="font-size:1rem;font-weight:700;">Employee List for GICA Assessment${typeLabel}</div>
      <div style="font-size:0.78rem;color:#555;margin-top:3px;">Assessment Date: ${_gicaFmtDate(_gicaSchedDate)}${_gicaSchedBu ? ' · BU ' + _gicaSchedBu : ''} · Total: ${rows.length} employees · Report Date: ${printDate}</div>
    </div>
    <div class="no-print" style="font-size:0.82rem;font-weight:600;color:var(--text);margin-bottom:8px;display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
      <span>📅 Assessment Schedule ${_gicaFmtDate(_gicaSchedDate)}${buLabel} — ${rows.length} Participants</span>
      <button onclick="_gicaSchedDate='';_gicaSchedBu='';renderGicaScheduleDrill();" style="font-size:0.72rem;padding:2px 8px;">✕ Close</button>
      <button onclick="_gicaPrint();" style="font-size:0.72rem;padding:2px 10px;background:#2563eb;color:#fff;border:none;border-radius:4px;cursor:pointer;">🖨 พิมพ์ PDF</button>
    </div>
    ${_gicaFailStatsHtml(rows)}
    <div class="gica-drill-table-wrap">${_gicaEmpTableHtml(rows, { sortable: false })}</div>`;
  _gicaDrillEscHandler = e => {
    if (e.key === 'Escape') {
      _gicaSchedDate = '';
      _gicaSchedBu   = '';
      renderGicaScheduleDrill();
    }
  };
  document.addEventListener('keydown', _gicaDrillEscHandler);
}

// ── Employee table ────────────────────────────────────────────────────────────
function _gicaFailStreak(e) {
  const hist = e.history || [];
  if (hist.length === 0) return 0;
  let streak = 0;
  for (let i = hist.length - 1; i >= 0; i--) {
    const h = hist[i];
    const passed = h.grade1 && h.grade2 && e.exp1 && e.exp2 &&
      (GICA_GRADE_RANK[h.grade1] || 0) >= (GICA_GRADE_RANK[e.exp1] || 0) &&
      (GICA_GRADE_RANK[h.grade2] || 0) >= (GICA_GRADE_RANK[e.exp2] || 0);
    if (passed) break;
    streak++;
  }
  return streak;
}

function _gicaFailStatsHtml(rows) {
  let fail1 = 0, fail2 = 0, fail3 = 0;
  rows.forEach(e => { const s = _gicaFailStreak(e); if (s === 1) fail1++; else if (s === 2) fail2++; else if (s >= 3) fail3++; });
  const chip = (label, count, color) =>
    `<span style="display:inline-flex;align-items:center;gap:5px;padding:4px 10px;border-radius:6px;font-size:0.78rem;font-weight:600;background:${color}15;color:${color};border:1px solid ${color}30;">` +
    `<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${color};"></span>${label}: ${count} people</span>`;
  return `<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px;">`
    + chip('Failed initial assessment', fail1, '#f59e0b')
    + chip('Failed 2 consecutive attempts', fail2, '#ea580c')
    + chip('Failed 3+ consecutive attempts', fail3, '#dc2626')
    + `</div>`;
}

function _gicaEmpTableAttemptDots(e) {
  const dot = (color, title) => `<span title="${escapeHtml(title)}" style="display:inline-block;width:9px;height:9px;border-radius:50%;background:${color};"></span>`;
  const items = (e.history || []).slice(-12).map(h => {
    const passed = h.grade1 && h.grade2 && e.exp1 && e.exp2 &&
      (GICA_GRADE_RANK[h.grade1] || 0) >= (GICA_GRADE_RANK[e.exp1] || 0) &&
      (GICA_GRADE_RANK[h.grade2] || 0) >= (GICA_GRADE_RANK[e.exp2] || 0);
    const title = `Attempt ${h.n}${h.date ? ' · ' + _gicaFmtDate(h.date) : ''} — ${passed ? 'Pass' : 'Fail'}`;
    return { html: dot(passed ? '#16a34a' : '#dc2626', title), monthKey: h.date ? h.date.slice(0, 7) : null };
  });
  while (items.length < 12) items.push({ html: dot('var(--border-light)', 'ยังไม่สอบ'), monthKey: null });

  // Consecutive attempts in the same calendar month get a connecting ring around them.
  const groups = [];
  items.forEach(it => {
    const prev = groups[groups.length - 1];
    if (prev && it.monthKey && prev.monthKey === it.monthKey) prev.items.push(it);
    else groups.push({ monthKey: it.monthKey, items: [it] });
  });
  const groupHtml = groups.map(g => {
    if (g.items.length < 2) return g.items[0].html;
    return `<span title="Assessments in the same month (${g.items.length} attempts)" style="display:inline-flex;align-items:center;gap:3px;padding:2px 4px;border:1.3px solid var(--text-muted);border-radius:999px;">${g.items.map(it => it.html).join('')}</span>`;
  }).join('');
  return `<div style="display:flex;gap:3px;justify-content:flex-start;align-items:center;">${groupHtml}</div>`;
}

// Front-facing "Assessment Result" cell — one dot per expected testing checkpoint in a
// year (12 / freqMonths, e.g. freq=3 → 4 dots, freq=1 → 12 dots), each dot representing
// a calendar month (month-of-year) rather than an attempt index. When this person has
// tested more than once in the same month, the dot shows that month's LATEST result.
// Clicking opens the full per-attempt history (_gicaEmpTableAttemptDots) in a modal.
const GICA_MONTH_ABBR_TH = ['ม.ค.','ก.พ.','มี.ค.','เม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'];
function _gicaEmpTableMonthDots(e) {
  const freq    = e.freqMonths || 12;
  const numDots = Math.max(1, Math.min(12, Math.round(12 / freq)));

  // Group history by calendar month-of-year (1-12); keep only the latest attempt per month.
  const byMonth = {};
  (e.history || []).forEach(h => {
    if (!h.date) return;
    const m = parseInt(h.date.slice(5, 7), 10);
    if (!byMonth[m] || h.date > byMonth[m].date) byMonth[m] = h;
  });
  const monthEntries = Object.values(byMonth).sort((a, b) => a.date.localeCompare(b.date));
  const recent = monthEntries.slice(-numDots);
  const padCount = numDots - recent.length;

  const dot = (color, title) => `<span title="${escapeHtml(title)}" style="display:inline-block;width:9px;height:9px;border-radius:50%;background:${color};"></span>`;
  const dots = [];
  recent.forEach(h => {
    const passed = h.grade1 && h.grade2 && e.exp1 && e.exp2 &&
      (GICA_GRADE_RANK[h.grade1] || 0) >= (GICA_GRADE_RANK[e.exp1] || 0) &&
      (GICA_GRADE_RANK[h.grade2] || 0) >= (GICA_GRADE_RANK[e.exp2] || 0);
    const m = parseInt(h.date.slice(5, 7), 10);
    const title = `${GICA_MONTH_ABBR_TH[m - 1]} · ${_gicaFmtDate(h.date)} — ${passed ? 'Pass' : 'Fail'}`;
    dots.push(dot(passed ? '#16a34a' : '#dc2626', title));
  });
  // Pad after the real dots (not before) so colored dots always start at the left edge.
  for (let i = 0; i < padCount; i++) dots.push(dot('var(--border-light)', 'Not yet assessed'));

  return `<div class="gica-month-dots" data-empid="${escapeHtml(e.empid || '')}" title="Click to view assessment history" style="display:flex;gap:3px;justify-content:flex-start;align-items:center;cursor:pointer;">${dots.join('')}</div>`;
}

function _gicaShowAttemptDotsModal(empid) {
  const e = (_gicaData.employees || []).find(x => String(x.empid) === String(empid));
  if (!e) return;
  const modal = $('gica-attempt-dots-modal');
  const title = $('gica-attempt-dots-title');
  const body  = $('gica-attempt-dots-body');
  if (!modal || !body) return;
  if (title) {
    title.innerHTML = `
      <small class="gica-modal__close" style="padding:0; background:transparent; cursor:default; display:block; margin-bottom:4px;">
        Assessment History
      </small>
      
      <strong class="exp-modal-table" style="font-size: 0.85rem; color: var(--text); display: block; font-weight: 900;">
        ${escapeHtml(e.name || e.empid || '')}
      </strong>
    `;
  }
  
  body.innerHTML = _gicaEmpTableAttemptDots(e);
  modal.classList.remove('hidden');
}

function _gicaEmpTableHtml(rows, opts = {}) {
  const sortable = opts.sortable !== false;
  const editable = !!opts.editable;
  const st = _gicaTableState;
  const arrow = k => sortable && st.sortKey === k ? (st.sortDir === 1 ? ' ▲' : ' ▼') : '';
  const TH = (k, label, extra = '') => sortable
    ? `<th onclick="_gicaSort('${k}')" style="padding:8px 10px;font-size:0.74rem;font-weight:600;color:var(--text-muted);text-align:left;border-bottom:2px solid var(--border-light);cursor:pointer;white-space:nowrap;${extra}">${label}${arrow(k)}</th>`
    : `<th style="padding:8px 10px;font-size:0.74rem;font-weight:600;color:var(--text-muted);text-align:left;border-bottom:2px solid var(--border-light);white-space:nowrap;${extra}">${label}</th>`;
  const TD = 'padding:7px 10px;font-size:0.8rem;color:var(--text);border-bottom:1px solid var(--border-light);';

  const gradeCell = (g, s) => g
    ? `${_gicaGradeBadge(g)}<span style="font-size:0.68rem;color:var(--text-muted);margin-left:3px;">${s != null ? Math.round(s * 100) + '%' : ''}</span>`
    : '<span style="color:var(--text-muted);">—</span>';

  return `
    <div class="gica-emp-table-wrap" style="overflow-x:auto;"><table class="gica-emp-table" style="width:100%;border-collapse:collapse;min-width:1100px;">
      <thead><tr>
        ${TH('bu', 'BU')}
        ${TH('empid', 'Employee ID')}
        ${TH('name', 'Employee Name')}
        ${TH('deptname', 'Department')}
        ${TH('level', 'Level', 'text-align:center;')}
        ${TH('grade1', 'Measurement Result', 'text-align:center;')}
        ${TH('grade2', 'Inspection Result', 'text-align:center;')}
        ${TH('attempt', 'Attempt', 'text-align:center;')}
        ${TH('lastDate', 'Assessment Date', 'text-align:center;')}
        ${TH('passed', 'Assessment Result', 'text-align:center;')}
        ${TH('nextDate', 'Next Assessment Date', 'text-align:center;')}
        ${TH('nextDate', 'Days Remaining', 'text-align:center;')}
        ${TH('nextType', 'Status', 'text-align:center;')}
      </tr></thead>
      <tbody>
        ${rows.length === 0
          ? `<tr><td colspan="13" style="${TD}text-align:center;color:var(--text-muted);padding:20px;">ไม่พบข้อมูล</td></tr>`
          : rows.map(e => `<tr>
          <td style="${TD}">${escapeHtml(e.bu)}</td>
          <td style="${TD}">${escapeHtml(e.empid || '')}</td>
          <td style="${TD}${editable ? 'cursor:pointer;color:var(--primary, #6366f1);text-decoration:underline;' : ''}"${editable ? ` class="gica-emp-name-cell" data-empid="${escapeHtml(e.empid || '')}" data-bu="${escapeHtml(e.bu || '')}" title="คลิกเพื่อบันทึกผลสอบ"` : ''}>${escapeHtml(e.name)}</td>
          <td style="${TD}">${escapeHtml(e.deptname)}</td>
          <td style="${TD}">${escapeHtml(e.level || '')}</td>
          <td style="${TD}text-align:center;">${gradeCell(e.grade1, e.score1)}</td>
          <td style="${TD}text-align:center;">${gradeCell(e.grade2, e.score2)}</td>
          <td style="${TD}text-align:center;">${e.attempt}</td>
          <td style="${TD}text-align:center;">${_gicaFmtDate(e.lastDate)}</td>
          <td style="${TD}text-align:center;">${_gicaEmpTableMonthDots(e)}</td>
          <td style="${TD}text-align:center;">${_gicaFmtDate(e.nextDate)}</td>
          <td style="${TD}text-align:center;">${_gicaDaysBadge(e.nextDate)}</td>
          <td style="${TD}text-align:center;">${_gicaTypeBadge(e.nextType)}</td>
        </tr>`).join('')}
      </tbody>
    </table></div>`;
}

function _gicaFilteredEmployees() {
  const f = _gicaTableState.filters;
  const q = f.search.trim().toLowerCase();
  let rows = (_gicaData.employees || []).filter(e => {
    if (f.bu && e.bu !== f.bu) return false;
    if (f.grade && e.grade !== f.grade) return false;
    if (f.dept && e.deptname !== f.dept) return false;
    if (f.level && e.level !== f.level) return false;
    if (f.type && e.nextType !== f.type) return false;
    if (q && !(`${e.name} ${e.empid}`.toLowerCase().includes(q))) return false;
    return true;
  });
  const { sortKey, sortDir } = _gicaTableState;
  rows.sort((a, b) => {
    let av = a[sortKey], bv = b[sortKey];
    if (sortKey === 'grade' || sortKey === 'grade1' || sortKey === 'grade2') {
      av = GICA_GRADE_RANK[av] || 0; bv = GICA_GRADE_RANK[bv] || 0;
    } else if (sortKey === 'score' || sortKey === 'attempt') { av = av || 0; bv = bv || 0; }
    else if (sortKey === 'passed') { av = av === true ? 1 : av === false ? 0 : -1; bv = bv === true ? 1 : bv === false ? 0 : -1; }
    if (av == null) av = ''; if (bv == null) bv = '';
    if (typeof av === 'string' && typeof bv === 'string') return sortDir * av.localeCompare(bv);
    return sortDir * (av > bv ? 1 : av < bv ? -1 : 0);
  });
  return rows;
}
window._gicaSort = function (key) {
  const st = _gicaTableState;
  if (st.sortKey === key) st.sortDir *= -1; else { st.sortKey = key; st.sortDir = 1; }
  st.page = 1;
  renderGicaTable();
};
function renderGicaTable() {
  const wrap = $('gica-table');
  if (!wrap) return;
  const rows  = _gicaFilteredEmployees();
  const st    = _gicaTableState;
  const total = rows.length;
  const pages = Math.max(1, Math.ceil(total / st.pageSize));
  if (st.page > pages) st.page = pages;
  const start = (st.page - 1) * st.pageSize;
  const pageRows = rows.slice(start, start + st.pageSize);

  const statsEl = $('gica-failStats');
  if (statsEl) statsEl.innerHTML = _gicaFailStatsHtml(rows);

  const editable = ['qe_user', 'admin'].includes(currentRole);
  wrap.innerHTML = _gicaEmpTableHtml(pageRows, { sortable: true, editable });
  if (editable) _wireGicaEmpNameClicks(wrap);

  const rangeEl = $('gica-rangeLabel');
  if (rangeEl) rangeEl.textContent = total ? `${start + 1}–${Math.min(start + st.pageSize, total)} จาก ${total}` : '0 รายการ';
  const pageEl = $('gica-pageLabel');
  if (pageEl) pageEl.textContent = `${st.page} / ${pages}`;
}

function _wireGicaEmpNameClicks(wrap) {
  wrap.querySelectorAll('.gica-emp-name-cell[data-empid]').forEach(td => {
    td.addEventListener('click', () => _gicaOpenResultModal(td.dataset.bu, td.dataset.empid));
  });
}

// ── Generic Yes/No confirm overlay — reused by the Result and Create modals ───
function _gicaConfirm(text, onYes) {
  const overlay = $('gica-confirm-overlay');
  const textEl  = $('gica-confirm-text');
  const yesBtn  = $('gica-confirm-yes');
  const noBtn   = $('gica-confirm-no');
  if (!overlay || !textEl || !yesBtn || !noBtn) { onYes && onYes(); return; }
  textEl.textContent = text;
  overlay.classList.remove('hidden');
  const cleanup = () => {
    overlay.classList.add('hidden');
    yesBtn.onclick = null;
    noBtn.onclick  = null;
  };
  yesBtn.onclick = () => { cleanup(); onYes && onYes(); };
  noBtn.onclick  = cleanup;
}

// Re-fetch GICA data without re-running initGicaTab() (which would re-wire the
// subtab buttons a second time) — used to reflect a just-saved write immediately.
async function _gicaRefreshData() {
  try {
    const res = await fetch('/api/gica-excel');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (data.error) throw new Error(data.error);
    _gicaData = data;
  } catch (err) {
    console.error('[GICA] refresh after save failed', err);
  }
}

// ── Add/Edit Result modal (existing employee → next attempt slot) ─────────────
let _gicaResultCtx = null; // { bu, empid }

function _gicaOpenResultModal(bu, empid) {
  _gicaResultCtx = { bu, empid };
  const emp = (_gicaData.employees || []).find(e => e.bu === bu && String(e.empid) === String(empid));
  const title = $('gica-result-title');
  if (title) title.textContent = `${emp ? emp.name : empid} — Add Assessment Result`;
  $('gica-result-meas').value = '';
  $('gica-result-insp').value = '';
  $('gica-result-date').value = '';
  $('gica-result-error').classList.add('hidden');
  $('gica-result-modal').classList.remove('hidden');
}
function _gicaCloseResultModal() {
  $('gica-result-modal').classList.add('hidden');
}

function _gicaValidateResultForm() {
  const errEl = $('gica-result-error');
  const meas = $('gica-result-meas').value;
  const insp = $('gica-result-insp').value;
  const date = $('gica-result-date').value;
  if (meas === '' || insp === '' || !date) {
    errEl.textContent = 'กรุณากรอกข้อมูลให้ครบทุกช่อง';
    errEl.classList.remove('hidden');
    return null;
  }
  errEl.classList.add('hidden');
  return { meas, insp, date };
}

// Closes the modal and shows a "saving" toast IMMEDIATELY on Yes — waiting for the
// PATCH to resolve before giving any feedback made it look stuck, so people clicked
// Confirm again and submitted the same result twice.
async function _gicaSaveResult(fields) {
  const { bu, empid } = _gicaResultCtx;
  _gicaCloseResultModal();
  _gicaShowToast('กำลังบันทึกข้อมูล...');
  try {
    await api(`/api/gica/${bu}/employees/${empid}/result`, {
      method: 'PATCH',
      body: JSON.stringify({
        measurementResult: Number(fields.meas),
        inspectionResult: Number(fields.insp),
        assessmentDate: fields.date,
      }),
    });
    await _gicaRefreshData();
    renderGicaTable();
    _gicaShowToast('บันทึกข้อมูลแล้ว');
  } catch (err) {
    _gicaShowToast(`บันทึกไม่สำเร็จ: ${err.message || ''}`);
  }
}

// GICA tab lives in its own container, separate from #messageBox (which only
// exists inside the New Operator dashboard and is hidden while on this tab) —
// so a small self-contained toast is used here instead of showMessage().
function _gicaShowToast(text) {
  let toast = document.getElementById('gica-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'gica-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = text;
  toast.classList.add('gica-toast--show');
  clearTimeout(toast._hideTimer);
  toast._hideTimer = setTimeout(() => toast.classList.remove('gica-toast--show'), 2500);
}

function _wireGicaResultModal() {
  $('gica-result-close')?.addEventListener('click', _gicaCloseResultModal);
  $('gica-result-backdrop')?.addEventListener('click', _gicaCloseResultModal);
  $('gica-result-cancel')?.addEventListener('click', () => {
    _gicaConfirm('Cancel this entry?', () => {
      $('gica-result-meas').value = '';
      $('gica-result-insp').value = '';
      $('gica-result-date').value = '';
      _gicaCloseResultModal();
    });
  });
  $('gica-result-confirm')?.addEventListener('click', () => {
    const fields = _gicaValidateResultForm();
    if (!fields) return; // empty field — don't even show the confirm dialog
    _gicaConfirm('Save this record?', () => _gicaSaveResult(fields));
  });
}

// ── Create new operator modal (brand-new GICA employee row) ───────────────────
// Department/Level/Position dropdowns are sourced from Table_freq so a new
// employee can only be assigned combinations that Table_freq actually defines
// an expectation for.
function _gicaPopulateCreateDropdowns() {
  const freq    = _gicaData.freqTable || [];
  const buSel   = $('gica-create-bu');
  const deptSel = $('gica-create-dept');
  const lvlSel  = $('gica-create-level');
  const posSel  = $('gica-create-position');
  if (!buSel || !deptSel || !lvlSel || !posSel) return;

  buSel.innerHTML = BU_ORDER.map(bu => `<option value="${escapeHtml(bu)}">${escapeHtml(bu)}</option>`).join('');

  const opt = v => `<option value="${escapeHtml(v)}">${escapeHtml(v)}</option>`;
  const placeholder = `<option value="">— เลือก —</option>`;

  const depts = [...new Set(freq.map(r => r.department).filter(Boolean))].sort();
  deptSel.innerHTML = placeholder + depts.map(opt).join('');

  const levels = [...new Set(freq.map(r => r.level).filter(Boolean))].sort((a, b) => {
    const ia = GICA_LEVEL_ORDER.indexOf(a), ib = GICA_LEVEL_ORDER.indexOf(b);
    if (ia !== ib) return (ia === -1 ? 1 : ib === -1 ? -1 : ia - ib);
    return a.localeCompare(b);
  });
  lvlSel.innerHTML = placeholder + levels.map(opt).join('');

  const roles = [...new Set(freq.map(r => r.role).filter(Boolean))].sort();
  posSel.innerHTML = placeholder + roles.map(opt).join('');
}

function _gicaOpenCreateModal() {
  _gicaPopulateCreateDropdowns();
  $('gica-create-empid').value = '';
  $('gica-create-name').value = '';
  $('gica-create-startdate').value = '';
  $('gica-create-error').classList.add('hidden');
  $('gica-create-modal').classList.remove('hidden');
}
function _gicaCloseCreateModal() {
  $('gica-create-modal').classList.add('hidden');
}
function _gicaClearCreateForm() {
  $('gica-create-empid').value = '';
  $('gica-create-name').value = '';
  $('gica-create-startdate').value = '';
}

function _gicaValidateCreateForm() {
  const errEl     = $('gica-create-error');
  const bu        = $('gica-create-bu').value;
  const empid     = $('gica-create-empid').value.trim();
  const name      = $('gica-create-name').value.trim();
  const dept      = $('gica-create-dept').value;
  const level     = $('gica-create-level').value;
  const position  = $('gica-create-position').value;
  const startDate = $('gica-create-startdate').value;

  if (!bu || !empid || !/^\d+$/.test(empid) || !name || !dept || !level || !position || !startDate) {
    errEl.textContent = 'กรุณากรอกข้อมูลให้ครบและถูกต้องทุกช่อง (Employee ID ต้องเป็นตัวเลข)';
    errEl.classList.remove('hidden');
    return null;
  }
  errEl.classList.add('hidden');
  return { bu, empid, name, dept, level, position, startDate };
}

// Closes the modal and shows a "saving" toast IMMEDIATELY on Yes — see _gicaSaveResult
// for why (waiting for the response before any feedback caused double-submits).
async function _gicaSaveCreate(fields) {
  _gicaCloseCreateModal();
  _gicaShowToast('กำลังบันทึกข้อมูล...');
  try {
    await api(`/api/gica/${fields.bu}/employees`, {
      method: 'POST',
      body: JSON.stringify({
        empid: fields.empid, name: fields.name, deptname: fields.dept,
        level: fields.level, position: fields.position, start_date: fields.startDate,
      }),
    });
    await _gicaRefreshData();
    renderGicaTable();
    _gicaShowToast('บันทึกข้อมูลแล้ว');
  } catch (err) {
    _gicaShowToast(`บันทึกไม่สำเร็จ: ${err.message || ''}`);
  }
}

function _wireGicaCreateModal() {
  $('gica-create-operator-btn')?.addEventListener('click', _gicaOpenCreateModal);
  $('gica-create-close')?.addEventListener('click', _gicaCloseCreateModal);
  $('gica-create-backdrop')?.addEventListener('click', _gicaCloseCreateModal);
  $('gica-create-cancel')?.addEventListener('click', () => {
    _gicaConfirm('Cancel this entry?', () => {
      _gicaClearCreateForm();
      _gicaCloseCreateModal();
    });
  });
  $('gica-create-confirm')?.addEventListener('click', () => {
    const fields = _gicaValidateCreateForm();
    if (!fields) return; // empty/invalid field — don't even show the confirm dialog
    _gicaConfirm('Save this record?', () => _gicaSaveCreate(fields));
  });
}

function _gicaShowBuCohortModal(bu, employees) {
  const modal = $('gica-buCohort-modal');
  const title = $('gica-buCohort-title');
  const body  = $('gica-buCohort-body');
  if (!modal || !body) return;
  if (title) title.textContent = `${bu} — Must attend training this week (${employees.length} people)`;
  body.innerHTML = `${_gicaFailStatsHtml(employees)}<div class="gica-drill-table-wrap">${_gicaEmpTableHtml(employees, { sortable: false })}</div>`;
  modal.classList.remove('hidden');
  modal._cohortBu = bu;
  modal._cohortEmployees = employees;
}

function _gicaBuCohortPrint() {
  const modal = $('gica-buCohort-modal');
  if (!modal || !modal._cohortEmployees) return;
  const rows = modal._cohortEmployees;
  const overlay = document.getElementById('gica-print-overlay') || (() => {
    const el = document.createElement('div');
    el.id = 'gica-print-overlay';
    document.body.appendChild(el);
    return el;
  })();
  const printDate = new Date().toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' });
  overlay.innerHTML = `
    <div class="gica-print-header">
      <div style="font-size:1rem;font-weight:700;">Employee List for GICA Assessment — ${escapeHtml(modal._cohortBu)}</div>
      <div style="font-size:0.78rem;color:#555;margin-top:3px;">Must attend training this week · Total: ${rows.length} employees · Report Date: ${printDate}</div>
    </div>
    ${_gicaFailStatsHtml(rows)}
    <div class="gica-drill-table-wrap">${_gicaEmpTableHtml(rows, { sortable: false })}</div>`;
  document.body.classList.add('print-mode');
  window.print();
  document.body.classList.remove('print-mode');
  overlay.innerHTML = '';
}

// ── Wire controls (once) ──────────────────────────────────────────────────────
function _wireGicaControls() {
  const emps = _gicaData.employees || [];

  // Filter dropdowns
  const fillSelect = (id, values) => {
    const sel = $(id);
    if (!sel) return;
    const first = sel.options[0];
    sel.innerHTML = '';
    sel.appendChild(first);
    values.forEach(v => {
      const o = document.createElement('option');
      o.value = v; o.textContent = v;
      sel.appendChild(o);
    });
  };
  fillSelect('gica-filterBu', sortBus(_gicaData.bus || []));
  fillSelect('gica-filterGrade', GICA_GRADES);
  fillSelect('gica-filterDept', [...new Set(emps.map(e => e.deptname).filter(Boolean))].sort());
  fillSelect('gica-filterLevel', GICA_LEVEL_ORDER.filter(lv => emps.some(e => e.level === lv)));
  fillSelect('gica-filterType', ['Retest', 'Review']);

  const bind = (id, key) => {
    const el = $(id);
    if (el) el.onchange = () => { _gicaTableState.filters[key] = el.value; _gicaTableState.page = 1; renderGicaTable(); };
  };
  bind('gica-filterBu', 'bu');
  bind('gica-filterGrade', 'grade');
  bind('gica-filterDept', 'dept');
  bind('gica-filterLevel', 'level');
  bind('gica-filterType', 'type');
  const searchEl = $('gica-filterSearch');
  if (searchEl) searchEl.oninput = () => { _gicaTableState.filters.search = searchEl.value; _gicaTableState.page = 1; renderGicaTable(); };

  // Pagination
  const sizeEl = $('gica-pageSize');
  if (sizeEl) sizeEl.onchange = () => { _gicaTableState.pageSize = +sizeEl.value; _gicaTableState.page = 1; renderGicaTable(); };
  const prevEl = $('gica-prevPage');
  if (prevEl) prevEl.onclick = () => { if (_gicaTableState.page > 1) { _gicaTableState.page--; renderGicaTable(); } };
  const nextEl = $('gica-nextPage');
  if (nextEl) nextEl.onclick = () => {
    const pages = Math.max(1, Math.ceil(_gicaFilteredEmployees().length / _gicaTableState.pageSize));
    if (_gicaTableState.page < pages) { _gicaTableState.page++; renderGicaTable(); }
  };

}

// =============================================================================

init().catch(err => {
  console.error(err);
  show($('loginPanel'));
  startLoginParticles();
});
