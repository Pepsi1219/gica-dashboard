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
  },
};

// ===== STATE =====
let currentDepartment = null;
let currentEmployeeId = null;
let currentFilter     = '';
let departments       = [];
let holidays          = JSON.parse(localStorage.getItem('specialHolidays') || '[]');
let lastEmployees     = [];
let allDeptData       = {};   // home dashboard cache: { deptKey: [employees] }
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
  const dueDate    = (calc && calc.due_date) ? calc.due_date : '';

  if (hasData(opEnd)) {
    const opEndNorm = normalizeDateForInput(opEnd);
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
function buildRowHTML(emp, calc, actualKey) {
  const nd  = (v) => escapeHtml(normalizeDateForInput(v) || '');
  const esc = escapeHtml;
  const gradEff = (emp['Graduate Eff'] !== undefined && emp['Graduate Eff'] !== '') ? emp['Graduate Eff'] : '';
  const badgeClass = statusBadgeClass(actualKey);
  const statusLabel = t(STATUS_KEY_MAP[actualKey] || actualKey);
  const empId = esc(String(emp['Employee ID'] || ''));

  return `
    <td class="td-actions"><button class="btn-row-edit" data-id="${empId}" title="Edit">✏</button></td>
    <td>${esc(emp['Employee ID']   || '')}</td>
    <td>${esc(emp['Employee Name'] || '')}</td>
    <td>${esc(emp['Grade']         || '')}</td>
    <td>${nd(emp['CSA Start Date'])}</td>
    <td>${esc(calc.due_date        || '')}</td>
    <td>${nd(emp['Basic Start'])}</td>
    <td>${nd(emp['Basic End'])}</td>
    <td>${nd(emp['Operation Start'])}</td>
    <td>${nd(emp['Operation End'])}</td>
    <td>${nd(emp['Resign Date'])}</td>
    <td>${nd(emp['Transfers Date'])}</td>
    <td>${esc(String(gradEff))}</td>
    <td><span class="badge ${badgeClass}">${esc(statusLabel)}</span></td>
  `;
}

// ===== INLINE EDIT — ENTER EDIT MODE =====
function startInlineEdit(tr, emp, calc, actualKey) {
  tr.classList.add('editing');
  const nd    = (v) => normalizeDateForInput(v) || '';
  const esc   = escapeHtml;
  const grade = emp['Grade'] || '';

  tr.innerHTML = `
    <td class="td-actions">
      <button class="btn-confirm-inline" title="ยืนยัน">✓</button>
      <button class="btn-cancel-inline"  title="ยกเลิก">✗</button>
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
    <td>${esc(calc.due_date || '')}</td>
    <td><input class="inline-edit" type="date" name="Basic Start"      value="${nd(emp['Basic Start'])}"></td>
    <td><input class="inline-edit" type="date" name="Basic End"        value="${nd(emp['Basic End'])}"></td>
    <td><input class="inline-edit" type="date" name="Operation Start"  value="${nd(emp['Operation Start'])}"></td>
    <td><input class="inline-edit" type="date" name="Operation End"    value="${nd(emp['Operation End'])}"></td>
    <td><input class="inline-edit" type="date" name="Resign Date"      value="${nd(emp['Resign Date'])}"></td>
    <td><input class="inline-edit" type="date" name="Transfers Date"   value="${nd(emp['Transfers Date'])}"></td>
    <td><input class="inline-edit" type="number" name="Graduate Eff"   value="${esc(String(emp['Graduate Eff'] ?? ''))}" min="0" max="100" step="0.01"></td>
    <td><span class="badge ${statusBadgeClass(actualKey)}">${esc(t(STATUS_KEY_MAP[actualKey] || actualKey))}</span></td>
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

// ===== RENDER EMPLOYEE TABLE =====
function renderEmployeeTable(employees) {
  const body = $('employeeTableBody');
  body.innerHTML = '';

  let total = employees.length;
  let completed = 0, underOp = 0, underBasic = 0, resignOp = 0, resignBasic = 0;

  employees.forEach(emp => {
    const calc = emp.calculated || {};
    const actualKey = computeActualStatus(emp, calc);

    if (actualKey === 'completed' || actualKey === 'completed-overdue') completed++;
    else if (actualKey === 'under-operation')  underOp++;
    else if (actualKey === 'under-basic')      underBasic++;
    else if (actualKey === 'resign-operation') resignOp++;
    else if (actualKey === 'resign-basic')     resignBasic++;

    if (currentFilter && actualKey !== currentFilter) return;

    const tr = document.createElement('tr');
    tr.className = `actual-${actualKey}`;
    tr.dataset.employeeId = emp['Employee ID'] || '';
    tr.innerHTML = buildRowHTML(emp, calc, actualKey);
    body.appendChild(tr);
  });

  $('totalCount').textContent       = total;
  $('onTrackCount').textContent     = completed;
  $('trainingCount').textContent    = underOp + underBasic;
  $('underOpCount').textContent     = underOp;
  $('underBasicCount').textContent  = underBasic;
  $('overdueCount').textContent     = resignOp + resignBasic;
  $('resignOpCount').textContent    = resignOp;
  $('resignBasicCount').textContent = resignBasic;
}

// ===== DASHBOARD PAGE =====
async function loadDashboard() {
  if (!currentDepartment) return;
  showMessage(t('loading'));
  try {
    const query = getHolidayQuery();
    const data = await api(`/api/${currentDepartment}/employees${query ? '?' + query : ''}`);
    lastEmployees = data.employees || [];
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
  const loadingEl = $('homeDashLoading');
  const gridEl    = $('homeDashGrid');
  show(loadingEl);
  hide(gridEl);

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
  sel.innerHTML = `<option value="">${t('allYears')}</option>`;
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
    { html: `${training} ${pct(training)}`,           cls: 'num-cell warn' },
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

  gridEl.appendChild(table);
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
  $('dueDateText').textContent   = `${t('dueDate')}: ${calc.due_date || '-'}`;
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
