// ===== TRANSLATIONS =====
const TRANSLATIONS = {
  th: {
    appTitle:               'CSA Dashboard',
    appSubtitle:            'Center of Skill Acquisition',
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
    managerModeBadge:       'CSA Manager',
    managerLoginFailed:     'ไม่สามารถเข้าสู่ระบบ CSA Manager ได้',
    tabNewOperator:         'New Operator',
    tabJumper:              'Jumper',
    tabTrainer:             'CSA Trainer',
    tabSewingOperator:      'Sewing Operator',
    tabComingSoon:          'อยู่ระหว่างพัฒนา กรุณารอสักครู่...',
  },
  en: {
    appTitle:               'CSA Dashboard',
    appSubtitle:            'Center of Skill Acquisition',
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
    managerModeBadge:       'CSA Manager',
    managerLoginFailed:     'Could not sign in as CSA Manager',
    tabNewOperator:         'New Operator',
    tabJumper:              'Jumper',
    tabTrainer:             'CSA Trainer',
    tabSewingOperator:      'Sewing Operator',
    tabComingSoon:          'Under development, please wait...',
  },
  lo: {
    appTitle:               'CSA Dashboard',
    appSubtitle:            'Center of Skill Acquisition',
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
    managerModeBadge:       'CSA Manager',
    managerLoginFailed:     'ບໍ່ສາມາດເຂົ້າສູ່ລະບົບ CSA Manager ໄດ້',
    tabNewOperator:         'New Operator',
    tabJumper:              'Jumper',
    tabTrainer:             'CSA Trainer',
    tabSewingOperator:      'Sewing Operator',
    tabComingSoon:          'ກຳລັງພັດທະນາ ກະລຸນາລໍຖ້າ...',
  },
  vi: {
    appTitle:               'CSA Dashboard',
    appSubtitle:            'Center of Skill Acquisition',
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
    managerModeBadge:       'CSA Manager',
    managerLoginFailed:     'Không thể đăng nhập CSA Manager',
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
    // Refresh role badge text when language changes
    if (currentRole === 'manager') {
      const badge = $('roleBadge');
      if (badge) badge.textContent = t('managerModeBadge');
    }
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
  if (!res.ok) throw new Error(data.error || `Request failed: ${res.status}`);
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
    if (err.message && err.message.includes('login_required')) {
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

  const query = getHolidayQuery();
  const results = await Promise.allSettled(
    departments.map(dep =>
      api(`/api/${dep.key}/employees${query ? '?' + query : ''}`)
        .then(data => ({ key: dep.key, employees: data.employees || [] }))
    )
  );

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

function initTabBar() {
  const TAB_IDS = ['newOperator', 'jumper', 'trainer', 'sewingOperator'];
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

async function init() {
  initTheme();
  initLang();
  initTabBar();
  syncTabBarTop();
  window.addEventListener('resize', syncTabBarTop);
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

  // Manager-login button: opens a view-only session w/o password
  const managerBtn = $('managerLoginBtn');
  if (managerBtn) {
    managerBtn.onclick = async () => {
      managerBtn.disabled = true;
      // Clear any prior error
      const errEl = $('managerLoginError');
      if (errEl) { errEl.textContent = ''; errEl.classList.add('hidden'); }
      try {
        await api('/manager-login', { method: 'POST' });
        window.location.reload();
      } catch (err) {
        managerBtn.disabled = false;
        const msg = err.message || t('managerLoginFailed');
        // Show inline on the login panel (messageBox is in dashboard which is hidden here)
        if (errEl) {
          errEl.textContent = msg;
          errEl.classList.remove('hidden');
        } else {
          showMessage(msg, true);
        }
      }
    };
  }

  // Check auth
  const me = await api('/api/me');
  if (!me.authenticated) {
    show($('loginPanel'));
    startLoginParticles();
    return;
  }

  currentUser = me.user;
  currentRole = me.role || 'user';

  // Apply view-only mode for CSA Manager sessions — hides all write controls
  if (currentRole === 'manager') {
    document.body.classList.add('view-only');
    const badge = $('roleBadge');
    if (badge) {
      badge.textContent = t('managerModeBadge');
      badge.classList.remove('hidden');
    }
  }

  $('authBox').innerHTML = `${t('signedIn')} · <a href="/logout">${t('logout')}</a>`;
  show($('mainTabBar'));
  // Admin panel is a write surface (holidays) — hide it for managers
  if (currentRole !== 'manager') show($('adminBtn'));

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

function renderJumperSummaryCards() {
  const allRows = _jumperRows;
  const bus     = sortBus(Object.keys(_jumperByBu));
  const sewOpByBu = _jumperSewOp || {};

  const totalAll    = allRows.length;
  const centerAll   = allRows.filter(r => r.position === JUMPER_POSITIONS[0]).length;
  const inlineAll   = allRows.filter(r => r.position === JUMPER_POSITIONS[1]).length;
  const avgSkillAll = totalAll ? (allRows.reduce((s, r) => s + r.skill, 0) / totalAll).toFixed(1) : '0';
  const expiredAll  = allRows.filter(r => r.expired > 0).length;

  let centerTarget = 0, inlineTarget = 0;
  bus.forEach(bu => {
    centerTarget += Math.round((sewOpByBu[bu] || []).length * 0.025);
    inlineTarget += Math.round((sewOpByBu[bu] || []).length * 0.05);
  });
  const centerFilled  = centerTarget > 0 ? Math.min(100, Math.round(centerAll / centerTarget * 100)) : 0;
  const inlineFilled  = inlineTarget  > 0 ? Math.min(100, Math.round(inlineAll / inlineTarget  * 100)) : 0;

  const buStats = bus.map((bu, i) => {
    const bRows      = allRows.filter(r => r.bu === bu);
    const bCenter    = bRows.filter(r => r.position === JUMPER_POSITIONS[0]).length;
    const bInline    = bRows.filter(r => r.position === JUMPER_POSITIONS[1]).length;
    const bSewCnt    = (sewOpByBu[bu] || []).length;
    const bCenterTgt = Math.round(bSewCnt * 0.025);
    const bInlineTgt = Math.round(bSewCnt * 0.05);
    return {
      bu, total: bRows.length,
      center: bCenter, centerTgt: bCenterTgt,
      centerPct: bCenterTgt > 0 ? Math.min(100, Math.round(bCenter / bCenterTgt * 100)) : 0,
      inline: bInline,  inlineTgt: bInlineTgt,
      inlinePct:  bInlineTgt  > 0 ? Math.min(100, Math.round(bInline  / bInlineTgt  * 100)) : 0,
      avgSkill: bRows.length ? (bRows.reduce((s, r) => s + r.skill, 0) / bRows.length).toFixed(1) : '0',
      expired: bRows.filter(r => r.expired > 0).length,
      color: JUMPER_COLORS[i % JUMPER_COLORS.length],
    };
  });

  const pBar = (pct, color) => `
    <div style="background:#e5e7eb;border-radius:999px;height:6px;overflow:hidden;">
      <div style="background:${pct >= 100 ? '#16a34a' : color};width:${pct}%;height:100%;border-radius:999px;transition:width .3s;"></div>
    </div>`;

  const CARD = 'background:var(--surface);border-radius:10px;box-shadow:0 1px 3px var(--shadow);display:flex;flex-direction:column;padding:16px;box-sizing:border-box;';
  const LBL  = 'font-size:0.85rem;color:var(--text-muted);';
  const VAL  = 'font-size:1.8rem;font-weight:700;margin-top:4px;';

  const container = document.getElementById('jtp-summary');
  if (!container) return;
  container.style.cssText = 'display:flex;flex-direction:column;gap:12px;';
  const jtpTip = (html) => `<div class="crd-tip"><span class="crd-tip-i">ℹ</span><div class="crd-tip-box">${html}</div></div>`;
  container.innerHTML = `
    <!-- Row 1: 5 overview cards -->
    <div class="jtp-row1">
      <div style="${CARD}min-height:100px;">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:4px;">
          <div style="${LBL}">Jumper ทั้งหมด</div>
          ${jtpTip('จำนวน Jumper ทั้งหมดในทุก BU<br><span style="color:var(--text-muted)">นับทุก record ใน Jumper table</span>')}
        </div>
        <div style="${VAL}">${totalAll}</div>
      </div>
      <div style="${CARD}min-height:100px;display:flex;flex-direction:column;">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px;">
          <div style="${LBL}">Jumper Center</div>
          ${jtpTip('Jumper ตำแหน่ง Center<br><span style="color:var(--text-muted)">Target: 2.5% × จำนวน Sewing Operator ต่อ BU</span>')}
        </div>
        <div style="font-size:1.6rem;font-weight:700;margin-bottom:6px;">${centerAll}</div>
        ${centerTarget > 0 ? `<div style="margin-top:auto;">
          ${pBar(centerFilled, '#2563eb')}
          <div style="display:flex;justify-content:space-between;font-size:0.72rem;color:var(--text-muted);margin-top:4px;">
            <span>${centerFilled}%</span><span>Target: ${centerTarget}</span>
          </div>
        </div>` : ''}
      </div>
      <div style="${CARD}min-height:100px;display:flex;flex-direction:column;">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px;">
          <div style="${LBL}">Jumper Inline</div>
          ${jtpTip('Jumper ตำแหน่ง Inline<br><span style="color:var(--text-muted)">Target: 5.0% × จำนวน Sewing Operator ต่อ BU</span>')}
        </div>
        <div style="font-size:1.6rem;font-weight:700;margin-bottom:6px;">${inlineAll}</div>
        ${inlineTarget > 0 ? `<div style="margin-top:auto;">
          ${pBar(inlineFilled, '#16a34a')}
          <div style="display:flex;justify-content:space-between;font-size:0.72rem;color:var(--text-muted);margin-top:4px;">
            <span>${inlineFilled}%</span><span>Target: ${inlineTarget}</span>
          </div>
        </div>` : ''}
      </div>
      <div style="${CARD}min-height:100px;">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:4px;">
          <div style="${LBL}">Avg. Skill Score / Person</div>
          ${jtpTip('ค่าเฉลี่ย Skill Count ต่อ 1 คน<br><span style="color:var(--text-muted)">avg ของ Skill Count ของทุก Jumper</span>')}
        </div>
        <div style="${VAL}">${avgSkillAll}</div>
      </div>
      <div style="${CARD}min-height:100px;">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:4px;">
          <div style="${LBL}">Skill Expired</div>
          ${jtpTip('จำนวน Jumper ที่มี Skill หมดอายุ อย่างน้อย 1 รายการ<br><span style="color:var(--text-muted)">นับ Jumper ที่ Expired Count > 0</span>')}
        </div>
        <div style="${VAL}${expiredAll > 0 ? 'color:#dc2626;' : ''}">${expiredAll}</div>
      </div>
    </div>

    <!-- Row 2 + Row 3: BU mini-cards + Training Progress donuts (combined section) -->
    <div style="display:flex;flex-direction:column;gap:10px;">
    <div class="jtp-row2">
      ${buStats.map(s => `
      <div style="${CARD}min-width:0;">
        <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:8px;">
          <span style="font-size:1.05rem;font-weight:700;color:${s.color};">${escapeHtml(s.bu)}</span>
          <span style="font-size:0.82rem;color:var(--text-muted);">${s.total} คน</span>
        </div>
        <div style="margin-bottom:5px;">
          <div style="display:flex;justify-content:space-between;font-size:0.7rem;color:var(--text-muted);margin-bottom:2px;">
            <span>Center</span>
            <span style="font-weight:600;color:var(--text);">${s.centerTgt > 0 ? `${s.center}/${s.centerTgt}` : s.center}</span>
          </div>
          ${s.centerTgt > 0 ? pBar(s.centerPct, s.color) : ''}
        </div>
        <div style="margin-bottom:8px;">
          <div style="display:flex;justify-content:space-between;font-size:0.7rem;color:var(--text-muted);margin-bottom:2px;">
            <span>Inline</span>
            <span style="font-weight:600;color:var(--text);">${s.inlineTgt > 0 ? `${s.inline}/${s.inlineTgt}` : s.inline}</span>
          </div>
          ${s.inlineTgt > 0 ? pBar(s.inlinePct, hexToRgba(s.color, 0.6)) : ''}
        </div>
        <div style="font-size:0.7rem;color:var(--text-muted);border-top:1px solid var(--border-light);padding-top:6px;margin-top:auto;">
          <div style="display:flex;justify-content:space-between;margin-bottom:2px;">
            <span>Skill avg</span><strong style="color:var(--text);">${s.avgSkill}</strong>
          </div>
          <div style="display:flex;justify-content:space-between;">
            <span>Expired</span><strong style="${s.expired > 0 ? 'color:#dc2626;' : 'color:var(--text);'}">${s.expired}</strong>
          </div>
        </div>
      </div>`).join('')}
    </div>

    <!-- Row 3: Training Progress donuts — filled by JT_PROD.init() -->
    <div id="jtp-row3" class="jtp-row3"></div>
    </div>`;

  JT_PROD.init(bus, allRows);
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

function renderTrainerSummaryCards(data) {
  const { bus, productTypes, coverage } = _trainerCoverageData(data);
  const ptColorMap = {};
  productTypes.forEach((pt, i) => { ptColorMap[pt] = TRAINER_PT_COLORS[i % TRAINER_PT_COLORS.length]; });
  const allSkills      = Object.values(data.skills).flat();
  const trainedSkills  = allSkills.filter(r => (r.eff || 0) > 0);
  const totalTr     = data.trainers.length;
  const masterCount  = data.trainers.filter(t => t.status === 'Master Trainer').length;
  const certCount    = data.trainers.filter(t => t.status === 'Certified').length;
  const masterTarget = data.trainers.filter(t => t.position === 'Master Trainer').length;
  const certTarget   = totalTr;
  const masterFilled = masterTarget > 0 ? Math.min(100, Math.round(masterCount / masterTarget * 100)) : 0;
  const certFilled   = certTarget  > 0 ? Math.min(100, Math.round(certCount  / certTarget  * 100)) : 0;

  // Avg Qualified Rate / Person: avg of (qualified skills / total assigned skills) per trainer
  const trainerRates = data.trainers.map(t => {
    const sk = (data.skills[t.empid] || []);
    return sk.length ? sk.filter(r => (r.eff || 0) >= 75).length / sk.length * 100 : null;
  }).filter(v => v !== null);
  const avgSkill    = trainerRates.length
    ? (trainerRates.reduce((s, v) => s + v, 0) / trainerRates.length).toFixed(1) : '0.0';
  const avgPct = Math.min(100, parseFloat(avgSkill) || 0);

  // Expired: count trainers (persons) per BU that have ≥1 expired skill row
  const expiredAll  = data.trainers.filter(t => (data.skills[t.empid] || []).some(r => (r.eff || 0) > 0 && Number(r.expired) === 1)).length;
  const expiredByBu = {};
  data.trainers.forEach(t => {
    const hasExp = (data.skills[t.empid] || []).some(r => (r.eff || 0) > 0 && Number(r.expired) === 1);
    if (hasExp) expiredByBu[t.bu] = (expiredByBu[t.bu] || 0) + 1;
  });

  // Master Trainer breakdown by BU
  const masterByBu = {};
  data.trainers.filter(t => t.status === 'Master Trainer').forEach(t => {
    masterByBu[t.bu] = (masterByBu[t.bu] || 0) + 1;
  });

  const buStats = bus.map((bu, i) => {
    const trs       = data.trainers.filter(t => t.bu === bu);
    const buTrained = trs.flatMap(t => (data.skills[t.empid] || []).filter(r => (r.eff || 0) > 0));
    // Avg. Efficiency Pass Rate per BU: avg of (qualified/total assigned) per trainer
    const buRates = trs.map(t => {
      const sk = (data.skills[t.empid] || []);
      return sk.length ? sk.filter(r => (r.eff || 0) >= 75).length / sk.length * 100 : null;
    }).filter(v => v !== null);
    const bAvg = buRates.length
      ? (buRates.reduce((s, v) => s + v, 0) / buRates.length).toFixed(1) : '0.0';
    // Expired: number of persons with ≥1 expired skill
    const bExp = trs.filter(t => (data.skills[t.empid] || []).some(r => (r.eff || 0) > 0 && Number(r.expired) === 1)).length;
    const topPt    = productTypes
      .map(pt => ({ pt, pct: coverage[bu][pt] }))
      .filter(x => x.pct !== null)
      .sort((a, b) => b.pct - a.pct)
      .slice(0, 3);
    return {
      bu, color: JUMPER_COLORS[i % JUMPER_COLORS.length],
      total:      trs.length,
      master:     trs.filter(t => t.status === 'Master Trainer').length,
      certified:  trs.filter(t => t.status === 'Certified').length,
      onProgress: trs.filter(t => t.status === 'On-Progress').length,
      avgSkill: bAvg, expired: bExp, topPt,
    };
  });

  const CARD = 'background:var(--surface);border-radius:10px;box-shadow:0 1px 3px var(--shadow);display:flex;flex-direction:column;padding:16px;box-sizing:border-box;';
  const LBL  = 'font-size:0.85rem;color:var(--text-muted);';
  const VAL  = 'font-size:1.8rem;font-weight:700;margin-top:4px;';
  const pBar = (pct, color) => `
    <div style="background:var(--progress-track);border-radius:999px;height:5px;overflow:hidden;margin-top:3px;">
      <div style="background:${color};width:${pct}%;height:100%;border-radius:999px;transition:width .3s;"></div>
    </div>`;
  const ptColor = pct => pct >= 80 ? '#16a34a' : pct >= 60 ? '#22d3ee' : pct >= 30 ? '#f59e0b' : '#ef4444';

  const container = document.getElementById('trainer-summary');
  if (!container) return;
  container.style.cssText = 'display:flex;flex-direction:column;gap:12px;';
  const RSUB = (entries, color) => {
    if (!Object.keys(entries).length) return '';
    const rows = Object.entries(entries).map(([bu, n]) =>
      `<div style="display:flex;justify-content:space-between;gap:8px;white-space:nowrap;"><span>${escapeHtml(bu)}</span><strong style="color:${color};">${n}</strong></div>`
    ).join('');
    return `<div style="font-size:0.68rem;color:var(--text-muted);display:flex;flex-direction:column;gap:2px;justify-content:center;">${rows}</div>`;
  };

  const cardWithSub = (label, valHtml, subHtml) => `
    <div style="${CARD}">
      <div style="${LBL}">${label}</div>
      <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-top:4px;flex:1;">
        <div style="${VAL}margin-top:0;">${valHtml}</div>
        ${subHtml}
      </div>
    </div>`;

  const tip = (html) => `<div class="crd-tip"><span class="crd-tip-i">ℹ</span><div class="crd-tip-box">${html}</div></div>`;

  container.innerHTML = `
    <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:12px;">
      <div style="${CARD}">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:4px;">
          <div style="${LBL}">Total Trainer</div>
          ${tip('จำนวน Trainer ทั้งหมดในทีม<br><span style="color:var(--text-muted)">นับทุก record ใน TrainerListAll</span>')}
        </div>
        <div style="${VAL}">${totalTr}</div>
      </div>
      <div style="${CARD}min-height:100px;display:flex;flex-direction:column;">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px;">
          <div style="${LBL}">Master Trainer</div>
          ${tip('Trainer ที่ได้รับการรับรองระดับสูงสุด<br><span style="color:var(--text-muted)">ปัจจุบัน: Column <strong>Status</strong> = "Master Trainer"<br>Target: Column <strong>Position</strong> = "Master Trainer"</span>')}
        </div>
        <div style="flex:1;">
          <div style="font-size:1.6rem;font-weight:700;color:var(--purple);margin-bottom:6px;">${masterCount}</div>
          ${masterTarget > 0 ? `<div>
            ${pBar(masterFilled, 'var(--purple)')}
            <div style="display:flex;justify-content:space-between;font-size:0.72rem;color:var(--text-muted);margin-top:4px;">
              <span>${masterFilled}%</span><span>Target: ${masterTarget}</span>
            </div>
          </div>` : ''}
        </div>
      </div>
      <div style="${CARD}min-height:100px;display:flex;flex-direction:column;">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px;">
          <div style="${LBL}">Certified</div>
          ${tip('Trainer ที่ได้รับการรับรองระดับ Certified<br><span style="color:var(--text-muted)">ปัจจุบัน: Column <strong>Status</strong> = "Certified"<br>Target: จำนวน Trainer ทั้งหมด</span>')}
        </div>
        <div style="font-size:1.6rem;font-weight:700;color:var(--ok);margin-bottom:6px;">${certCount}</div>
        ${certTarget > 0 ? `<div style="margin-top:auto;">
          ${pBar(certFilled, 'var(--ok)')}
          <div style="display:flex;justify-content:space-between;font-size:0.72rem;color:var(--text-muted);margin-top:4px;">
            <span>${certFilled}%</span><span>Target: ${certTarget}</span>
          </div>
        </div>` : ''}
      </div>
      <div style="${CARD}min-height:100px;display:flex;flex-direction:column;">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px;">
          <div style="${LBL}">Avg. Efficiency Pass Rate / Person</div>
          ${tip('ค่าเฉลี่ยอัตราการผ่านมาตรฐาน Efficiency ของ Trainer แต่ละคน<br><span style="color:var(--text-muted)">สูตร: (Skill ที่ eff ≥ 75) / (Skill ทั้งหมดของคนนั้น) × 100 → avg ทุกคน<br>Target: 100%</span>')}
        </div>
        <div style="font-size:1.6rem;font-weight:700;color:#0891b2;margin-bottom:6px;">${avgSkill}%</div>
        <div style="margin-top:auto;">
          ${pBar(avgPct, '#0891b2')}
          <div style="display:flex;justify-content:flex-end;font-size:0.72rem;color:var(--text-muted);margin-top:4px;">
            <span>Target: 100%</span>
          </div>
        </div>
      </div>
      <div style="${CARD}">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:4px;">
          <div style="${LBL}">Skill Expired</div>
          ${tip('จำนวน Trainer ที่มี Skill หมดอายุ อย่างน้อย 1 รายการ<br><span style="color:var(--text-muted)">นับ Trainer ที่มี expired = 1 และ eff > 0</span>')}
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;flex:1;">
          <div style="${VAL}margin-top:0;${expiredAll > 0 ? 'color:var(--danger);' : ''}">${expiredAll}</div>
          ${RSUB(expiredByBu, 'var(--danger)')}
        </div>
      </div>
    </div>
    <!-- Row 2 + Row 3: BU mini-cards + Top 3 Priority (combined section) -->
    <div style="display:flex;flex-direction:column;gap:10px;">
    <div style="display:grid;grid-template-columns:repeat(${bus.length || 1},1fr);gap:12px;">
      ${buStats.map(s => `
      <div style="${CARD}">
        <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:8px;">
          <span style="font-size:1.05rem;font-weight:700;color:${s.color};">${escapeHtml(s.bu)}</span>
          <span style="font-size:0.82rem;color:var(--text-muted);">${s.total} คน</span>
        </div>
        <div style="font-size:0.7rem;color:var(--text-muted);display:flex;flex-direction:column;gap:3px;margin-bottom:8px;">
          <div style="display:flex;justify-content:space-between;"><span>★ Master Trainer</span><strong style="color:var(--purple);">${s.master}</strong></div>
          <div style="display:flex;justify-content:space-between;"><span>✓ Certified</span><strong style="color:var(--ok);">${s.certified}</strong></div>
          <div style="display:flex;justify-content:space-between;"><span>○ On-Progress</span><strong style="color:var(--warn);">${s.onProgress}</strong></div>
        </div>
        <div style="font-size:0.7rem;color:var(--text-muted);border-top:1px solid var(--border-light);padding-top:6px;margin-top:auto;">
          <div style="display:flex;justify-content:space-between;margin-bottom:2px;"><span>Avg. Eff Pass Rate</span><strong style="color:var(--text);">${s.avgSkill}%</strong></div>
          <div style="display:flex;justify-content:space-between;"><span>Expired (คน)</span><strong style="${s.expired > 0 ? 'color:var(--danger);' : 'color:var(--text);'}">${s.expired}</strong></div>
        </div>
      </div>`).join('')}
    </div>
    <div style="display:grid;grid-template-columns:repeat(${bus.length || 1},1fr);gap:12px;">
      ${buStats.map(s => {
        const top3ByBu = (data.top3 || []).filter(t => t.bu === s.bu);
        const trExcMaster = data.trainers.filter(t => t.bu === s.bu && t.status !== 'Master Trainer');
        const top3Items = top3ByBu.map(t => {
          const done = trExcMaster.reduce((acc, tr) =>
            acc + (data.skills[tr.empid] || []).filter(sk => sk.productType === t.productType && sk.style === t.style && (sk.eff || 0) >= 75).length, 0);
          const denom = t.totalSteps * trExcMaster.length;
          const pct = denom > 0 ? Math.min(100, Math.round(done / denom * 100)) : null;
          return { label: `${t.productType} / ${t.style}`, pct, productType: t.productType };
        });
        return `
      <div style="${CARD}min-height:80px;">
        <div style="text-align:center;margin-bottom:10px;">
          <span style="font-size:0.6rem;color:var(--text-muted);background:var(--surface2);padding:1px 5px;border-radius:10px;">🎯 Top 3 Priority</span>
        </div>
        ${top3Items.length === 0
          ? `<div style="font-size:0.7rem;color:var(--text-muted);text-align:center;padding:8px 0;">ไม่มีข้อมูล top_3</div>`
          : top3Items.map(x => `
            <div style="margin-bottom:6px;">
              <div style="display:flex;justify-content:space-between;font-size:0.68rem;color:var(--text-muted);margin-bottom:2px;">
                <span>${escapeHtml(x.label)}</span>
                <span style="font-weight:600;color:var(--text);">${x.pct === null ? '—' : x.pct + '%'}</span>
              </div>
              ${x.pct !== null ? pBar(x.pct, ptColorMap[x.productType] || ptColor(x.pct)) : ''}
            </div>`).join('')}
      </div>`;
      }).join('')}
    </div>
    </div>`;
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
                  { text: 'ผ่าน (≥70%)', fillStyle: '#16a34a', strokeStyle: '#16a34a', lineWidth: 0 },
                  { text: 'ไม่ผ่าน (<70%)', fillStyle: '#ef4444', strokeStyle: '#ef4444', lineWidth: 0 },
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

init().catch(err => {
  console.error(err);
  show($('loginPanel'));
  startLoginParticles();
});
