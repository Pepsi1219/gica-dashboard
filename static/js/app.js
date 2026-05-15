// ===== TRANSLATIONS =====
const TRANSLATIONS = {
  th: {
    appTitle:               'New Operator Monitoring',
    appSubtitle:            'ระบบติดตามข้อมูลพนักงานใหม่',
    loginTitle:             'เข้าสู่ระบบด้วย Microsoft Account',
    loginBtn:               'Sign in with Microsoft',
    selectDept:             'เลือกหน่วยงาน',
    overallDashboard:       'ภาพรวมทั้งหมด',
    allYears:               'ทุกปี',
    department:             'หน่วยงาน',
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
    ratio:                  'สัดส่วน',
    analyticsTitle:         'สถิติเชิงลึก',
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
    analyticsNoData:        'ไม่มีข้อมูล',
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
  },
  en: {
    appTitle:               'New Operator Monitoring',
    appSubtitle:            'New employee tracking system',
    loginTitle:             'Sign in with Microsoft Account',
    loginBtn:               'Sign in with Microsoft',
    selectDept:             'Select Department',
    overallDashboard:       'Overall Dashboard',
    allYears:               'All Years',
    department:             'Department',
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
    ratio:                  'Ratio',
    analyticsTitle:         'Deep Analytics',
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
    analyticsNoData:        'No data',
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
  },
  lo: {
    appTitle:               'New Operator Monitoring',
    appSubtitle:            'ລະບົບຕິດຕາມພະນັກງານໃໝ່',
    loginTitle:             'ເຂົ້າສູ່ລະບົບດ້ວຍ Microsoft Account',
    loginBtn:               'Sign in with Microsoft',
    selectDept:             'ເລືອກພະແນກ',
    overallDashboard:       'ພາບລວມທັງໝົດ',
    allYears:               'ທຸກປີ',
    department:             'ພະແນກ',
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
    ratio:                  'ອັດຕາສ່ວນ',
    analyticsTitle:         'ສະຖິຕິຍ່ອຍ',
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
    analyticsNoData:        'ບໍ່ມີຂໍ້ມູນ',
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
  },
  vi: {
    appTitle:               'New Operator Monitoring',
    appSubtitle:            'Hệ thống theo dõi nhân viên mới',
    loginTitle:             'Đăng nhập bằng tài khoản Microsoft',
    loginBtn:               'Sign in with Microsoft',
    selectDept:             'Chọn bộ phận',
    overallDashboard:       'Tổng quan',
    allYears:               'Tất cả năm',
    department:             'Bộ phận',
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
    ratio:                  'Tỷ lệ',
    analyticsTitle:         'Phân tích chuyên sâu',
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
    analyticsNoData:        'Không có dữ liệu',
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
let currentDayMode    = 'total'; // 'total' | '5d' | '6d'  (Deep Analytics)
let currentUser       = null;
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
  'completed':            'statusCompleted',
  'completed-overdue':    'statusCompletedOverdue',
  'under-operation':      'statusUnderOperation',
  'under-basic':          'statusUnderBasic',
  'resign-operation':     'statusResignOperation',
  'resign-basic':         'statusResignBasic',
  'transfer-operation':   'statusTransferOperation',
  'transfer-basic':       'statusTransferBasic',
};

function statusBadgeClass(key) {
  if (key === 'completed')                                   return 'ok';
  if (key === 'completed-overdue')                           return 'warn';
  if (key === 'under-operation' || key === 'under-basic')    return 'warn';
  if (key === 'resign-operation' || key === 'resign-basic')  return 'danger';
  if (key === 'transfer-operation' || key === 'transfer-basic') return 'muted';
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
    chip.innerHTML = `${date} <button type="button">×</button>`;
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
function computeActualStatus(emp, calc) {
  function hasData(v) {
    return v !== null && v !== undefined && v !== '' && v !== 0;
  }
  const opStart    = emp['Operation Start'];
  const opEnd      = emp['Operation End'];
  const basicStart = emp['Basic Start'];
  const resignDate = emp['Resign Date'];
  const transferDate = emp['Transfers Date'];
  // Use the SAME Due date that the table displays (raw from Excel),
  // normalized to YYYY-MM-DD so string-compare is reliable.
  const dueDate = normalizeDateForInput(emp['Due date']) || '';

  if (hasData(opEnd)) {
    const opEndNorm = normalizeDateForInput(opEnd);
    // Completed-overdue ONLY when Op End strictly later than Due date.
    // Op End <= Due date → Completed (on time).
    if (dueDate && opEndNorm && opEndNorm > dueDate) return 'completed-overdue';
    return 'completed';
  }
  if (hasData(resignDate) && hasData(opStart))    return 'resign-operation';
  if (hasData(resignDate) && hasData(basicStart)) return 'resign-basic';
  if (hasData(transferDate) && hasData(opStart))    return 'transfer-operation';
  if (hasData(transferDate) && hasData(basicStart)) return 'transfer-basic';
  if (hasData(opStart))    return 'under-operation';
  if (hasData(basicStart)) return 'under-basic';
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
  let underOp = 0, underBasic = 0, resignOp = 0, resignBasic = 0;

  yearScoped.forEach(emp => {
    const calc = emp.calculated || {};
    const actualKey = computeActualStatus(emp, calc);

    if      (actualKey === 'completed')          completedOnTime++;
    else if (actualKey === 'completed-overdue')  completedOverdue++;
    else if (actualKey === 'under-operation')    underOp++;
    else if (actualKey === 'under-basic')        underBasic++;
    else if (actualKey === 'resign-operation')   resignOp++;
    else if (actualKey === 'resign-basic')       resignBasic++;

    if (currentFilter && actualKey !== currentFilter) return;

    const tr = document.createElement('tr');
    tr.className = `actual-${actualKey}`;
    tr.dataset.employeeId = emp['Employee ID'] || '';
    tr.innerHTML = buildRowHTML(emp, calc, actualKey);
    body.appendChild(tr);
  });

  $('totalCount').textContent             = total;
  $('onTrackCount').textContent           = completedOnTime + completedOverdue;
  $('completedOnTimeCount').textContent   = completedOnTime;
  $('completedOverdueCount').textContent  = completedOverdue;
  $('trainingCount').textContent          = underOp + underBasic;
  $('underOpCount').textContent           = underOp;
  $('underBasicCount').textContent        = underBasic;
  $('overdueCount').textContent           = resignOp + resignBasic;
  $('resignOpCount').textContent          = resignOp;
  $('resignBasicCount').textContent       = resignBasic;
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
  // status counts for chart visualization
  const sc = {
    completed: 0, completedOverdue: 0,
    underOp: 0, underBasic: 0,
    resignOp: 0, resignBasic: 0,
    transferOp: 0, transferBasic: 0,
  };

  filtered.forEach(emp => {
    const status = computeActualStatus(emp, emp.calculated || {});

    // Status tallies for charts
    if      (status === 'completed')           sc.completed++;
    else if (status === 'completed-overdue')   sc.completedOverdue++;
    else if (status === 'under-operation')     sc.underOp++;
    else if (status === 'under-basic')         sc.underBasic++;
    else if (status === 'resign-operation')    sc.resignOp++;
    else if (status === 'resign-basic')        sc.resignBasic++;
    else if (status === 'transfer-operation')  sc.transferOp++;
    else if (status === 'transfer-basic')      sc.transferBasic++;

    // 1.1 Total training: Operation End - CSA Start Date
    const d11 = dateDiffDays(emp['CSA Start Date'], emp['Operation End'], dayMode);
    if (d11 !== null) totalDays.push(d11);

    // 1.2 Basic training: Basic End - Basic Start
    const d12 = dateDiffDays(emp['Basic Start'], emp['Basic End'], dayMode);
    if (d12 !== null) basicDays.push(d12);

    // 1.3 Operation training: Operation End - Operation Start
    const d13 = dateDiffDays(emp['Operation Start'], emp['Operation End'], dayMode);
    if (d13 !== null) opDays.push(d13);

    // 1.4 Resign duration
    if (status === 'resign-operation' || status === 'resign-basic') {
      const d14 = dateDiffDays(emp['CSA Start Date'], emp['Resign Date'], dayMode);
      if (d14 !== null) resignDays.push(d14);
    }
  });

  return {
    total:      statSummary(totalDays),
    basic:      statSummary(basicDays),
    operation:  statSummary(opDays),
    resign:     statSummary(resignDays),
    resignOp:   sc.resignOp,
    resignBasic: sc.resignBasic,
    resignTotal: sc.resignOp + sc.resignBasic,
    statusCounts: sc,
  };
}

function renderAnalytics(yearFilter) {
  const el = $('homeDashAnalytics');
  if (!el) return;
  if (!Object.keys(allDeptData).length) { hide(el); return; }

  const s = computeAnalytics(yearFilter, currentAnalyticsDept, currentDayMode);
  const sc = s.statusCounts;

  // ── Chart palette ──────────────────────────────────────────────────────
  const C = {
    grad:      'rgba(34,197,94,.88)',      // green (graduation)
    gradLight: 'rgba(167,243,208,.95)',    // light green (overdue grad)
    train:     'rgba(59,130,246,.88)',     // blue (training)
    trainLight:'rgba(147,197,253,.95)',    // light blue (basic)
    resign:    'rgba(220,38,38,.92)',      // red (resign)
    resignLight:'rgba(252,165,165,.95)',   // light red (resign basic)
    transfer:  'rgba(168,85,247,.85)',     // purple (transfer)
  };

  // Build the 4 chart datasets
  const gradTotal     = sc.completed + sc.completedOverdue;
  const trainingTotal = sc.underOp + sc.underBasic;
  const resignTotalC  = sc.resignOp + sc.resignBasic;
  const transferTotal = sc.transferOp + sc.transferBasic;

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
    { value: sc.resignOp,    color: C.resign,      label: t('statusResignOperation') },
    { value: sc.resignBasic, color: C.resignLight, label: t('statusResignBasic') },
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

  const rTotal = s.resignTotal;
  const rOpPct = rTotal > 0 ? (s.resignOp  / rTotal * 100).toFixed(1) : 0;
  const rBaPct = rTotal > 0 ? (s.resignBasic / rTotal * 100).toFixed(1) : 0;

  // 1.2b colors: resign-op = solid red, resign-basic = light red
  const COLOR_OP    = 'rgba(220,38,38,.92)';
  const COLOR_BASIC = 'rgba(252,165,165,.95)';

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
    </div>
    <div class="ratio-bar ac-resign-bar">
      <div class="ratio-seg" style="width:${rOpPct}%;background:${COLOR_OP}"></div>
      <div class="ratio-seg" style="width:${rBaPct}%;background:${COLOR_BASIC}"></div>
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
      </div>
      <div class="analytic-card">
        <div class="ac-header"><span class="ac-title">${t('analyticsBasicTraining')}</span></div>
        ${fmtStatCard(s.basic)}
      </div>
      <div class="analytic-card">
        <div class="ac-header"><span class="ac-title">${t('analyticsOpTraining')}</span></div>
        ${fmtStatCard(s.operation)}
      </div>
      <div class="analytic-card ac-danger">
        <div class="ac-header"><span class="ac-title">${t('analyticsResignDur')}</span></div>
        ${fmtStatCard(s.resign)}
      </div>
      <div class="analytic-card">
        <div class="ac-header"><span class="ac-title">${t('analyticsResignRatio')}</span></div>
        ${resignRatioCard}
      </div>
    </div>`;

  // wire dept-filter change → re-render analytics (table stays as-is)
  const deptSel = $('analyticsDeptFilter');
  if (deptSel) {
    deptSel.onchange = () => {
      currentAnalyticsDept = deptSel.value;
      renderAnalytics(yearFilter);
    };
  }

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

  show(el);
}

function buildDashRow(tr, label, total, completed, training, resign) {
  const pct = (n) => {
    if (total === 0) return '';
    return `<small class="pct">(${Math.round(n / total * 100)}%)</small>`;
  };

  const cPct = total > 0 ? (completed / total * 100).toFixed(1) : 0;
  const tPct = total > 0 ? (training  / total * 100).toFixed(1) : 0;
  const rPct = total > 0 ? (resign    / total * 100).toFixed(1) : 0;

  const bar = `<div class="ratio-bar">
    <div class="ratio-seg ratio-completed" style="width:${cPct}%" title="${escapeHtml(t('congratulations'))}: ${cPct}%"></div>
    <div class="ratio-seg ratio-training"  style="width:${tPct}%" title="${escapeHtml(t('training'))}: ${tPct}%"></div>
    <div class="ratio-seg ratio-resign"    style="width:${rPct}%" title="${escapeHtml(t('resignation'))}: ${rPct}%"></div>
  </div>`;

  [
    { html: escapeHtml(label),                        cls: 'dept-label' },
    { html: `${total}`,                               cls: 'num-cell' },
    { html: `${completed} ${pct(completed)}`,         cls: 'num-cell ok' },
    { html: `${training} ${pct(training)}`,           cls: 'num-cell blue' },
    { html: `${resign} ${pct(resign)}`,               cls: 'num-cell danger' },
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

  let grandTotal = 0, grandCompleted = 0, grandTraining = 0, grandResign = 0;

  const table = document.createElement('table');
  table.className = 'home-dash-table';

  const thead = table.createTHead();
  const hrow  = thead.insertRow();
  [t('department'), t('total'), t('congratulations'), t('training'), t('resignation'), t('ratio')]
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

    let total = filtered.length, completed = 0, training = 0, resign = 0;

    filtered.forEach(emp => {
      const key = computeActualStatus(emp, emp.calculated || {});
      if (key === 'completed' || key === 'completed-overdue')        completed++;
      else if (key === 'under-operation' || key === 'under-basic')   training++;
      else if (key === 'resign-operation' || key === 'resign-basic') resign++;
    });

    grandTotal     += total;
    grandCompleted += completed;
    grandTraining  += training;
    grandResign    += resign;

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

    buildDashRow(tr, dep.label, total, completed, training, resign);
  });

  // Footer totals row
  const tfoot = table.createTFoot();
  const frow  = tfoot.insertRow();
  frow.className = 'dash-total-row';
  buildDashRow(frow, t('total'), grandTotal, grandCompleted, grandTraining, grandResign);

  // 1.4 wrap in scrollable container so it doesn't overflow on small screens
  const wrap = document.createElement('div');
  wrap.className = 'home-dash-table-wrap';
  wrap.appendChild(table);
  gridEl.appendChild(wrap);
  renderAnalytics(yearFilter);
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

  // Check auth
  const me = await api('/api/me');
  if (!me.authenticated) {
    show($('loginPanel'));
    return;
  }

  currentUser = me.user;
  $('authBox').innerHTML = `${t('signedIn')} · <a href="/logout">${t('logout')}</a>`;
  show($('adminBtn'));

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
