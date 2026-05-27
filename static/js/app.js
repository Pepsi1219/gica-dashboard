// ===== TRANSLATIONS =====
const TRANSLATIONS = {
  th: {
    appTitle:               'New Operator Monitoring',
    appSubtitle:            'ระบบติดตามข้อมูลพนักงานใหม่',
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
    managerLoginBtn:        'สำหรับ CSA Manager',
    managerModeBadge:       'CSA Manager (อ่านอย่างเดียว)',
    managerLoginFailed:     'ไม่สามารถเข้าสู่ระบบ CSA Manager ได้',
  },
  en: {
    appTitle:               'New Operator Monitoring',
    appSubtitle:            'New employee tracking system',
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
    managerLoginBtn:        'For CSA Manager',
    managerModeBadge:       'CSA Manager (View Only)',
    managerLoginFailed:     'Could not sign in as CSA Manager',
  },
  lo: {
    appTitle:               'New Operator Monitoring',
    appSubtitle:            'ລະບົບຕິດຕາມພະນັກງານໃໝ່',
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
    managerLoginBtn:        'ສຳລັບ CSA Manager',
    managerModeBadge:       'CSA Manager (ອ່ານຢ່າງດຽວ)',
    managerLoginFailed:     'ບໍ່ສາມາດເຂົ້າສູ່ລະບົບ CSA Manager ໄດ້',
  },
  vi: {
    appTitle:               'New Operator Monitoring',
    appSubtitle:            'Hệ thống theo dõi nhân viên mới',
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
    managerLoginBtn:        'Dành cho CSA Manager',
    managerModeBadge:       'CSA Manager (Chỉ xem)',
    managerLoginFailed:     'Không thể đăng nhập CSA Manager',
  },
};

// ===== STATE =====
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
// expand state for the 4 stat cards (click-to-expand sub-data)
let cardExpanded      = { total: false, basic: false, op: false, resign: false };

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
function renderDepartmentButtons() {
  const grid = $('departmentGrid');
  grid.innerHTML = '';
  departments.forEach(dep => {
    const btn = document.createElement('button');
    btn.className = 'department-btn';
    btn.textContent = dep.label;
    btn.onclick = () => {
      currentDepartment = dep.key;
      currentFilter = '';
      currentYearFilter = '';
      if ($('statusFilter'))  $('statusFilter').value  = '';
      if ($('empYearFilter')) $('empYearFilter').value = '';
      $('dashboardTitle').textContent = `${dep.label} ${t('dashboard')}`;
      setPage('dashboard');
      loadDashboard();
    };
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
      show($('loginPanel'));
      setPage('home');
    } else {
      showMessage(err.message, true);
    }
  }
}

// ===== HOME DASHBOARD =====
async function loadHomeDashboard() {
  const loadingEl    = $('homeDashLoading');
  const gridEl       = $('homeDashGrid');
  const analyticsEl  = $('homeDashAnalytics');
  show(loadingEl);
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

  // X-axis labels: month abbreviations per current language (Jan/ม.ค./T1/…)
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
  const opDaysByGrade    = {};
  const totalDaysByGrade = {};
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

    // 1.1 Total training: Operation End - CSA Start Date (all + per-grade)
    const d11 = dateDiffDays(emp['CSA Start Date'], emp['Operation End'], dayMode);
    if (d11 !== null) {
      totalDays.push(d11);
      if (empGrade) {
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

    // 1.4 Resign duration — overall + broken down by resign type
    if (status === 'resign-operation' || status === 'resign-basic'
        || status === 'resign-before-basic') {
      const d14 = dateDiffDays(emp['CSA Start Date'], emp['Resign Date'], dayMode);
      if (d14 !== null) {
        resignDays.push(d14);
        if      (status === 'resign-operation')    resignDaysByType.operation.push(d14);
        else if (status === 'resign-basic')        resignDaysByType.basic.push(d14);
        else if (status === 'resign-before-basic') resignDaysByType.beforeBasic.push(d14);
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

  const rTotal      = s.resignTotal;
  const rOpPct      = rTotal > 0 ? (s.resignOp          / rTotal * 100).toFixed(1) : 0;
  const rBaPct      = rTotal > 0 ? (s.resignBasic       / rTotal * 100).toFixed(1) : 0;
  const rBeforePct  = rTotal > 0 ? (s.resignBeforeBasic / rTotal * 100).toFixed(1) : 0;

  // 3-step red shades (darkest → lightest): resign-op, resign-basic, resign-before-basic
  const COLOR_OP     = 'rgba(220,38,38,.92)';
  const COLOR_BASIC  = 'rgba(248,113,113,.95)';
  const COLOR_BEFORE = 'rgba(254,202,202,.95)';

  const resignRatioCard = rTotal > 0 ? `
    <div class="ac-resign-total-label">${t('analyticsResignTotal')}</div>
    <div class="ac-resign-total-value">${rTotal}</div>
    <div class="ac-resign-types">
      <div class="ac-resign-type">
        <div class="ac-resign-dot" style="background:${COLOR_OP}"></div>
        <span class="ac-resign-label">${t('analyticsResignOp')}</span>
        <span class="ac-resign-count">${s.resignOp} <span class="pct-sm">(${rOpPct}%)</span></span>
      </div>
      <div class="ac-resign-type">
        <div class="ac-resign-dot" style="background:${COLOR_BASIC}"></div>
        <span class="ac-resign-label">${t('analyticsResignBasic')}</span>
        <span class="ac-resign-count">${s.resignBasic} <span class="pct-sm">(${rBaPct}%)</span></span>
      </div>
      <div class="ac-resign-type">
        <div class="ac-resign-dot" style="background:${COLOR_BEFORE}"></div>
        <span class="ac-resign-label">${t('analyticsResignBeforeBasic')}</span>
        <span class="ac-resign-count">${s.resignBeforeBasic} <span class="pct-sm">(${rBeforePct}%)</span></span>
      </div>
    </div>
    <div class="ratio-bar ac-resign-bar">
      <div class="ratio-seg" style="width:${rOpPct}%;background:${COLOR_OP}"></div>
      <div class="ratio-seg" style="width:${rBaPct}%;background:${COLOR_BASIC}"></div>
      <div class="ratio-seg" style="width:${rBeforePct}%;background:${COLOR_BEFORE}"></div>
    </div>`
    : `<div class="ac-no-data">${t('analyticsNoData')}</div>`;

  // 1.3 Department filter dropdown
  const deptOptions = [`<option value="">${escapeHtml(t('analyticsAllDept'))}</option>`]
    .concat(departments.map(d =>
      `<option value="${escapeHtml(d.key)}"${d.key === currentAnalyticsDept ? ' selected' : ''}>${escapeHtml(d.label)}</option>`
    )).join('');

  // Day-mode button group
  const dayBtn = (mode, label) =>
    `<button type="button" class="day-mode-btn${currentDayMode === mode ? ' active' : ''}" data-mode="${mode}">${escapeHtml(label)}</button>`;

  // ── Monthly trend card ────────────────────────────────────────────────
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
        <h4>${escapeHtml(t('trendTitle'))}</h4>
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

  // ── Expandable card wrapper ───────────────────────────────────────────
  const expandShell = (cardKey, toggleLabel, content) => {
    const open = !!cardExpanded[cardKey];
    return `<button type="button" class="ac-expand-btn${open ? ' open' : ''}" data-card="${cardKey}" aria-expanded="${open}">
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
        ${resignRatioCard}
      </div>
    </div>

    <div style="margin-top:24px">${trendCardHTML}</div>`;

  // wire dept-filter change → re-render analytics (table stays as-is)
  const deptSel = $('analyticsDeptFilter');
  if (deptSel) {
    deptSel.onchange = () => {
      currentAnalyticsDept = deptSel.value;
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

// ===== INIT =====
async function init() {
  initTheme();
  initLang();
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
  // Admin panel is a write surface (holidays) — hide it for managers
  if (currentRole !== 'manager') show($('adminBtn'));

  departments = await api('/api/departments');
  if (!Array.isArray(departments)) departments = [];
  renderDepartmentButtons();
  renderHolidays();
  setPage('home');

  // Load home dashboard in background
  loadHomeDashboard();
}

init().catch(err => {
  console.error(err);
  show($('loginPanel'));
});
