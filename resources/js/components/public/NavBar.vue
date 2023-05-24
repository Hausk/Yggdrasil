<template>
	<nav class="bg-gray-800 text-white h-70px w-98vw flex items-center justify-between">
		<div class="flex items-center">
			<img src="website-icon.png" alt="Website Icon" class="h-6 w-6 ml-4 mr-2">
				
			<div class="relative inline-block text-left">
			<button type="button" class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="dropdown-menu" aria-expanded="true" @click="toggleDropdown">
				Informations
				<svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
				<path fill-rule="evenodd" d="M10 3.586l4.95 4.95a1 1 0 010 1.414L10 16.414l-4.95-4.95a1 1 0 010-1.414L10 3.586zM8 11a1 1 0 100 2 1 1 0 000-2zm4 0a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd" />
				</svg>
			</button>
			<transition
				enter-active-class="transition-opacity duration-200"
				enter-class="opacity-0"
				enter-to-class="opacity-100"
				leave-active-class="transition-opacity duration-200"
				leave-class="opacity-100"
				leave-to-class="opacity-0"
			>
				<div v-if="dropdownOpen" class="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
					<div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-menu">
					<a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Wiki</a>
					<a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Word Status</a>
					<a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Patch Notes</a>
					</div>
				</div>
			</transition>
		</div>
		<a href="#" class="ml-4 mr-6 hover:text-gray-500">Actualities</a>
		<a href="#" class="ml-4 mr-6 hover:text-gray-500">Ladder</a>
		</div>
		<div class="flex items-center">
			<div class="dark-mode-switch" @click="toggleDarkMode" :class="{ dark: isDarkMode }">
				<div class="border-portal">
					<div class="portal"></div>
				</div>
			</div>
	    		<div class="relative inline-block text-left">
				<button type="button" class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="dropdown-menu" aria-expanded="true" @click="toggleAccountDropdown">
					Account
					<svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
						<path fill-rule="evenodd" d="M10 3.586l4.95 4.95a1 1 0 010 1.414L10 16.414l-4.95-4.95a1 1 0 010-1.414L10 3.586zM8 11a1 1 0 100 2 1 1 0 000-2zm4 0a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd" />
					</svg>
				</button>
	      			<div v-if="accountDropdownOpen" class="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
					<div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-menu">
						<a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Wiki</a>
						<a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Playerlist</a>
						<a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Word Status</a>
						<a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Patch Notes</a>
					</div>
	      			</div>
	    		</div>
		</div>
		<Menu as="div" class="relative inline-block text-left">
			<div>
				<MenuButton class="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30">
					Account <font-awesome-icon class="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100" aria-hidden="true" icon="fa-solid fa-chevron-down" fixed-width />
				</MenuButton>
			</div>
			<transition
				enter-active-class="transition duration-100 ease-out"
				enter-from-class="transform scale-95 opacity-0"
				enter-to-class="transform scale-100 opacity-100"
				leave-active-class="transition duration-75 ease-in"
				leave-from-class="transform scale-100 opacity-100"
				leave-to-class="transform scale-95 opacity-0"
			>
				<MenuItems
				class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
				>
				<div class="px-1 py-1">
				<MenuItem v-slot="{ active }">
				<button
					:class="[
					active ? 'bg-violet-500 text-white' : 'text-gray-900',
					'group flex w-full items-center rounded-md px-2 py-2 text-sm',
					]"
				>
					<EditIcon
					:active="active"
					class="mr-2 h-5 w-5 text-violet-400"
					aria-hidden="true"
					/>
					Edit
				</button>
				</MenuItem>
				<MenuItem v-slot="{ active }">
				<button
					:class="[
					active ? 'bg-violet-500 text-white' : 'text-gray-900',
					'group flex w-full items-center rounded-md px-2 py-2 text-sm',
					]"
				>
					<DuplicateIcon
					:active="active"
					class="mr-2 h-5 w-5 text-violet-400"
					aria-hidden="true"
					/>
					Duplicate
				</button>
				</MenuItem>
				</div>
				<div class="px-1 py-1">
				<MenuItem v-slot="{ active }">
				<button
					:class="[
					active ? 'bg-violet-500 text-white' : 'text-gray-900',
					'group flex w-full items-center rounded-md px-2 py-2 text-sm',
					]"
				>
					<ArchiveIcon
					:active="active"
					class="mr-2 h-5 w-5 text-violet-400"
					aria-hidden="true"
					/>
					Archive
				</button>
				</MenuItem>
				<MenuItem v-slot="{ active }">
				<button
					:class="[
					active ? 'bg-violet-500 text-white' : 'text-gray-900',
					'group flex w-full items-center rounded-md px-2 py-2 text-sm',
					]"
				>
					<MoveIcon
					:active="active"
					class="mr-2 h-5 w-5 text-violet-400"
					aria-hidden="true"
					/>
					Move
				</button>
				</MenuItem>
				</div>

				<div class="px-1 py-1">
				<MenuItem v-slot="{ active }">
				<button
					:class="[
					active ? 'bg-violet-500 text-white' : 'text-gray-900',
					'group flex w-full items-center rounded-md px-2 py-2 text-sm',
					]"
				>
					<DeleteIcon
					:active="active"
					class="mr-2 h-5 w-5 text-violet-400"
					aria-hidden="true"
					/>
					Delete
				</button>
				</MenuItem>
				</div>
				</MenuItems>
			</transition>
			</Menu>
	</nav>
</template>
      
<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
	import { ref, watch } from 'vue';
      	
	const dropdownOpen = ref(false);
	const accountDropdownOpen = ref(false);
	const toggleDropdown = () => {
		dropdownOpen.value = !dropdownOpen.value;
	};
	const toggleAccountDropdown = () => {
		accountDropdownOpen.value = !accountDropdownOpen.value;
	};
	const isDarkMode = ref(false);
	watch(isDarkMode, (newVal) => {
		document.documentElement.classList.toggle('dark', newVal);
	});
	function toggleDarkMode() {
		isDarkMode.value = !isDarkMode.value;
	}
</script>