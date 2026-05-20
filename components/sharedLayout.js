export const TEZRO_PORTS = {
    home: 'http://localhost:5173',
    bank: 'http://localhost:5174',
    shipment: 'http://localhost:5175',
    agriculture: 'http://localhost:5176',
    education: 'http://localhost:5177',
    food: 'http://localhost:5178',
    hospitality: 'http://localhost:5179',
    legal: 'http://localhost:5180',
    azwaj: 'http://localhost:3000'
};

window.toggleTezroSidebar = (open) => {
    const sidebar = document.getElementById('tezro-global-sidebar');
    if (sidebar) {
        if (open) sidebar.classList.remove('translate-x-full');
        else sidebar.classList.add('translate-x-full');
    }
};

export const injectTezroLayout = (currentModule, coreContent) => {
    const activeClass = "border-r-4 border-orange-500 bg-slate-800 text-white font-black";
    
    return `
    <header class="w-full bg-[#0A192F] border-b-2 border-slate-800 p-3 flex items-center justify-between sticky top-0 z-40 shadow-md">
        <button onclick="window.toggleTezroSidebar(true)" class="p-1.5 text-gray-400 hover:text-white active:scale-90 transition-transform">
            <span class="material-icons text-xl block">menu</span>
        </button>
        <div class="flex items-center gap-2">
            <span class="text-[8px] font-black text-black bg-orange-400 px-2 py-0.5 rounded-none uppercase tracking-wider">${currentModule}</span>
            <img src="/public/logo.png" class="h-6 object-contain" alt="Tezro" onerror="this.src='https://raw.githubusercontent.com/Tezro-App/branding/main/logo.png'">
        </div>
    </header>

    <div class="flex-grow overflow-y-auto bg-gray-50 relative">
        ${coreContent}
    </div>

    <footer class="w-full bg-white border-t border-gray-200 h-14 grid grid-cols-4 sticky bottom-0 z-40 shadow-lg select-none">
        <button onclick="window.location.href='${TEZRO_PORTS.home}'" class="flex flex-col items-center justify-center gap-0.5 ${currentModule === 'MAIN HOME' ? 'text-[#0D47A1]' : 'text-gray-400'}">
            <span class="material-icons text-xl">home</span>
            <span class="text-[8px] font-black">ہوم</span>
        </button>
        <button onclick="window.location.href='${TEZRO_PORTS.bank}'" class="flex flex-col items-center justify-center gap-0.5 ${currentModule === 'BANK' ? 'text-green-600' : 'text-gray-400'}">
            <span class="material-icons text-xl">account_balance_wallet</span>
            <span class="text-[8px] font-black">بینک والٹ</span>
        </button>
        <button onclick="window.location.href='${TEZRO_PORTS.shipment}'" class="flex flex-col items-center justify-center gap-0.5 ${currentModule === 'SHIPMENT' ? 'text-orange-500' : 'text-gray-400'}">
            <span class="material-icons text-xl">local_shipping</span>
            <span class="text-[8px] font-black">شپمنٹ</span>
        </button>
        <button onclick="window.toggleTezroSidebar(true)" class="flex flex-col items-center justify-center gap-0.5 text-gray-400">
            <span class="material-icons text-xl">apps</span>
            <span class="text-[8px] font-black">مزید سروسز</span>
        </button>
    </footer>

    <div id="tezro-global-sidebar" class="fixed inset-y-0 right-0 w-64 bg-[#0A192F] text-gray-300 z-50 transform translate-x-full transition-transform duration-300 ease-in-out flex flex-col justify-between shadow-2xl border-l border-slate-800 text-right">
        <div>
            <div class="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950">
                <button onclick="window.toggleTezroSidebar(false)" class="text-gray-400 hover:text-white">
                    <span class="material-icons text-lg block">close</span>
                </button>
                <span class="text-xs font-black text-white tracking-wide">ٹیزرو مینو فیسٹو</span>
            </div>
            <nav class="p-2 space-y-1">
                <a href="${TEZRO_PORTS.home}" class="flex items-center justify-end gap-3 px-3 py-2.5 rounded text-xs font-bold hover:bg-slate-800 hover:text-white ${currentModule === 'MAIN HOME' ? activeClass : ''}"><span>مرکزی ہوم اسکرین</span><span class="material-icons text-base">grid_view</span></a>
                <a href="${TEZRO_PORTS.bank}" class="flex items-center justify-end gap-3 px-3 py-2.5 rounded text-xs font-bold hover:bg-slate-800 hover:text-white ${currentModule === 'BANK' ? activeClass : ''}"><span>ٹیزرو ڈیجیٹل بینک</span><span class="material-icons text-base">account_balance</span></a>
                <a href="${TEZRO_PORTS.shipment}" class="flex items-center justify-end gap-3 px-3 py-2.5 rounded text-xs font-bold hover:bg-slate-800 hover:text-white ${currentModule === 'SHIPMENT' ? activeClass : ''}"><span>شپمنٹ و کارگو لاجسٹکس</span><span class="material-icons text-base">local_shipping</span></a>
                <a href="${TEZRO_PORTS.food}" class="flex items-center justify-end gap-3 px-3 py-2.5 rounded text-xs font-bold hover:bg-slate-800 hover:text-white ${currentModule === 'FOOD' ? activeClass : ''}"><span>ٹیزرو فوڈ مارکیٹ</span><span class="material-icons text-base">restaurant</span></a>
                <a href="${TEZRO_PORTS.services}" class="flex items-center justify-end gap-3 px-3 py-2.5 rounded text-xs font-bold hover:bg-slate-800 hover:text-white ${currentModule === 'SERVICES' ? activeClass : ''}"><span>ہوم ٹیکنیشن سروسز</span><span class="material-icons text-base">construction</span></a>
                <a href="${TEZRO_PORTS.hospitality}" class="flex items-center justify-end gap-3 px-3 py-2.5 rounded text-xs font-bold hover:bg-slate-800 hover:text-white ${currentModule === 'HOSPITALITY' ? activeClass : ''}"><span>ہوٹل و ہال بکنگ</span><span class="material-icons text-base">hotel</span></a>
                <a href="${TEZRO_PORTS.legal}" class="flex items-center justify-end gap-3 px-3 py-2.5 rounded text-xs font-bold hover:bg-slate-800 hover:text-white ${currentModule === 'LEGAL' ? activeClass : ''}"><span>لیگل ایڈوائزرز پینل</span><span class="material-icons text-base">gavel</span></a>
                <a href="${TEZRO_PORTS.azwaj}" class="flex items-center justify-end gap-3 px-3 py-2.5 rounded text-xs font-bold text-rose-400 bg-rose-950/20 hover:bg-rose-900/30 border border-transparent hover:border-rose-800"><span>ازواج میرج نیٹ ورک</span><span class="material-icons text-base text-rose-500">favorite</span></a>
            </nav>
        </div>
        <div class="p-3 bg-slate-950 border-t border-slate-800 text-center">
            <span class="text-[7px] font-mono text-gray-500 block">⚡ TEZRO SUPER APP ECOSYSTEM v2.6</span>
        </div>
    </div>
    `;
};
