(function(){"use strict";var e={8749:function(e,t,a){var r=a(5130),s=a(6768);function o(e,t,a,r,o,n){const i=(0,s.g2)("Content");return(0,s.uX)(),(0,s.Wv)(i)}const n={class:"xl:w-4/5 lg:w-[90%] w-[95%] m-auto pb-[150px]"},i={key:0},l={class:"flex justify-between mt-10 flex-col lg:flex-row"},d={class:"lg:w-[55%] w-full"},c={class:"w-full lg:w-[40%] flex-shrink lg:mt-0 mt-10"};function m(e,t,a,r,o,m){const u=(0,s.g2)("MobileTopbar"),p=(0,s.g2)("RemainingTime"),g=(0,s.g2)("PricingStages"),b=(0,s.g2)("OrderData"),y=(0,s.g2)("StepFirstLeft"),f=(0,s.g2)("StepSecondLeft"),h=(0,s.g2)("StepThirdLeft"),k=(0,s.g2)("StepFourthLeft"),v=(0,s.g2)("StepFirstRight"),w=(0,s.g2)("StepSecondRight"),x=(0,s.g2)("StepFifth"),C=(0,s.g2)("StepSixth");return(0,s.uX)(),(0,s.CE)("div",n,[o.stageNumber<=3?((0,s.uX)(),(0,s.CE)("div",i,[(0,s.bF)(u,{class:"sm:hidden"}),(0,s.bF)(p,{id:"scroll-top",class:"mt-10"}),(0,s.bF)(g,{class:"mt-14","stage-number":o.stageNumber},null,8,["stage-number"]),(0,s.Lk)("div",l,[(0,s.Lk)("div",d,[(0,s.bF)(b,{class:"","order-data":o.orderData},null,8,["order-data"]),0===o.stageNumber?((0,s.uX)(),(0,s.Wv)(y,{key:0,onNextStage:m.nextStage,onReplaceObject:m.replaceObject,class:""},null,8,["onNextStage","onReplaceObject"])):(0,s.Q3)("",!0),1===o.stageNumber?((0,s.uX)(),(0,s.Wv)(f,{key:1,class:"",onAddProperty:m.addObject,onDeleteProperty:m.removeObject},null,8,["onAddProperty","onDeleteProperty"])):(0,s.Q3)("",!0),2===o.stageNumber?((0,s.uX)(),(0,s.Wv)(h,{key:2,class:"mt-8",onAddProperty:m.addObject,onDeleteProperty:m.removeObject},null,8,["onAddProperty","onDeleteProperty"])):(0,s.Q3)("",!0),3===o.stageNumber?((0,s.uX)(),(0,s.Wv)(k,{key:3,class:"mt-8",ownChoice:o.ownChoice,onAddProperty:m.addObjectOwnChoice,onDeleteProperty:m.removeObjectOwnChoice},null,8,["ownChoice","onAddProperty","onDeleteProperty"])):(0,s.Q3)("",!0)]),(0,s.Lk)("div",c,[0===o.stageNumber?((0,s.uX)(),(0,s.Wv)(v,{key:0})):(0,s.Q3)("",!0),o.stageNumber>=1?((0,s.uX)(),(0,s.Wv)(w,{key:1,"card-data":o.cardData,onNextStage:m.nextStage},null,8,["card-data","onNextStage"])):(0,s.Q3)("",!0)])])])):(0,s.Q3)("",!0),4===o.stageNumber?((0,s.uX)(),(0,s.Wv)(x,{key:1,class:"mt-10",onNextStage:m.nextStage},null,8,["onNextStage"])):(0,s.Q3)("",!0),5===o.stageNumber?((0,s.uX)(),(0,s.Wv)(C,{key:2,class:"mt-10"})):(0,s.Q3)("",!0)])}a(4114);function u(e,t,a,r,o,n){const i=(0,s.g2)("RepairEstimate"),l=(0,s.g2)("ChoosingPanel");return(0,s.uX)(),(0,s.CE)("div",null,[(0,s.bF)(i,{class:"mt-10"}),(0,s.bF)(l,{onNextStage:n.emitUpdate,onReplaceObject:n.emitReplaceObject,class:"mt-16"},null,8,["onNextStage","onReplaceObject"])])}const p={class:"sm:p-0 p-2"},g=(0,s.Lk)("h2",{class:"text-2xl font-medium tracking-wide mb-4"},"Kosztorys naprawy",-1),b=(0,s.Lk)("p",{class:"text-ourGray tracking-wide"},"Informujemy o stwierdzeniu uszkodzenia mechanicznego modułu wyświetlacza, pokrywy baterii urządzenia. W związku z jego budową dalsza diagnoza oraz ewentualna naprawa będzie możliwa po wyrażeniu zgody na odpłatną wymianę uszkodzonego podzespołu.",-1),y=[g,b];function f(e,t,a,r,o,n){return(0,s.uX)(),(0,s.CE)("div",p,y)}var h={name:"RepairEstimate"},k=a(1241);const v=(0,k.A)(h,[["render",f]]);var w=v,x=a(4232);const C={class:"mt-20 flex justify-between sm:flex-row flex-col"},z=(0,s.Lk)("h3",{class:"text-2xl font-medium tracking-wide mt-10"}," Lub skonfiguruj samodzielnie ",-1);function A(e,t,a,r,o,n){const i=(0,s.g2)("HorizontalButton"),l=(0,s.g2)("ChoiceCard"),d=(0,s.g2)("PremiumCard"),c=(0,s.g2)("Card");return(0,s.uX)(),(0,s.CE)("div",null,[(0,s.Lk)("div",C,[(0,s.bF)(d,{class:"sm:w-[48%] w-full"},{default:(0,s.k6)((()=>[(0,s.bF)(l,{"card-data":o.cards[0]},{default:(0,s.k6)((()=>[(0,s.bF)(i,{onClick:t[0]||(t[0]=e=>{n.emitUpdate,n.emitReplaceObject(o.cards[0])}),"premium-card":o.cards[0].premiumCard,class:"mt-4"},{default:(0,s.k6)((()=>[(0,s.eW)((0,x.v_)(o.cards[0].buttonName),1)])),_:1},8,["premium-card"])])),_:1},8,["card-data"])])),_:1}),(0,s.bF)(c,{class:"sm:w-[48%] w-full mt-8 sm:mt-0"},{default:(0,s.k6)((()=>[(0,s.bF)(l,{"card-data":o.cards[1]},{default:(0,s.k6)((()=>[(0,s.bF)(i,{onClick:t[1]||(t[1]=e=>{n.emitUpdate,n.emitReplaceObject(o.cards[1])}),"premium-card":o.cards[1].premiumCard,class:"mt-4"},{default:(0,s.k6)((()=>[(0,s.eW)((0,x.v_)(o.cards[1].buttonName),1)])),_:1},8,["premium-card"])])),_:1},8,["card-data"])])),_:1})]),z,(0,s.bF)(c,{class:"w-full mt-8"},{default:(0,s.k6)((()=>[(0,s.bF)(l,{"card-data":o.cards[2]},{default:(0,s.k6)((()=>[(0,s.bF)(i,{class:"mt-4",onClick:t[2]||(t[2]=e=>{n.emitUpdate,n.emitReplaceObject(o.cards[2])})},{default:(0,s.k6)((()=>[(0,s.eW)((0,x.v_)(o.cards[2].buttonName),1)])),_:1})])),_:1},8,["card-data"])])),_:1})])}const L={class:"shadow-[0_7px_29px_0px_rgba(100,100,111,0.2)] w-[48%] p-6 bg-white rounded-xl"};function P(e,t,a,r,o,n){return(0,s.uX)(),(0,s.CE)("div",L,[(0,s.RG)(e.$slots,"default")])}var E={name:"CardDesign"};const j=(0,k.A)(E,[["render",P]]);var N=j;const F={class:"text-left text-2xl font-medium my-5"},S={class:"leading-[45px] border-b pb-4"},D={class:"text-emerald text-[19px] mt-5"},_={class:"text-ourGray text-sm mt-2"};function X(e,t,a,r,o,n){const i=(0,s.g2)("PackageElement");return(0,s.uX)(),(0,s.CE)("div",null,[(0,s.Lk)("h3",F,(0,x.v_)(a.cardData.cardName),1),(0,s.Lk)("div",S,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(a.cardData.packageElements,(e=>((0,s.uX)(),(0,s.Wv)(i,{key:e.id,"package-element":e.element},null,8,["package-element"])))),128))]),(0,s.Lk)("p",D,(0,x.v_)(a.cardData.grossCost.toFixed(2))+" zł brutto",1),(0,s.Lk)("p",_,(0,x.v_)(a.cardData.netCost.toFixed(2))+" zł netto",1),(0,s.RG)(e.$slots,"default")])}const O={class:"flex items-center"},W=["src"];function R(e,t,a,r,o,n){return(0,s.uX)(),(0,s.CE)("div",O,[(0,s.Lk)("img",{class:"mr-2 w-[24px] h-[24px]",src:[a.availibity?"images/Icon.svg":"images/Icon_not.svg"]},null,8,W),(0,s.eW)(" "+(0,x.v_)(a.packageElement),1)])}var B={name:"PackageElement",props:{packageElement:String,availibity:{type:Boolean,default:!0}}};const U=(0,k.A)(B,[["render",R]]);var T=U,$={name:"ChoiceCard",props:{cardData:{type:Object},packageElements:{type:Array,default:()=>[]}},components:{PackageElement:T}};const M=(0,k.A)($,[["render",X]]);var I=M;function G(e,t,a,r,o,n){const i=(0,s.g2)("Card");return(0,s.uX)(),(0,s.Wv)(i,{class:"relative before:rounded-xl before:text-white before:text-center before:leading-[50px] before:absolute before:z-[-1] before:right-[-5px] before:left-[-5px] before:bottom-[-5px] before:top-[-50px] before:bg-gradient-to-r before:from-[#639b85] before:to-[#79C4A6] before:before-content"},{default:(0,s.k6)((()=>[(0,s.RG)(e.$slots,"default")])),_:3})}var H={name:"PremiumCard",components:{Card:N}};const Q=(0,k.A)(H,[["render",G]]);var K=Q;const Z={class:"text-center w-[90%] m-auto cursor-pointer>"};function J(e,t,a,r,o,n){return(0,s.uX)(),(0,s.CE)("div",Z,[(0,s.Lk)("button",{class:(0,x.C4)([[a.premiumCard?"bg-emerald text-white hover:bg-emeraldDark":"text-emerald border-2 border-emerald hover:bg-emeraldLight"],"m-auto w-full p-3 rounded-[100px] duration-200"])},[(0,s.RG)(e.$slots,"default")],2)])}var q={name:"HorizontalButton",props:{premiumCard:Boolean}};const V=(0,k.A)(q,[["render",J]]);var Y=V,ee={name:"ChoosingPanel",components:{Card:N,ChoiceCard:I,PremiumCard:K,HorizontalButton:Y},data(){return{cards:[{packageElements:[{id:0,element:"Usługa naprawy"},{id:1,element:"Ładowarka"},{id:2,element:"Kabel"},{id:3,element:"Folia ochronna Matt"}],cardName:"Naprawa PREMIUM",premiumCard:!0,grossCost:907.05,netCost:737.44,buttonName:"Wybierz PREMIUM"},{packageElements:[{id:0,element:"Usługa naprawy"},{id:1,element:"Ładowarka"},{id:2,element:"Kabel"},{id:3,element:"Folia ochronna Basic"}],cardName:"Naprawa Standard",premiumCard:!1,grossCost:708.52,netCost:538.64,buttonName:"Wybierz Standard"},{packageElements:[{id:0,element:"Pokrywa baterii"},{id:1,element:"Moduł wyświetlacza black"},{id:2,element:"Transport"},{id:3,element:"Usługa"},{id:4,element:"Ramka tylnej kamerki"}],cardName:"Aktualna wycena",premiumCard:!1,grossCost:708.52,netCost:538.64,buttonName:"Konfiguruj samodzielnie"}]}},methods:{emitUpdate(){},emitReplaceObject(e){this.$emit("next-stage"),this.$emit("replace-object",e)}}};const te=(0,k.A)(ee,[["render",A]]);var ae=te,re={name:"StepFirstLeft",components:{ChoosingPanel:ae,RepairEstimate:w},methods:{emitUpdate(){this.$emit("next-stage")},emitReplaceObject(e){this.$emit("replace-object",e)}},data(){return{}}};const se=(0,k.A)(re,[["render",u]]);var oe=se;function ne(e,t,a,r,o,n){const i=(0,s.g2)("ChooseUs"),l=(0,s.g2)("NotRepairPanel");return(0,s.uX)(),(0,s.CE)("div",null,[(0,s.bF)(i),(0,s.bF)(l,{class:"mt-14"})])}const ie={class:"p-6 bg-white rounded-xl"},le=(0,s.Lk)("h3",{class:"mt-4 text-2xl font-medium"},"Naprawiając z nami:",-1),de={class:"mt-8 leading-6 flex flex-col"};function ce(e,t,a,r,o,n){const i=(0,s.g2)("PackageElement");return(0,s.uX)(),(0,s.CE)("div",ie,[le,(0,s.Lk)("div",de,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(o.advantages,(e=>((0,s.uX)(),(0,s.Wv)(i,{class:"mt-6",key:e.id,"package-element":e.content},null,8,["package-element"])))),128))])])}var me={name:"ChooseUs",components:{PackageElement:T},data(){return{advantages:[{id:0,content:"wybierasz najwyższą jakość usług i prawie 30 lat doświadczenia"},{id:1,content:"masz pewność, że użyjemy tylko oryginalnych podzespołów i dedykowanych narzędzi"},{id:2,content:"zachowasz gwarancję producenta (jeżeli nadal występuje)"},{id:3,content:"wybierasz najwyższą jakość usług i prawie 30 lat doświadczenia"}]}}};const ue=(0,k.A)(me,[["render",ce]]);var pe=ue;const ge={class:"bg-white rounded-xl p-6"},be=(0,s.Lk)("h3",{class:"text-2xl"},"Nie jesteś zainteresowany naprawą?",-1),ye=(0,s.Lk)("p",{class:"mt-4 text-ourGray"},"Jeżeli nie jesteś zainteresowany naprawą, wybierz jedną z opcji poniżej.",-1);function fe(e,t,a,r,o,n){const i=(0,s.g2)("NotRepairCard");return(0,s.uX)(),(0,s.CE)("div",ge,[be,ye,(0,s.bF)(i,{class:"mt-5","card-title":"Zwrot",cardCost:"60zł brutto",cardContent:"Nie wyrażam zgody na przeprowadzenie odpłatnej obsługi urządzenia, proszę o jego odesłanie."}),(0,s.bF)(i,{class:"mt-5","card-title":"Utylizacja",cardCost:"0,00zł brutto",cardContent:"Dbając o środowisko naturalne, zutylizujemy niesprawne urządzenie zgodnie z międzynarodowymi normami. Posiadamy certyfikat ISO 14001:2015"})])}const he={class:"text-2xl mt-3"},ke={class:"text-emerald text-xl mt-4"},ve={class:"text-ourGray mt-3"};function we(e,t,a,r,o,n){const i=(0,s.g2)("HorizontalButton"),l=(0,s.g2)("Card");return(0,s.uX)(),(0,s.Wv)(l,{class:"shadow-[0_7px_29px_0px_rgba(100,100,111,0.2)] w-full"},{default:(0,s.k6)((()=>[(0,s.Lk)("h3",he,(0,x.v_)(a.cardTitle),1),(0,s.Lk)("p",ke,(0,x.v_)(a.cardCost),1),(0,s.Lk)("p",ve,(0,x.v_)(a.cardContent),1),(0,s.bF)(i,{class:"mt-12 border-white"},{default:(0,s.k6)((()=>[(0,s.eW)(" Wybierz ")])),_:1})])),_:1})}var xe={name:"NotRepairCard",components:{Card:N,HorizontalButton:Y},props:{cardTitle:String,cardCost:String,cardContent:String}};const Ce=(0,k.A)(xe,[["render",we]]);var ze=Ce,Ae={name:"NotRepairPanel",components:{NotRepairCard:ze}};const Le=(0,k.A)(Ae,[["render",fe]]);var Pe=Le,Ee={name:"StepFirstRight",components:{ChooseUs:pe,NotRepairPanel:Pe}};const je=(0,k.A)(Ee,[["render",ne]]);var Ne=je;const Fe={class:"text-right flex flex-col"};function Se(e,t,a,r,o,n){const i=(0,s.g2)("TimeText"),l=(0,s.g2)("TimeBar");return(0,s.uX)(),(0,s.CE)("div",Fe,[(0,s.bF)(i,{class:"sm:order-2 mb-4 mt-8 sm:mb-0"}),(0,s.bF)(l,{class:"sm:order-1"})])}const De={class:"text-center sm:text-right"},_e=(0,s.Lk)("p",{class:"uppercase text-ourGray text-lg mb-2 tracking-wide"},"Dedykowana oferta obowiązuje jeszcze przez:",-1),Xe=(0,s.Lk)("p",{class:"font-bold text-lg text-darkEmerald tracking-wider"},"06 dni 21 godzin 38 minut",-1),Oe=[_e,Xe];function We(e,t,a,r,o,n){return(0,s.uX)(),(0,s.CE)("div",De,Oe)}var Re={name:"TimeText"};const Be=(0,k.A)(Re,[["render",We]]);var Ue=Be;const Te={class:"bg-[#EAF5F2] w-100 h-2 rounded-lg overflow-hidden"},$e=(0,s.Lk)("div",{class:"w-4/5 h-2 bg-darkEmerald"},null,-1),Me=[$e];function Ie(e,t,a,r,o,n){return(0,s.uX)(),(0,s.CE)("div",Te,Me)}var Ge={name:"TimeBar"};const He=(0,k.A)(Ge,[["render",Ie]]);var Qe=He,Ke={name:"RemainingTime",components:{TimeText:Ue,TimeBar:Qe}};const Ze=(0,k.A)(Ke,[["render",Se]]);var Je=Ze;const qe=(0,s.Lk)("div",{class:"hidden sm:flex justify-between h-10"},[(0,s.Lk)("h2",{class:"text-4xl"},"Wycena zlecenia"),(0,s.Lk)("img",{src:"images/logo.png"})],-1);function Ve(e,t,a,r,o,n){const i=(0,s.g2)("ProgressStages");return(0,s.uX)(),(0,s.CE)("div",null,[qe,(0,s.bF)(i,{"stage-number":a.stageNumber},null,8,["stage-number"])])}const Ye={class:"sm:flex items-center mt-10 hidden"},et=(0,s.Lk)("h3",{class:"text-3xl font-medium sm:hidden ml-4"},"Kosztorys Naprawy",-1),tt={class:"flex items-center mt-5 sm:hidden ml-4"},at={class:"mr-5 w-[70px] h-[70px] flex flex-wrap overflow-hidden relative bg-emerald rounded-full before:rounded-full before:text-white before:text-center before:leading-[50px] before:absolute before:right-[5px] before:left-[5px] before:bottom-[5px] before:top-[5px] before:bg-[#f9f9f9]"},rt=(0,s.Lk)("div",{class:"border w-[35px] h-[35px] opacity-[0] bg-[#E6E6E6]"},null,-1),st={class:"absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50 text-black text-xl tracking-wider"},ot=(0,s.Fv)('<div class="text-lg"><p class="">Wycena zlecenia</p><p class="hidden">Zalecane akcesoria i zabezpieczenia</p><p class="hidden">Ubezpieczenie</p><p class="hidden">Podsumowanie</p></div>',1),nt=(0,s.Fv)('<div class="sm:flex w-100 mt-2 hidden"><p class="basis-1/6">Wycena</p><p class="basis-1/3 text-center">Zalecane akcesoria i zabezpieczenia</p><p class="basis-1/3 text-center">Ubezpieczenie</p><p class="basis-1/6 text-right">Podsumowanie</p></div>',1);function it(e,t,a,r,o,n){const i=(0,s.g2)("ProgressDot"),l=(0,s.g2)("ProgressBar");return(0,s.uX)(),(0,s.CE)("div",null,[(0,s.Lk)("div",Ye,[(0,s.bF)(i,{"active-progress":a.stageNumber>=0},null,8,["active-progress"]),(0,s.bF)(l,{"active-progress":a.stageNumber>=1},null,8,["active-progress"]),(0,s.bF)(i,{"active-progress":a.stageNumber>=1},null,8,["active-progress"]),(0,s.bF)(l,{"active-progress":a.stageNumber>=2},null,8,["active-progress"]),(0,s.bF)(i,{"active-progress":a.stageNumber>=2},null,8,["active-progress"]),(0,s.bF)(l,{"active-progress":a.stageNumber>=3},null,8,["active-progress"]),(0,s.bF)(i,{"active-progress":a.stageNumber>=3},null,8,["active-progress"])]),et,(0,s.Lk)("div",tt,[(0,s.Lk)("div",at,[(0,s.Lk)("div",{class:(0,x.C4)(["border w-[35px] h-[35px] bg-[#E6E6E6]",[a.stageNumber>=3?"opacity-0":"opacity-1"]])},null,2),rt,(0,s.Lk)("div",{class:(0,x.C4)(["border w-[35px] h-[35px] bg-[#E6E6E6]",[a.stageNumber>=2?"opacity-0":"opacity-1"]])},null,2),(0,s.Lk)("div",{class:(0,x.C4)(["border w-[35px] h-[35px] bg-[#E6E6E6]",[a.stageNumber>=1?"opacity-0":"opacity-1"]])},null,2),(0,s.Lk)("p",st,(0,x.v_)(a.stageNumber+1)+"/4 ",1)]),ot]),nt])}function lt(e,t,a,r,o,n){return(0,s.uX)(),(0,s.CE)("div",{class:(0,x.C4)([[a.activeProgress?"bg-emerald":"bg-[#E6E6E6]"],"w-1/3 h-0.5"])},null,2)}var dt={name:"ProgressBar",props:{activeProgress:Boolean}};const ct=(0,k.A)(dt,[["render",lt]]);var mt=ct;function ut(e,t,a,r,o,n){return(0,s.uX)(),(0,s.CE)("div",{class:(0,x.C4)([[a.activeProgress?"bg-emerald":"bg-[#E6E6E6]"],"rounded-xl w-5 h-5"])},null,2)}var pt={name:"ProgressBar",props:{activeProgress:Boolean}};const gt=(0,k.A)(pt,[["render",ut]]);var bt=gt,yt={name:"ProgressStages",components:{ProgressBar:mt,ProgressDot:bt},props:{stageNumber:Number}};const ft=(0,k.A)(yt,[["render",it]]);var ht=ft,kt={name:"PricingStages",components:{ProgressStages:ht},props:{stageNumber:Number}};const vt=(0,k.A)(kt,[["render",Ve]]);var wt=vt;const xt=(0,s.Lk)("h3",{class:"text-2xl font-medium tracking-wide mb-4"},"Dane zlecenia",-1),Ct=(0,s.Lk)("p",{class:"text-emerald tracking-wide mb-2"},"XIAOMI 11T PRO",-1),zt={class:"flex basis-2 sm:w-60 w-4/5 text-[12px] leading-7 justify-between"},At=(0,s.Lk)("div",{class:"flex flex-col"},[(0,s.Lk)("p",null,"NR ZLECENIA"),(0,s.Lk)("p",null,"NR ZGŁOSZENIA"),(0,s.Lk)("p",null,"IMEI/SN")],-1),Lt={class:"flex flex-col text-[#646464]"},Pt=(0,s.Lk)("div",{class:"sm:w-1/2 h-[150px] sm:h-auto mt-5 sm:mt-0 sm:ml-4 xl:ml-0 flex-shrink basis-auto bg-[url('images/naprawa.png')] bg-cover bg-center rounded-lg"},null,-1);function Et(e,t,a,r,o,n){const i=(0,s.g2)("Card");return(0,s.uX)(),(0,s.Wv)(i,{class:"flex sm:flex-row flex-col w-full p-8 rounded-lg justify-between"},{default:(0,s.k6)((()=>[(0,s.Lk)("div",null,[xt,Ct,(0,s.Lk)("div",zt,[At,(0,s.Lk)("div",Lt,[(0,s.Lk)("p",null,(0,x.v_)(a.orderData.orderNumber),1),(0,s.Lk)("p",null,(0,x.v_)(a.orderData.applicationNumber),1),(0,s.Lk)("p",null,(0,x.v_)(a.orderData.imeiSn),1)])])]),Pt])),_:1})}var jt={name:"OrderData",components:{Card:N},props:{orderData:Object}};const Nt=(0,k.A)(jt,[["render",Et]]);var Ft=Nt;const St=(0,s.Lk)("h3",{class:"text-2xl font-medium mt-10"}," Dodaj niezbędne akcesoria ",-1),Dt={class:"flex justify-between sm:mt-8 sm:flex-row flex-col"},_t={class:"mt-10"},Xt=(0,s.Lk)("h3",{class:"text-2xl font-medium"}," Dodaj zalecane zabezpieczenia ",-1),Ot={class:"mt-20"},Wt={class:"flex justify-between mt-10 sm:flex-row flex-col"};function Rt(e,t,a,r,o,n){const i=(0,s.g2)("AddAccesory"),l=(0,s.g2)("AddCard"),d=(0,s.g2)("PremiumCard"),c=(0,s.g2)("Card");return(0,s.uX)(),(0,s.CE)("div",null,[(0,s.Lk)("div",null,[St,(0,s.Lk)("div",Dt,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(o.accesoryElements,((e,t)=>((0,s.uX)(),(0,s.Wv)(i,{class:"w-full sm:w-[48%] mt-8 sm:mt-0",key:t,"accesory-element":e,onAddProperty:n.emitAddProperty,onDeleteProperty:n.emitDeleteProperty},null,8,["accesory-element","onAddProperty","onDeleteProperty"])))),128))])]),(0,s.Lk)("div",_t,[Xt,(0,s.Lk)("div",Ot,[(0,s.bF)(d,{class:"w-full"},{default:(0,s.k6)((()=>[(0,s.bF)(l,{"card-elements":o.recomSecurity[0],onAddProperty:n.emitAddProperty,onDeleteProperty:n.emitDeleteProperty},null,8,["card-elements","onAddProperty","onDeleteProperty"])])),_:1}),(0,s.Lk)("div",Wt,[(0,s.bF)(c,{class:"w-full sm:w-[48%]"},{default:(0,s.k6)((()=>[(0,s.bF)(l,{"card-elements":o.recomSecurity[1],onAddProperty:n.emitAddProperty,onDeleteProperty:n.emitDeleteProperty},null,8,["card-elements","onAddProperty","onDeleteProperty"])])),_:1}),(0,s.bF)(c,{class:"w-full sm:w-[48%] mt-8 sm:mt-0"},{default:(0,s.k6)((()=>[(0,s.bF)(l,{"card-elements":o.recomSecurity[2],onAddProperty:n.emitAddProperty,onDeleteProperty:n.emitDeleteProperty},null,8,["card-elements","onAddProperty","onDeleteProperty"])])),_:1})])])])])}const Bt={class:"mt-3 text-xl font-medium"},Ut={class:"mt-1 font-light text-ourGray"},Tt={class:"mt-6"},$t={class:"mt-3 text-xl font-medium"},Mt={class:"mt-1 font-light text-ourGray"},It={class:"flex relative mt-5"},Gt={key:0},Ht={key:1};function Qt(e,t,a,r,o,n){const i=(0,s.g2)("HorizontalButton"),l=(0,s.g2)("Card");return(0,s.uX)(),(0,s.Wv)(l,{class:(0,x.C4)([{"border-emerald !bg-[#f4f8f7]":o.isAdd},"duration-200 border w-[45%] overflow-hidden flex flex-col justify-between"])},{default:(0,s.k6)((()=>[(0,s.Lk)("div",null,[(0,s.Lk)("div",{class:(0,x.C4)(["bg-white w-20 h-20 bg-contain bg-center rounded-lg bg-no-repeat",a.accesoryElement.imgUrl])},null,2),(0,s.Lk)("div",null,[(0,s.Lk)("h4",Bt,(0,x.v_)(a.accesoryElement.cardName),1),(0,s.Lk)("p",Ut,(0,x.v_)(a.accesoryElement.description),1)])]),(0,s.Lk)("div",null,[(0,s.Lk)("div",null,[(0,s.Lk)("div",Tt,[(0,s.Lk)("h4",$t,(0,x.v_)(a.accesoryElement.grossCost)+" zł brutto ",1),(0,s.Lk)("p",Mt,(0,x.v_)(a.accesoryElement.netCost)+" zł netto ",1)]),(0,s.Lk)("div",It,[(0,s.bF)(i,{class:(0,x.C4)(["ml-0 duration-[.2s] w-full",{"bg-emeraldLight rounded-[100px] added":o.isAdd}]),onClick:n.emitAddProperty},{default:(0,s.k6)((()=>[o.isAdd?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("p",Gt,"Dodaj do naprawy +")),o.isAdd?((0,s.uX)(),(0,s.CE)("p",Ht,"Dodane")):(0,s.Q3)("",!0)])),_:1},8,["class","onClick"]),(0,s.Lk)("div",{class:(0,x.C4)(["w-[30px] h-[30px] flex justify-center items-center top-[50%] translate-y-[-50%] right-[-70px] absolute duration-200 hover:translate-y-[-70%]",{"right-[0]":o.isAdd}])},[(0,s.Lk)("img",{class:"w-[25px] cursor-pointer",src:"images/trash.svg",onClick:t[0]||(t[0]=(...e)=>n.emitDeleteProperty&&n.emitDeleteProperty(...e))})],2)])])])])),_:1},8,["class"])}var Kt={name:"AddAccesory",props:{accesoryElement:{type:Object}},components:{Card:N,HorizontalButton:Y},data(){return{isAdd:!1}},methods:{emitAddProperty(){this.isAdd||(this.$emit("add-property",this.accesoryElement),this.isAdd=!0)},emitDeleteProperty(){this.isAdd&&(this.$emit("delete-property",this.accesoryElement.cardName,this.accesoryElement.grossCost,this.accesoryElement.netCost),this.isAdd=!1)}}};const Zt=(0,k.A)(Kt,[["render",Qt]]);var Jt=Zt;const qt={class:"overflow-hidden"},Vt={class:"mt-4 text-xl font-medium my-5"},Yt={class:"leading-[25px] text-ourGray text-sm border-b pb-4"},ea={class:"text-emerald text-[19px] mt-5"},ta={class:"text-ourGray text-sm mt-2"},aa={class:"flex relative mt-5"};function ra(e,t,a,r,o,n){const i=(0,s.g2)("PackageElement"),l=(0,s.g2)("AddButton");return(0,s.uX)(),(0,s.CE)("div",qt,[(0,s.Lk)("div",{class:(0,x.C4)(["bg-white w-20 h-20 bg-contain bg-center rounded-lg bg-no-repeat",a.cardElements.imgUrl])},null,2),(0,s.Lk)("h3",Vt,(0,x.v_)(a.cardElements.cardName),1),(0,s.Lk)("div",Yt,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(a.cardElements.packageElements,(e=>((0,s.uX)(),(0,s.Wv)(i,{class:"mt-4",key:e.id,"package-element":e.element,availibity:e.availibity},null,8,["package-element","availibity"])))),128))]),(0,s.Lk)("p",ea,(0,x.v_)(a.cardElements.grossCost)+" zł brutto",1),(0,s.Lk)("p",ta,(0,x.v_)(a.cardElements.netCost)+" zł netto",1),(0,s.Lk)("div",aa,[(0,s.bF)(l,{isAdd:o.isAdd,onAddProperty:n.add,onDeleteProperty:n.deleteAdd},null,8,["isAdd","onAddProperty","onDeleteProperty"])])])}const sa={class:"w-full"},oa={key:0},na={key:1};function ia(e,t,a,r,o,n){const i=(0,s.g2)("HorizontalButton");return(0,s.uX)(),(0,s.CE)("div",sa,[(0,s.bF)(i,{class:(0,x.C4)(["ml-0 w-full duration-[.2s]",{"bg-emeraldLight rounded-[100px] added":a.isAdd}]),onClick:n.add},{default:(0,s.k6)((()=>[a.isAdd?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("p",oa,"Dodaj do naprawy +")),a.isAdd?((0,s.uX)(),(0,s.CE)("p",na,"Dodane")):(0,s.Q3)("",!0)])),_:1},8,["class","onClick"]),(0,s.Lk)("div",{class:(0,x.C4)(["w-[30px] h-[30px] flex justify-center items-center top-[50%] translate-y-[-50%] right-[-70px] absolute duration-200 hover:translate-y-[-70%]",{"right-[0]":a.isAdd}])},[(0,s.Lk)("img",{class:"w-[25px] cursor-pointer",src:"images/trash.svg",onClick:t[0]||(t[0]=(...e)=>n.deleteAdd&&n.deleteAdd(...e))})],2)])}var la={name:"AddButton",components:{HorizontalButton:Y},props:{isAdd:Boolean},methods:{add(){this.isAdd||(this.$emit("add-property"),console.log(this.isAdd))},deleteAdd(){this.isAdd&&this.$emit("delete-property")}}};const da=(0,k.A)(la,[["render",ia]]);var ca=da,ma={name:"AddCard",props:{premiumCard:Boolean,netCost:Number,grossCost:Number,cardElements:{type:Object},cardTitle:String,active:{type:Boolean,default:!1}},components:{PackageElement:T,AddButton:ca},data(){return{isAdd:!1}},watch:{active(e,t){!0===t&&this.changeAdd()}},methods:{add(){this.active||(this.$emit("add-property",this.cardElements),this.isAdd=!0)},deleteAdd(){this.isAdd&&(this.$emit("delete-property",this.cardElements.cardName,this.cardElements.grossCost,this.cardElements.netCost),this.isAdd=!this.isAdd)},changeAdd(){this.isAdd&&(this.$emit("change-property",this.cardElements.cardName,this.cardElements.grossCost,this.cardElements.netCost),this.isAdd=!this.isAdd)}}};const ua=(0,k.A)(ma,[["render",ra]]);var pa=ua,ga={name:"StepSecondLeft",components:{Card:N,PremiumCard:K,AddCard:pa,AddAccesory:Jt},methods:{emitAddProperty(e){this.$emit("add-property",e)},emitDeleteProperty(e,t,a){this.$emit("delete-property",e,t,a)}},data(){return{accesoryElements:[{id:0,cardName:"Bateria",packageElements:[{id:3,element:"Bateria"}],description:"natualne zużycie eksploatacyjne",grossCost:227.85,netCost:185.24,imgUrl:"bg-[url('images/samsung.jpeg')]"},{id:1,cardName:"Ramka tylnej kamerki",description:"rysy",grossCost:227.85,netCost:185.24,imgUrl:"bg-[url('images/ramka.svg')]"}],recomSecurity:[{cardName:"Folia ochronna MATT",description:"Wysokiej klasy folia ochronna",packageElements:[{id:0,element:"Wybierasz najwyższą jakość usług i 30 lat doświadczenia"},{id:1,element:"Wybierasz najwyższą jakość usług i 30 lat doświadczenia"},{id:2,element:"Wybierasz najwyższą jakość usług i 30 lat doświadczenia"}],grossCost:227.85,netCost:185.24,imgUrl:"bg-[url('images/folia_premium.svg')]"},{cardName:"Folia ochronna Basic",description:"Wysokiej klasy folia ochronna",packageElements:[{id:0,element:"Wybierasz najwyższą jakość usług i 30 lat doświadczenia"},{id:1,element:"Wybierasz najwyższą jakość usług i 30 lat doświadczenia"},{id:2,element:"Wybierasz najwyższą jakość usług i 30 lat doświadczenia"}],grossCost:227.85,netCost:185.24,imgUrl:"bg-[url('images/folia_premium.svg')]"},{cardName:"Folia ochronna Basic",description:"Wysokiej klasy folia ochronna",packageElements:[{id:0,element:"Wybierasz najwyższą jakość usług i 30 lat doświadczenia"},{id:1,element:"Wybierasz najwyższą jakość usług i 30 lat doświadczenia"},{id:2,element:"Wybierasz najwyższą jakość usług i 30 lat doświadczenia"}],grossCost:227.85,netCost:185.24,imgUrl:"bg-[url('images/folia_premium.svg')]"}]}}};const ba=(0,k.A)(ga,[["render",Rt]]);var ya=ba;function fa(e,t,a,r,o,n){const i=(0,s.g2)("HorizontalButton"),l=(0,s.g2)("ChoiceCard"),d=(0,s.g2)("Card");return(0,s.uX)(),(0,s.CE)("div",null,[(0,s.bF)(d,{class:"w-full"},{default:(0,s.k6)((()=>[(0,s.bF)(l,{"card-data":a.cardData},{default:(0,s.k6)((()=>[(0,s.bF)(i,{onClick:n.emitUpdate,class:"mt-4","premium-card":!0},{default:(0,s.k6)((()=>[(0,s.eW)(" Następny krok ")])),_:1},8,["onClick"])])),_:1},8,["card-data"])])),_:1})])}var ha={name:"StepSecondRight",components:{ChoiceCard:I,Card:N,HorizontalButton:Y},props:{cardData:Object},methods:{emitUpdate(){this.$emit("next-stage")}}};const ka=(0,k.A)(ha,[["render",fa]]);var va=ka;const wa=(0,s.Lk)("h3",{class:"text-xl"}," Wybierz ubezpieczenie dla Twojego urządzenia ",-1),xa={class:"flex justify-between mt-20 sm:flex-row flex-col"};function Ca(e,t,a,r,o,n){const i=(0,s.g2)("AddCard"),l=(0,s.g2)("PremiumCard"),d=(0,s.g2)("Card");return(0,s.uX)(),(0,s.CE)("div",null,[wa,(0,s.Lk)("div",xa,[(0,s.bF)(l,{class:"sm:w-[48%] w-full"},{default:(0,s.k6)((()=>[(0,s.bF)(i,{"card-elements":o.recomSecurity[0],active:o.activeSecurity.cardName===o.recomSecurity[0].cardName,onAddProperty:n.emitAddProperty,onDeleteProperty:n.emitDeleteProperty,onChangeProperty:n.emitChangeProperty},null,8,["card-elements","active","onAddProperty","onDeleteProperty","onChangeProperty"])])),_:1}),(0,s.bF)(d,{class:"sm:w-[48%] sm:mt-0 mt-8 w-full"},{default:(0,s.k6)((()=>[(0,s.bF)(i,{"card-elements":o.recomSecurity[1],active:o.activeSecurity.cardName===o.recomSecurity[1].cardName,onAddProperty:n.emitAddProperty,onDeleteProperty:n.emitDeleteProperty,onChangeProperty:n.emitChangeProperty},null,8,["card-elements","active","onAddProperty","onDeleteProperty","onChangeProperty"])])),_:1})])])}var za={name:"StepThirdLeft",components:{PremiumCard:K,AddCard:pa,Card:N},methods:{emitAddProperty(e){this.$emit("add-property",e),this.activeSecurity=e},emitDeleteProperty(e,t,a){this.$emit("delete-property",e,t,a),this.activeSecurity={}},emitChangeProperty(e,t,a){this.$emit("delete-property",e,t,a)}},data(){return{activeSecurity:{},recomSecurity:[{cardName:"Kompleksowa ochrona",packageElements:[{id:0,element:"ponowna awaria urządzenia"},{id:1,element:"Wybierasz najwyższą jakość usług i 30 lat doświadczenia"},{id:2,element:"kradzież z włamaniem lub rabunek"}],grossCost:237.85,netCost:185.24,imgUrl:"bg-[url('images/shield_star.svg')]"},{cardName:"Ochrona przed usterką",packageElements:[{id:0,element:"ponowna awaria urządzenia"},{id:1,element:"Wybierasz najwyższą jakość usług i 30 lat doświadczenia"},{id:2,element:"kradzież z włamaniem lub rabunek",availibity:!1}],grossCost:227.85,netCost:185.24,imgUrl:"bg-[url('images/shield_warning.svg')]"}]}}};const Aa=(0,k.A)(za,[["render",Ca]]);var La=Aa;function Pa(e,t,a,r,o,n){const i=(0,s.g2)("SummaryCard");return(0,s.uX)(),(0,s.CE)("div",null,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(a.ownChoice,(e=>((0,s.uX)(),(0,s.Wv)(i,{key:e.id,ownChoice:e,class:"mt-4",onAddProperty:n.emitAddProperty,onDeleteProperty:n.emitDeleteProperty},null,8,["ownChoice","onAddProperty","onDeleteProperty"])))),128))])}const Ea={class:"mt-4 text-medium"},ja={class:"text-sm text-ourGray"},Na={class:"sm:text-right sm:w-2/5 sm:mt-0 mt-4"},Fa={class:"text-medium"},Sa={class:"text-sm text-ourGray mt-2"},Da={class:"flex relative mt-5"},_a={key:0},Xa={key:1};function Oa(e,t,a,r,o,n){const i=(0,s.g2)("HorizontalButton"),l=(0,s.g2)("Card");return(0,s.uX)(),(0,s.CE)("div",null,[(0,s.bF)(l,{class:"w-full flex flex-col justify-between sm:flex-row sm:items-center overflow-hidden"},{default:(0,s.k6)((()=>[(0,s.Lk)("div",null,[(0,s.Lk)("div",{class:(0,x.C4)(["w-[70px] h-[70px] bg-contain bg-no-repeat rounded-xl",a.ownChoice.imgUrl])},null,2),(0,s.Lk)("h3",Ea,(0,x.v_)(a.ownChoice.cardName),1),(0,s.Lk)("p",ja,(0,x.v_)(a.ownChoice.description),1)]),(0,s.Lk)("div",Na,[(0,s.Lk)("p",Fa,(0,x.v_)(a.ownChoice.grossCost)+" zł brutto ",1),(0,s.Lk)("p",Sa,(0,x.v_)(a.ownChoice.netCost)+" zł netto ",1),(0,s.Lk)("div",Da,[(0,s.bF)(i,{class:(0,x.C4)(["ml-0 w-full duration-[.2s]",{"!w-[80%] bg-emeraldLight rounded-[100px]":o.isAdd}]),onClick:n.emitAddProperty},{default:(0,s.k6)((()=>[o.isAdd?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("p",_a,"Dodaj do naprawy +")),o.isAdd?((0,s.uX)(),(0,s.CE)("p",Xa,"Dodane")):(0,s.Q3)("",!0)])),_:1},8,["class","onClick"]),(0,s.Lk)("div",{class:(0,x.C4)(["w-[30px] h-[30px] flex justify-center items-center top-[50%] translate-y-[-50%] right-[-70px] absolute duration-200 hover:translate-y-[-70%]",{"right-[1%]":o.isAdd}])},[(0,s.Lk)("img",{class:"w-[25px] cursor-pointer",src:"images/trash.svg",onClick:t[0]||(t[0]=(...e)=>n.emitDeleteProperty&&n.emitDeleteProperty(...e))})],2)])])])),_:1})])}var Wa={name:"SummaryCard",components:{HorizontalButton:Y,Card:N},props:{ownChoice:Object},data(){return{isAdd:!0}},methods:{emitAddProperty(){this.isAdd||(this.$emit("add-property",this.ownChoice),this.isAdd=!0)},emitDeleteProperty(){this.isAdd&&(this.$emit("delete-property",this.ownChoice.cardName,this.ownChoice.grossCost,this.ownChoice.netCost),this.isAdd=!1)}}};const Ra=(0,k.A)(Wa,[["render",Oa]]);var Ba=Ra,Ua={name:"StepFourthLeft",components:{SummaryCard:Ba},props:{ownChoice:Array},methods:{emitAddProperty(e){this.$emit("add-property",e)},emitDeleteProperty(e,t,a){this.$emit("delete-property",e,t,a)}}};const Ta=(0,k.A)(Ua,[["render",Pa]]);var $a=Ta;const Ma=(0,s.Lk)("h2",{class:"sm:hidden text-3xl mt-4"},"Podsumowanie",-1),Ia=(0,s.Lk)("div",{class:"hidden sm:flex justify-between h-10"},[(0,s.Lk)("h2",{class:"text-4xl"},"Podsumowanie"),(0,s.Lk)("img",{src:"images/logo.png"})],-1),Ga=(0,s.Lk)("div",{class:"flex items-center"},[(0,s.Lk)("div",{class:"text-3xl"},"📄"),(0,s.Lk)("h3",{class:"text-2xl ml-4"},[(0,s.eW)("Żądanie natychmiatowego "),(0,s.Lk)("br"),(0,s.eW)(" przystąpienia do wykonania Umowy przez serwis")])],-1),Ha={class:"border-t pt-4 mt-8"},Qa=(0,s.Lk)("span",{class:"text-emerald underline cursor-pointer"}," Rowiń ",-1),Ka={class:"flex mt-8 justify-between items-center"};function Za(e,t,a,r,o,n){const i=(0,s.g2)("MobileTopbar"),l=(0,s.g2)("LabelElement"),d=(0,s.g2)("HorizontalButton"),c=(0,s.g2)("Card");return(0,s.uX)(),(0,s.CE)("div",null,[(0,s.bF)(i,{class:"sm:hidden"}),Ma,Ia,(0,s.bF)(c,{class:"w-full mt-10"},{default:(0,s.k6)((()=>[Ga,(0,s.Lk)("div",Ha,[(0,s.bF)(l,{option:"option1"},{default:(0,s.k6)((()=>[(0,s.eW)(" Z uwagi na wykonanie przez Serwis usług w zakresie Naprawy, wnoszę o natychmiastowe rozpoczęcie świadczenia usług w zakresie wynikającym z zawartej Umowy, Oświadczam, że Serwis poinformował mnie o skutkach żądania natychmiastowego przystąpienia do wykonania Umowy. "),Qa])),_:1}),(0,s.bF)(l,{option:"option2"},{default:(0,s.k6)((()=>[(0,s.eW)(" Nie wyrażam zgody na natychmiastowe rozpoczęcie świadczenia usług w zakresie wynikającym z zawartej Umowy. Przyjmę do wiadomości, że świadczenie rozpocznie sie po upływie terminu od odstąpienia od Umowy ")])),_:1})]),(0,s.Lk)("div",Ka,[(0,s.bF)(d,{class:"!w-[48%] !m-0"},{default:(0,s.k6)((()=>[(0,s.eW)(" Cofnij ")])),_:1}),(0,s.bF)(d,{premiumCard:!0,class:"!w-[48%] !m-0",onClick:n.emitUpdate},{default:(0,s.k6)((()=>[(0,s.eW)(" Zatwierdź ")])),_:1},8,["onClick"])])])),_:1})])}const Ja={class:"p-4 flex justify-between mt-2"},qa=(0,s.Fv)('<img class="" src="images/logo.png"><div class="flex"><button class="w-10 h-10 mr-5"><img class="m-auto" src="images/Magnifier.svg"></button><button class="w-10 h-10"><img class="m-auto" src="images/Hamburger_Menu.svg"></button></div>',2),Va=[qa];function Ya(e,t,a,r,o,n){return(0,s.uX)(),(0,s.CE)("div",Ja,Va)}var er={name:"MobileTopbar"};const tr=(0,k.A)(er,[["render",Ya]]);var ar=tr;const rr={class:"custom-radio flex justify-center mt-4"},sr=["id","value"],or=["for"];function nr(e,t,a,r,o,n){return(0,s.uX)(),(0,s.CE)("div",null,[(0,s.Lk)("div",rr,[(0,s.Lk)("input",{type:"radio",id:a.option,name:"customRadio",value:a.option},null,8,sr),(0,s.Lk)("label",{class:"w-full text-sm text-ourGray",for:a.option},[(0,s.RG)(e.$slots,"default")],8,or)])])}var ir={name:"LabelElement",props:{option:String}};const lr=(0,k.A)(ir,[["render",nr]]);var dr=lr,cr={name:"StepFifth",components:{Card:N,MobileTopbar:ar,HorizontalButton:Y,LabelElement:dr},methods:{emitUpdate(){this.$emit("next-stage")}}};const mr=(0,k.A)(cr,[["render",Za]]);var ur=mr;const pr={class:"xl:w-[50%] xl:w-[70%] m-auto"},gr=(0,s.Lk)("h2",{class:"sm:hidden text-3xl mt-4"},"Podsumowanie",-1),br=(0,s.Lk)("div",{class:"hidden sm:flex justify-between h-10"},[(0,s.Lk)("h2",{class:"text-4xl"},"Podsumowanie"),(0,s.Lk)("img",{src:"images/logo.png"})],-1),yr=(0,s.Lk)("div",{class:"flex items-center"},[(0,s.Lk)("div",{class:"text-3xl"},"💳"),(0,s.Lk)("h3",{class:"text-2xl ml-4"},"Prosimy o wybranie formy płatności")],-1),fr={class:"border-t pt-4 mt-8"},hr={class:"flex mt-8 justify-between items-center"};function kr(e,t,a,r,o,n){const i=(0,s.g2)("MobileTopbar"),l=(0,s.g2)("LabelElement"),d=(0,s.g2)("HorizontalButton"),c=(0,s.g2)("Card");return(0,s.uX)(),(0,s.CE)("div",pr,[(0,s.bF)(i,{class:"sm:hidden"}),gr,br,(0,s.bF)(c,{class:"w-full mt-10"},{default:(0,s.k6)((()=>[yr,(0,s.Lk)("div",fr,[(0,s.bF)(l,{option:"option1"},{default:(0,s.k6)((()=>[(0,s.eW)(" Płatność online ")])),_:1}),(0,s.bF)(l,{option:"option2"},{default:(0,s.k6)((()=>[(0,s.eW)(" Płatność za pobraniem ")])),_:1})]),(0,s.Lk)("div",hr,[(0,s.bF)(d,{class:"!w-[48%] !m-0"},{default:(0,s.k6)((()=>[(0,s.eW)(" Cofnij ")])),_:1}),(0,s.bF)(d,{premiumCard:!0,class:"!w-[48%] !m-0"},{default:(0,s.k6)((()=>[(0,s.eW)(" Zatwierdź ")])),_:1})])])),_:1})])}var vr={name:"StepSixth",components:{Card:N,MobileTopbar:ar,HorizontalButton:Y,LabelElement:dr}};const wr=(0,k.A)(vr,[["render",kr]]);var xr=wr,Cr={name:"MainContent",components:{MobileTopbar:ar,RemainingTime:Je,StepFirstLeft:oe,StepFirstRight:Ne,StepSecondRight:va,StepSecondLeft:ya,StepThirdLeft:La,PricingStages:wt,OrderData:Ft,StepFourthLeft:$a,StepFifth:ur,StepSixth:xr},data(){return{stageNumber:0,orderData:{orderNumber:"1007274392",applicationNumber:"CSS-212636",imeiSn:"869345678923837"},nextKey:7,cardData:{packageElements:[]},ownChoice:[]}},methods:{nextStage(){this.stageNumber<=4&&(this.stageNumber++,this.scrollTop())},scrollTop(){window.scrollTo({top:0})},replaceObject(e){this.cardData=e},addObject(e){this.addObjectOwnChoice(e),this.ownChoice.push(e)},addObjectOwnChoice(e){const t=`key${this.nextKey}`;this.cardData.packageElements.push({id:t,element:e.cardName}),this.nextKey+=1,this.cardData.grossCost+=e.grossCost,this.cardData.netCost+=e.netCost},removeObjectOwnChoice(e,t,a){const r=this.cardData.packageElements.findIndex((t=>t.element===e));-1!==r&&(this.cardData.packageElements.splice(r,1),this.cardData.grossCost-=t,this.cardData.netCost-=a)},removeObject(e,t,a){this.removeObjectOwnChoice(e,t,a);const r=this.ownChoice.findIndex((t=>t.cardName===e));-1!==r&&this.ownChoice.splice(r,1)}}};const zr=(0,k.A)(Cr,[["render",m]]);var Ar=zr,Lr={name:"App",components:{Content:Ar}};const Pr=(0,k.A)(Lr,[["render",o]]);var Er=Pr;(0,r.Ef)(Er).mount("#app")}},t={};function a(r){var s=t[r];if(void 0!==s)return s.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,r,s,o){if(!r){var n=1/0;for(c=0;c<e.length;c++){r=e[c][0],s=e[c][1],o=e[c][2];for(var i=!0,l=0;l<r.length;l++)(!1&o||n>=o)&&Object.keys(a.O).every((function(e){return a.O[e](r[l])}))?r.splice(l--,1):(i=!1,o<n&&(n=o));if(i){e.splice(c--,1);var d=s();void 0!==d&&(t=d)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,s,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,r){var s,o,n=r[0],i=r[1],l=r[2],d=0;if(n.some((function(t){return 0!==e[t]}))){for(s in i)a.o(i,s)&&(a.m[s]=i[s]);if(l)var c=l(a)}for(t&&t(r);d<n.length;d++)o=n[d],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(c)},r=self["webpackChunkccs"]=self["webpackChunkccs"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[504],(function(){return a(8749)}));r=a.O(r)})();
//# sourceMappingURL=app.0f41e1a9.js.map